<template>
    <div id="PasswordReset">
        <!-- New Password Form -->
        <div id="password-form" class="mt-10 pt-10 border-t-2 ">
            <form action="javascript:void(0)">
                <header class="block text-black text-2xl mb-2 text-left">Parola Sıfırlama</header>
                <div class="mb-3">
                    <div data-placeholder="Kullanıcı E-Posta">
                        <input class="w-full bg-gray-200 focus:bg-white border-transparent focus:border-blue-400 rounded-lg py-2 px-4" placeholder="E-Posta Adresiniz" type="email" @focus="onFocusOrBlur('email', true)" @blur="onFocusOrBlur('email' , false)">
                        <label class="far fa-envelope icon"></label>
                    </div>
                </div>
                <footer class="mb-3">
                    <button class="w-full mb-5 bg-blue-600 text-white rounded font-bold p-2 mr-2">Gönder</button>
                    <a id="return-login" href="#" class="w-full block bg-gray-600 font-bold text-white text-center rounded p-2">Karşılama Sayfasına Dön</a>
                </footer>
            </form>
        </div>



    </div>
</template>

<script>
    export default {
        components: {},
        name: "PasswordReset",
        data() {
            return {}
        },
        watch: {},
        methods: {},
        mounted() {
        },
        created() {
        },
        updated() {
        },
    }
</script>
