import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: "Home",
    home: true,
    chisiamo: false,
    contatti: false,
    loading: false,
    is_contact_data_error: false,
    contact_data_error: "",
    contact_data: []
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

    contactDataCollectButton: state => {
      state.loading = true
      state.contact_data = []
      state.contact_data_error = ""
    },

    contactDataCollect: (state, payload) => {
      state.contact_data = payload
      state.loading = false
    },

    contactDataCollectError: (state, payload) => {
      state.is_contact_data_error = true
      state.contact_data_error = payload
      state.loading = false
    }
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

    contactDataCollectButton: context => {
      context.commit('contactDataCollectButton')
    },

    contactDataCollect(context) {
      const url = 'https://dummyjson.com/products'

      setTimeout(function () {
        axios.get(url)
        .then(response=>{
          context.commit('contactDataCollect', response.data.products)
        })
        .catch(error => {
          context.commit("contactDataCollectError", error)
        })
      }, 1000);
    }
  },
  modules: {
  }
})
