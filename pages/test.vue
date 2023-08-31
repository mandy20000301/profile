<template>
    <div class="flex items-center justify-center h-[100vh] border">
        <!-- <button class="custom-btn border rounded-full p-3 flex items-center justify-center">
            <NuxtIcon name="github1" class="block text-[20px]"/>
        </button> -->
        <button class="test2 rounded-full bg-primary-02 w-[130px] py-[8px] text-primary-03 relative">
            <span class="icon">
                <NuxtIcon name="arr-right" class="text-primary-03 text-center block w-fit mx-auto"/>
            </span>
            <span class="txt">button</span>
        </button>
    </div>
</template>
<style lang="postcss" scoped>
.test2{
    .txt{
        @apply translate-x-[0%] relative block  opacity-100;
        transition: all .2s ease-out;
    }
    .icon{
       @apply block w-full -translate-x-[100%] absolute top-[50%] -translate-y-1/2  text-center  opacity-0;
       transition: all .2s ease-out;
    }
    &:hover{
        .txt{
            @apply translate-x-[100%]  opacity-0;
            transition: all .2s ease-out;
        }
        .icon{
            @apply translate-x-[0%] opacity-100;
            transition: all .2s ease-out;
        }
    }
}
    .custom-btn{
        @apply relative ;
        &::after{
            content: '';
            @apply absolute block rounded-full bg-primary-01 w-[0%] h-[0%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-[1s];
        } 
        &:hover{
            &::after{
            content: '';
            @apply  w-[100%] h-[100%] transition-[1s] ;
        } 
        }
    }
</style>