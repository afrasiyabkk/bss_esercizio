import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: "Home",
    home: true,
    chisiamo: false,
    contatti: false,
  },
  getters: {
  },
  mutations: {
    homeClicked: state => {
      state.page = "Home"
      state.home = true
      state.chisiamo = false
      state.contatti = false
    },

    chisiamoClicked: state => {
      state.page = "Chisiamo"
      state.home = false
      state.chisiamo = true
      state.contatti = false
    },

    contattiClicked: state => {
      state.page = "Contatti"
      state.home = false
      state.chisiamo = false
      state.contatti = true
    },
  },
  actions: {
    homeClicked: context => {
      context.commit('homeClicked')
    },

    chisiamoClicked: context => {
      context.commit('chisiamoClicked')
    },

    contattiClicked: context => {
      context.commit('contattiClicked')
    },
  },
  modules: {
  }
})
