import Vue        from 'vue'
import Vuex       from 'vuex/dist/vuex.esm'
import state      from './../libs/vuex/state'
import mutations  from './../libs/vuex/mutations'
import actions    from './../libs/vuex/actions'

export default class VuexProvider {
    constructor(App) {
        Vue.use(Vuex);
        this.App = App;
    }
    register() {
        return this.App.singleton('vuex', function () {
            return new Vuex.Store({state, mutations, actions});
        })
    }
}