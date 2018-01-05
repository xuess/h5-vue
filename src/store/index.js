import Vue from 'vue'
import Vuex from 'vuex'
//import actions from './actions'
//import mutations from './mutations'
//import getters from './getters'

import goods from './modules/goods'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
        goods
    },
	state: {
		loading: false,
		showToast: false,
		showSuccess: true,
		showFail: false,
		toastMsg: '操作成功',
	},
	actions: {
		setLoadingState({ commit }, status) {
			commit('LOADING_STATUS', status)
		},
		showToast({ commit }, status) {
	        commit('SHOW_TOAST', status)
	    },
		showSuccess({ commit }, status) {
	        commit('SHOW_SUCCESS', status)
	    },
	    showFail({ commit }, status) {
	        commit('SHOW_FAIL', status)
	    },
	    toastMsg({ commit }, str) {
	        commit('TOAST_MSG', str)
	    },
	},
	mutations: {
		LOADING_STATUS(state, status) {
			state.loading = status
		},
		SHOW_TOAST(state, status) {
	        state.showToast = status
	    },
		SHOW_SUCCESS(state, status) {
	        state.showSuccess = status
	    },
	    SHOW_FAIL(state, status) {
	        state.showFail = status
	    },
	    TOAST_MSG(state, str) {
	        state.toastMsg = str
	    },
	},
	getters: {
		loading: state => state.loading,
		showToast: state => state.showToast,
	}
})
