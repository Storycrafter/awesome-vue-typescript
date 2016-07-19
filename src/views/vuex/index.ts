import { VueComponent } from 'vue-typescript'
import Panel from '../../components/Panel'

@VueComponent({
    template: require('./vuex.html'),
    components:[Panel]
})
export class VuexComponent extends Vue {
    
}