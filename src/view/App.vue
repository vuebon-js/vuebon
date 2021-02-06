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
    import {make} from "@vuebon/framework/utils/helpers"
    export default  {
        components: {
            VbHeader: () => import('./component/part/Header'),
        },
        computed: {
            errorComponentName() {
                return `error-${this.$exception.code}`
            }
        },
        mounted() {
            let exampleServiceA = make('example');
            exampleServiceA.txt = 'at yaz';

            let exampleServiceB = make('example');
            exampleServiceB.txt = 'at yazma';

            console.log(exampleServiceA.txt, exampleServiceB.txt)
        }
    }
</script>
