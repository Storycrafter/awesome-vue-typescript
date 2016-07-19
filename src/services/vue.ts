
export class VueService{
    /**
     * Get issues from Vuejs repository
     */
    static issues():PromiseLike<vuejs.HttpResponse>{
        return Vue.http.get('https://api.github.com/repos/vuejs/vue/issues')
    }
}