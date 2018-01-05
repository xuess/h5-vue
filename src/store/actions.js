
export default {
	
	setLoadingState({ commit }, status) {
	    commit('COM_LOADING_STATUS', status)
	},
	showToast({ commit }, status) {
        commit('COM_SHOW_TOAST', status)
    },
}
