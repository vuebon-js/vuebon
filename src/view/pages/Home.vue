<template>
    <div id="Home" v-if="!$loader.visible">

        <div style="height: 100vh; width: 100vw; display: flex; justify-content: center; align-items: center" >
            <div>
                <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 15px">
                    <a class="" style="margin-right: 15px" href="javascript:void(0)">DOKÜMANTASYON</a>
                    <a class="" style="margin-right: 15px" href="javascript:void(0)">SİTEYE GİT</a>
                    <a class="" href="javascript:void(0)">GITHUB</a>
                </div>
                <div style="display: flex; justify-content: center; align-items: center">
                    <router-link to="dev" class="" style="margin-right: 15px">DEV</router-link>
                    <router-link to="login" class="" >GİRİŞ YAP</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {}
        }
    }
</script>