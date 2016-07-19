
import { HomeComponent } from './views/home/home'
import { AboutComponent } from './views/about/about'
import { ResourceComponent } from './views/resource'
import { VuexComponent } from './views/vuex'


export default class RouterConfig {
    static get map(): any {
        return {
            '/': {
                component: HomeComponent
            },
            '/resource': {
                component: ResourceComponent
            },
            '/vuex': {
                component: VuexComponent
            },
            '/about': {
                component: AboutComponent
            }
        }
    }
}