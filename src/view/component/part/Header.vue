<template>
    <header v-if="showHeader" style="height: 65px; border-bottom: 1px solid #a2a2a2; left: 0; top: 0; width: 100%">
        <nav style="display: flex; justify-content: flex-end; align-items: center;height: 100%; padding: 0px 15px">
            <router-link :to="{name: 'home'}" style="font-size:18px; margin-right: 15px">Anasayfa</router-link>
            <template v-if="$auth.check()">
                <a href="#" @click.prevent="$auth.logout()" style="font-size:18px;">Çıkış Yap</a>
                <span>|</span>
                <span class="ml-1">{{$user.name}}</span>
            </template>
            
            <router-link :to="{name: 'login'}" v-else style="font-size:18px; margin-right: 15px">Giriş Yap</router-link>
            <router-link :to="{name: 'register'}"style="font-size:18px;">Kayıt Ol</router-link>
        </nav>
    </header>
</template>

<script>
    import {login} from '@config/router'

    export default {
        computed: {
            showHeader() {
                return this.$router.matcher.match(login).path === login;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>