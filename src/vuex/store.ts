import * as Vue from 'vue'
import * as Vuex from 'vuex'

class myState{
    count:number = 0
}

export default class Store extends Vuex.Store<myState> {
    
}