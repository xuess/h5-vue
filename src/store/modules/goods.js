import api from '@/fetch/api'

const state = {
	goodsList: [],
	pageNo: 0,
	scroll: true
}

const actions = {
	/**
	 * 获取商品列表
	 */
	getGoodsList({ commit }, params) {
		console.log('getGoodsList == ',params)
		commit('GET_GOODS_LIST_PAGE_NUM')
		commit('LOADING_STATUS', true)
		api.getGoodsList(params)
			.then(res => {
				console.log(res)
				commit('LOADING_STATUS', false)
				commit('GET_GOODS_LIST', res)
			})
	},
	setGoodsListLength({ commit }){
		commit('SET_GOODS_LIST_LENGTH')
	}
}

const getters = {
	goodsList: state => state.goodsList,
}

const mutations = {
	
	GET_GOODS_LIST(state, res) {
		if(state.goodsList.length == 0) {
			state.goodsList = res.goods_list
		} else {
			state.goodsList = state.goodsList.concat(res.goods_list)
		}
	},

	GET_GOODS_LIST_PAGE_NUM(state) {
		state.pageNo += 1
	},
	SET_GOODS_LIST_LENGTH(state) {
		state.goodsList = []
	},
}

export default {
	state,
	actions,
	getters,
	mutations
}