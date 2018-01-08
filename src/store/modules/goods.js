import api from '@/fetch/api'

const state = {
	goodsList: [],
	pageNo: 0,
	scroll: true,
	isLastPage:false,
	updateGoods:false,
	leaveIndex:false,
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
	},
	//是否需要 更新商品列表
	setUpdateGoods({ commit }){
		commit('SET_UPDATE_GOODS')
	},
	//是离开首页
	setLeaveIndex({ commit }){
		commit('SET_LEAVE_INDEX')
	}
}

const getters = {
	goodsList: state => state.goodsList,
	isLastPage: state => state.isLastPage,
	updateGoods: state => state.updateGoods,
	leaveIndex: state => state.leaveIndex,
}

const mutations = {
	
	GET_GOODS_LIST(state, res) {
		//结果为空 则为最后一页
		if(res.goods_list.length == 0){
			state.isLastPage = true
		}else{
			if(state.goodsList.length == 0) {
				state.goodsList = res.goods_list
			} else {
				state.goodsList = state.goodsList.concat(res.goods_list)
			}
		}
	},

	GET_GOODS_LIST_PAGE_NUM(state) {
		state.pageNo += 1
	},
	SET_GOODS_LIST_LENGTH(state) {
		state.goodsList = []
	},
	SET_UPDATE_GOODS(state) {
		state.updateGoods = !state.updateGoods
	},
	SET_LEAVE_INDEX(state) {
		state.leaveIndex = !state.leaveIndex
	},
}

export default {
	state,
	actions,
	getters,
	mutations
}