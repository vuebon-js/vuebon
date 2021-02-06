import {Example} from "@src/libs/Example";

export default class ExampleProvider {
    constructor(App) {
        this.App = App;
    }

    async register() {
        this.App.singleton('example', function () {
            return new Example;
        });
    }

    async boot(Vue) {

    }
}