import { VueComponent, Prop } from 'vue-typescript'

@VueComponent({
    template: require('./panel.html')
})
export default class Panel extends Vue{
    @Prop
    title:string;
} 