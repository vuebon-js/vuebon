<template>
    <main id="app">
        <keep-alive v-if="$exception.code">
            <component :is="errorComponentName" />
        </keep-alive>
        <template v-else>
            <vb-header></vb-header>
            <router-view></router-view>
        </template>
        <vb-loader />
    </main>
</template>

<script>
    import {defineAsyncComponent} from 'vue';
    export default  {
        components: {
            VbHeader: defineAsyncComponent(() => import('./components/Header'))
        },
        computed: {
            errorComponentName() {
                return `error-${this.$exception.code}`
            }
        }
    }
</script>
