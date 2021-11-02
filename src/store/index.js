import { createStore } from 'vuex'
import { faqCategories } from '@/utils/db.json'
import 'animate.css'


export default createStore({
  state: {
    categories: [],
    view: '',
    id: null,
    answerId: null,
  },
  actions: {
    fetchCategories(context) {
      const categories = faqCategories
      context.commit('SET_CATEGORIES', categories)
    },

    //Uma ação não pode mudar o state diretamente, então ela vai ser redirecionada para sua mutation
    componentView(context, view) {
      context.commit('changeView', view)
    },

    questionId(context, id) {
      context.commit('getId', id)
    },

    answerId(context, id){
      context.commit('getAnswerId', id)
    }
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },

    //Mutation da action componentView, onde pegamos o estado da prop View e mudamos de acordo com o parâmetro view.
    changeView(state, view) {
      state.view = view
      console.log(view)
    },

    myQuestionId(state, id) {
      state.id = id
      console.log(id)
    }, 

    myAnswerId(state,id){
      console.log(id);
      state.answerId = id
    }
  },
  getters: {
    $allCategories(state) {
      return state.categories
    },

    $returnView(state) {
      return state.view
    },

    $returnId(state) {
      return state.id
    },

    $returnAnswerId(state){
      return state.answerId
    }
  }
})
