import Vue from 'vue'
import Vuex from 'vuex'
import postModule from '@/store/modules/postModule'
import albumModule from '@/store/modules/albumModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    postModule,
    albumModule,
  }
})
