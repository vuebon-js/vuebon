<template>
    <div style="height: 100vh; width: 100vw; display: flex; justify-content: center; align-items: center" >
        <div id="form-side">
            <div id="form-side-inner">

                <!-- Login Form -->
                <div style="margin-top:15px; border: 1px solid #a2a2a2; padding: 25px 50px;" id="login-form">
                    <form action="javascript:void(0)" @submit.prevent="$auth.login(inputs)">
                        <div style="margin-bottom: 15px;">
                            <div>
                                <label for="email">Kullanıcı Adı</label>
                                <input style="display:block; padding:10px 0px; width: 350px; border:1px solid #111; margin-top: 5px" id="email" type="text" name="email" placeholder="Kullanıcı Adı" v-model="inputs.username">
                            </div>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <div>
                                <label for="password">Parola</label>
                                <input style="display:block; padding:10px 0px; width: 350px; border:1px solid #111; margin-top: 5px" id="password" type="password" name="password" placeholder="Parola" v-model="inputs.password">
                            </div>
                        </div>
                        <footer>
                            <button type="submit" style="width:100%; padding: 5px 15px; margin-bottom: 15px">Giriş Yap</button>
                            <button type="submit" style="width:100%; padding: 5px 15px; margin-bottom: 15px">Kayıt Ol</button>
                            <button id="forgot" href="#" style="width:100%; padding: 5px 15px;">Şifremi Unuttum</button>
                        </footer>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                inputs: {
                    username: 'serter.serbest@gmail.com',
                    password: 'secret'
                },
            }
        }
    }
</script>
