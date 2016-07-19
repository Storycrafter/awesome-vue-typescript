import { VueComponent } from 'vue-typescript'

@VueComponent({
    template: require('./resource.html')
})
export class ResourceComponent extends Vue {

    issues:any[]=[]

    get showIssues(){
        return this.issues.length!=0
    }

    loadIssues(){
        console.log("loadIssues")
        this.$http.get('https://api.github.com/repos/vuejs/vue/issues').then(response=>{
            console.log(response.data);
            this.$set('issues',response.data);
        },
        error=>{
            console.log(error);
        });

    }
    

}