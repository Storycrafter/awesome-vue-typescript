import { VueComponent } from 'vue-typescript'

@VueComponent({
    template: require('./home.html'),
    style: require('./home.scss')
})
export class HomeComponent extends Vue {

    package:string = 'vue-typescript'
    repo:string = 'https://github.com/danielschmitz/awesome-vue-typescript'
    awesome_author:string = "Daniel Schmitz <danieljfa@gmail.com>"

}