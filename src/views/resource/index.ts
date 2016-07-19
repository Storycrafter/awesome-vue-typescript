import { VueComponent } from 'vue-typescript'
import VueResourece  from 'vue-resource'

@VueComponent({
    template: require('./resource.html')
})
export class ResourceComponent extends Vue {

    loadissues(){

        this.$http.get('https://api.github.com/repos/vuejs/vue/issues',response=>{

        },
        error=>{

        });

    }
    

}