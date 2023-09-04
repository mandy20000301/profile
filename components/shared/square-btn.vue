<template>
    <a :href="link" target="_blank">
        <div class="square-btn">
            <span class="text">{{ text }}</span>
            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
        </div>
    </a>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: "VIEW MORE",
        },
        link: {
            type: String,
            default: "/",
        },
    },
};
</script>
<style lang="postcss" scoped>
div.square-btn {
    @apply text-primary-02;

   

    padding: 0.7em calc(0.7em * 1.2);
    margin-bottom: 1.4em;
    display: inline-block;
    position: relative;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    letter-spacing: 0.64px;
    line-height: 20px;
    width: fit;

    .text {
        font-size: 14px;
        font-weight: 600;
        transform: translate3d(0, 0.7em, 0);
        display: block;
        transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
    }

    &:after {
        position: absolute;
        content: "";
        bottom: -8px;
        left: calc(0.7em * 1.2);
        right: calc(0.7em * 1.2);
        height: 1px;
        @apply bg-primary-01;

        transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s,
            right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s,
            left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;
        transform-origin: left;
    }
}

.line {
    position: absolute;
    @apply bg-primary-01;

    &.-right,
    &.-left {
        width: 1px;
        bottom: -3px;
        top: -3px;
        transform: scale3d(1, 0, 1);
    }

    &.-top,
    &.-bottom {
        height: 1px;
        left: -3px;
        right: -3px;
        transform: scale3d(0, 1, 1);
    }

    &.-right {
        right: -3px;
        transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
        transform-origin: top;
    }

    &.-top {
        top: -3px;
        transition: transform 0.08s linear 0.43s;
        transform-origin: left;
    }

    &.-left {
        left: -3px;
        transition: transform 0.08s linear 0.51s;
        transform-origin: bottom;
    }

    &.-bottom {
        bottom: -3px;
        transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);
        transform-origin: right;
    }
}

div.square-btn:hover,
div.square-btn:active {
    .text {
        transform: translate3d(0, 0, 0);
        transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
    }

    &:after {
        transform: scale3d(0, 1, 1);
        right: -3px;
        left: -3px;
        transform-origin: right;
        transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s,
            right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;
    }

    .line {
        transform: scale3d(1, 1, 1);

        &.-right {
            transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;
            transform-origin: bottom;
        }

        &.-top {
            transition: transform 0.08s linear 0.4s;
            transform-origin: right;
        }

        &.-left {
            transition: transform 0.08s linear 0.48s;
            transform-origin: top;
        }

        &.-bottom {
            transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
            transform-origin: left;
        }
    }
}</style>
