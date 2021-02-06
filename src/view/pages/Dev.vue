<template>
    <div id="dev-component" class="container mx-auto">
        <p v-for="(v, k) in $user" :key="k">{{v}}</p>
        <input type="text" class="border" v-model="$user.name">
        <router-link to="/a">Go Fallback</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
    }
</script>