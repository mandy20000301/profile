import { nextTick } from "vue";

function onIntersectionObserver(el, className = "fade-in", stop = false) {
    const callback = (entries) => {
        for (const entry of entries) {
            el.classList.toggle(className, entry.isIntersecting);
        }
    };

    const windowHeight = window.innerHeight;
    const options = {
        threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);
    observer.unobserve(el);
    if (!stop) observer.observe(el);
}

const classNameMap = {
    in: "animate-fade-in",
    up: "animate-fade-up",
    down: "animate-fade-down",
    out:"animate-zoom-out",
    reveal:'animate-reveal',
};

const fade = {
    beforeMount(el) {
        el.classList.add("opacity-0");
    },
    mounted(el, binding) {
        const className = classNameMap[binding.arg] ?? classNameMap["in"];
        nextTick(() => onIntersectionObserver(el, className));
    },
    beforeUnmount(el, binding) {
        const className = classNameMap[binding.arg] ?? classNameMap["in"];
        el.classList.remove("opacity-0", className);
        nextTick(() => onIntersectionObserver(el, null, true));
    },
};


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("fade", {
        ...fade,
        getSSRProps() {
            return {}
        }
    });
})