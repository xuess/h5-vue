<template>
	<div id="J_index">
		<!--搜索框-->
		<div style="width: 100%; height: 44px;">
			<div class="search">
				<router-link :to="{ path: 'search', query: {  }}">
					<form action="javascript:return true;" class="form">
						<div class="placeholder">
							<button type="button"></button>
							<span>立即查找独家优惠券</span>
						</div>
						<input type="search" disabled="disabled">
					</form>
				</router-link>
			</div>
		</div>
		<!--tabs-->
		<div style="width: 100%; height: 40px;">
			<div class="tabs-wrapper">
				<div style="position: relative;">
					<div id="tabs" class="tabs">
						<!--<a v-for="(item,index) in categoryList" :key="index" @click="gotoTabs(item.id)">{{item.name}}</a>-->
						<router-link :to="{ path: 'index', query: { tab_id: item.id }}" :class="{'tab-active': tabsId == item.id }" v-for="(item,index) in categoryList" :key="index">{{item.name}}</router-link>
						<!--<a href="/saber/index?cid=&amp;0" class="router-link-exact-active router-link-active -tab-active" v-for="(item,index) in categoryList" :key="index">{{item.name}}</a>-->
						<a href="">&nbsp;</a>
					</div>
					<span class="category" @click="openCategory"></span>
				</div>
			</div>
		</div>

		<div class="categorys" v-show="showCategory" @click="openCategory">
			<div class="wrapper">
				<router-link :to="{ path: 'index', query: { tab_id: item.id }}" class="category-cell router-link-active" :class="{'router-link-exact-active': tabsId == item.id }" v-for="(item,index) in categoryList" :key="index">
					<p class="category-cell-item">{{item.name}}</p>
				</router-link>
			</div>
		</div>

		<template v-for="(item,index) in bannerList">
			<template v-if="item.layout_type == 'lunbo'">
				<!--轮播-->
				<swipe :banner-list="item.module_list"></swipe>
			</template>
			<template v-if="item.layout_type == '3c1h'">
				<!--主题资源-->
				<div class="row topic-wrapper" v-if="item.module_list.length > 0">
					<div class="col c4">
						<router-link :to="{ path: 'topic', query: { find_type: item.module_list[0].action.link_value, title : item.module_list[0].title}}">
							<img :src="item.module_list[0].image_url">
						</router-link>
					</div>
					<div class="col c8">
						<div class="topic-right">
							<router-link :to="{ path: 'topic', query: { find_type: item.module_list[1].action.link_value, title : item.module_list[1].title}}">
								<img :src="item.module_list[1].image_url">
							</router-link>
							<div class="row down">
								<router-link class="col c6" :to="{ path: 'topic', query: { find_type: item.module_list[2].action.link_value, title : item.module_list[2].title}}">
									<img :src="item.module_list[2].image_url">
								</router-link>
								<router-link class="col c6" :to="{ path: 'topic', query: { find_type: item.module_list[3].action.link_value, title : item.module_list[3].title}}">
									<img :src="item.module_list[3].image_url">
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</template>

		</template>

		<!--二级分类-->
		<!--<div class="category-two">
			<div class="category-item" v-for="(item,index) in secondCategoryList">
				<router-link :to="{ path: 'index', query: { tab_id: tabsId, c_id : item.category_id }}">
					<h1><img :src="item.img_url" :alt="item.name"></h1>
					<p :class="{'category-active': categoryId == item.category_id}">{{item.name}}</p>
				</router-link>
			</div>
		</div>-->

		<!--灰色条-->
		<div class="divide"></div>

		<!--商品列表-->
		<div class="items" id="J_goodsList">
			<!--排序条-->
			<!--<div style="height: 40px;" id="J_sortBar">
				<div :class="{Affix : Affix}">
					<div class="sort-bar">
						<div class="sort-tool">
							<div class="s-box" :class="{'active' : sortType == 1}" @click="changeSortType(1)">精选</div>
							<div class="s-box" :class="{'active' : sortType == 2}" @click="changeSortType(2)">销量</div>
							<div class="s-box" :class="{'active' : sortType == 3}" @click="changeSortType(3)">最新</div>
							<div class="s-box" :class="{'active' : sortType == 4 || sortType == 5}"><span @click="changeSortType(4)">价格</span> <span class="sort-icon"><i class="asc" :class="{'on':sortType == 4}"></i> <i class="dsc" :class="{'on':sortType == 5}"></i></span></div>
						</div>
					</div>
				</div>
			</div>-->

			<!--商品流-->
			<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
				<router-link :to="{ path: 'detail', query: { goods_id: item.goods_id}}" v-for="(item,index) in goodsList" :key="index">
					<div class="goodsOne">
						<div class="cover-image"><img :src="item.img_url" class="image">
						</div>
						<div class="item-info">
							<h1 class="title"><img src="//oss1.lanlanlife.com/f87493c5f309d8b282476c232df6bd4b_26x26.png" class="tabsImg" v-if="item.is_tmall">
								<img  src="//oss3.lanlanlife.com/3f681b35cd2518c925786f7b44e24cf8_26x26.png" class="tabsImg" v-if="item.is_jhs">{{item.title}}
					            </h1>
							<p class="rec">{{item.desc}}</p>
							<div class="count"><span>{{item.is_tmall ?'天猫价':'淘宝价'}}{{item.origin_price}}</span> <span class="alreadyBuy">{{item.sales_num}} 人已购</span></div>
							<div class="coupon">
								<div class="price">
									¥<b>{{item.price}}</b></div>
								<div class="count-label"><strong>{{item.voucher_price | formatDoubleStart}}</strong>元 券
								</div>
							</div>
						</div>
					</div>
				</router-link>
			</div>

			<div class="last-page" v-if="isLastPage">
				<p class="last-page-p">没有更多了~</p>
			</div>

			<!--向上标-->
			<scroll-top></scroll-top>
		</div>

	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import api from '@/fetch/api'
//	import * as _ from '@/util/tool'
	import Swipe from '@/components/Swipe'
	import { _debounceTail } from '@/util/tool'
//	import share from '@/assets/js/share'
	import ScrollTop from '@/components/ScrollTop'

	export default {
		components: {
			Swipe,
			ScrollTop
		},
		data() {
			return {
				//tabsId 主Id
				tabsId: this.$route.query.tab_id || 0,
				//二级分类id
				categoryId: this.$route.query.c_id || 0,
				bannerList: [],
				categoryList: [],
				//				secondCategoryList: [],
				//展开分类
				showCategory: false,
				//----------------商品列表-------
				//页码
				pageNo: this.$route.query.page_no || 0,
				pageSize: 12,
				sortType: 1,
				Affix: false,
				sortBarTop: 0,
				//商品流是否在加载
				busy: false,
				//商品列表
				goodsList: [],
				//是否是最后一页
				isLastPage: false
			}
		},
		//创建之前
		created() {
			//加载首屏数据
			this.getIndexData();
			//加载商品数据
			this.loadMore();
			//商品排序条位置固定
//			this.sortBarScroll();
			//滚动到顶部
			window.scrollTo(0,0)
			
			//设置分享
//			share(location.href.split('#')[0], this.goodsData.title, this.goodsData.recommend_str, this.goodsData.img_list[0])
		
		},
		//计算属性
		computed: {
			//上一页六个商品id，首页为空
			exsitGoodsidList() {
				let list = []
				if(this.goodsList.length > 0) {
					for(let i = this.goodsList.length - 6; i < this.goodsList.length; i++) {
						list.push(this.goodsList[i].goods_id)
					}
				}
				console.log('上一页数据：',list)
				return list
			}
		},
		mounted() {},
		//路由守护 跳转相同时，在此操作
		beforeRouteUpdate(to, from, next) {
			//把loading 放出来
			//然后调接口 更新数据
			console.log('to', to);
			//如果是tab_id变化
			if(this.tabsId != to.query.tab_id) {
				this.tabsId = to.query.tab_id;
				this.categoryId = to.query.c_id;
				//更新数据
				this.getIndexData();
			} else {
				//二级分类变化 只更新商品流
				this.categoryId = to.query.c_id;
			}
			//排序 默认精选
			this.sortType = 1
			//页码清0
			this.pageNo = 0
			//最后一页
			this.isLastPage = false
			//清空goodsList 
			this.goodsList = []
			//切换排序 重新查询
			this.getGoodsListData()

			//滚动到顶部
			window.scrollTo(0,0)
			next() //修改路径
		},
		methods: {
			//设置loading 图标
			...mapActions([
				'setLoadingState'
			]),
			//去搜索页
			toSearch(){
				router.push({ path: 'search', params: {  }})
			},
			openCategory() {
				this.showCategory = !this.showCategory;
			},
			//获取首屏数据
			getIndexData() {
				//loading 图标
//				this.setLoadingState(true)
				//获取首屏数据
				api.getIndexData({
						"firstCid": this.tabsId,
						"category_id": this.categoryId
					})
					.then(res => {
						console.log(res)
						if(res && res.code == 0) {
							this.bannerList = res.data.banner_list;
							this.categoryList = res.data.category_list;
							//this.secondCategoryList = res.second_category_list;
						}
						//loading 图标
//						this.setLoadingState(false)
					})
			},

			//sort_type	是	string	排序 1=精选，2=销量 ，3=最新，4=价格低到高 ，5=价格高到低
			changeSortType(sortType) {
				//价格升序4 改成降序
				if(sortType == this.sortType) {
					if(sortType == 4) {
						this.sortType = 5
					} else {
						//跟上次相同不查询
						return;
					}
				} else {
					this.sortType = sortType
				}

				//页码清0
				this.pageNo = 0
				//清空goodsList 
				this.goodsList = []
				//最后一页
				this.isLastPage = false
				//切换排序 重新查询
				this.getGoodsListData();

				//滚动到顶部
				window.scrollTo(0,0)
			},
			loadMore: function() {
				if(!this.isLastPage) {
					this.busy = true;
					// 多次加载数据
					this.getGoodsListData();
				}
			},
			//加载商品列表
			getGoodsListData() {
				//loading 图标
				this.setLoadingState(true)
				//first_cid	是	string	一级类目id
				//second_cid	否	string	分类
				//page_no	int	当前页码	
				//page_size	int	一页多少条	默认12
				//exsit_goodsid_list	array	上页的商品id列表(传6个)格式：6,5,4,3,2,2
				//sort_type	是	string	排序 1=精选，2=销量 ，3=最新，4=价格低到高 ，5=价格高到低
				let params = {
					"firstCid": this.tabsId,
					"second_cid": this.categoryId,
					"pageNo": this.pageNo += 1,
					"pageSize": this.pageSize,
					"exsitIdList": JSON.stringify(this.exsitGoodsidList),
					"sort_type": this.sortType
				};
				api.getGoodsList(params)
					.then(res => {
						console.log(res)
						if(res && res.code == 0) {
							//结果为空 则为最后一页
							if(res.data.goods_list.length == 0) {
								this.isLastPage = true
							} else {
								if(this.goodsList.length == 0) {
									this.goodsList = res.data.goods_list
								} else {
									this.goodsList = this.goodsList.concat(res.data.goods_list)
								}
								//不能加载
								this.busy = false;
							}
						}
						//loading 图标
						this.setLoadingState(false)
					})
			},
			/**
			 * 排序条 滚动时 位置固定
			 */
			sortBarScroll() {

				let scrollFn = _debounceTail(() => {
					let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
					if(this.sortBarTop == 0) {
						this.sortBarTop = document.querySelector('#J_sortBar').offsetTop;
					}
					if(scrollTop > this.sortBarTop - 80) {
						this.Affix = true
					} else {
						this.Affix = false
					}
				}, 17, this)
				//sortBar 滚动位置固定
				document.addEventListener('scroll', scrollFn, false)
			},
		},
		//监控属性
		watch: {

		},

	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/function';
	@import './style/index.css';
	/*@import './style/list.css';*/
	/*@import './style/style.css';*/
	/*主题资源位*/
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-to {
		opacity: 0
	}
	
	.topic-wrapper {
		padding: .15rem .1rem;
		height: 1.4rem;
	}
	
	.row:after {
		content: '';
		display: table;
		clear: both;
	}
	
	.topic-wrapper.row .col {
		float: left;
	}
	
	.topic-wrapper.row .c4 {
		width: 1.12rem;
		height: 1.4rem;
		overflow: hidden;
	}
	
	.topic-wrapper.row .c8 {
		width: 2.43rem;
		height: .65rem;
	}
	
	.topic-wrapper .topic-right .row .c6 {
		width: 1.11rem;
		height: .66rem;
		overflow: hidden;
	}
	
	.topic-wrapper img {
		width: 100%;
		vertical-align: middle;
	}
	
	.topic-right {
		margin-left: .1rem;
	}
	
	.topic-right>a {
		display: block;
		margin-bottom: .1rem;
		height: .65rem;
		overflow: hidden;
	}
	
	.topic-right .down a:first-child {
		padding-right: .05rem;
		width: 1.11rem !important;
	}
	
	.topic-right .down a:last-child {
		padding-left: .05rem;
	}
	/*二级分类*/
	
	.category-active {
		color: #FE814B !important;
	}
	
	.category-two {
		height: 1.8rem;
		overflow: hidden;
		padding: 0.15rem 0.15rem 0 0.15rem;
	}
	
	.category-item {
		float: left;
		width: 25%;
		margin-bottom: 0.25rem;
	}
	
	.category-item h1 {
		text-align: center;
	}
	
	.category-item h1 img {
		width: 0.43rem;
		height: 0.45rem;
		margin-bottom: 0.13rem;
	}
	
	.category-item p {
		text-align: center;
		color: #514F4F;
		font-size: 0.12rem;
	}
	/*轮播*/
	
	.mint-swipe {
		overflow: hidden;
		position: relative;
		height: 100%;
	}
	
	.mint-swipe-items-wrap {
		position: relative;
		overflow: hidden;
		height: 100%;
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
	
	.mint-swipe-items-wrap>div {
		position: absolute;
		-webkit-transform: translateX(-100%);
		transform: translateX(-100%);
		width: 100%;
		height: 100%;
		display: none
	}
	
	.mint-swipe-items-wrap>div.is-active {
		display: block;
		-webkit-transform: none;
		transform: none;
	}
	
	.mint-swipe-items-wrap img {
		width: 100%;
		height: 100%;
		-webkit-touch-callout: default;
	}
	
	.mint-swipe-indicators-right {
		position: absolute;
		bottom: 0.15rem;
		right: 0.1rem;
	}
	
	.mint-swipe-indicators-center {
		position: absolute;
		bottom: 0.15rem;
		left: 50%;
		transform: translate(-50%, 0);
	}
	
	.mint-swipe-indicator {
		width: 0.08rem;
		height: 0.08rem;
		display: inline-block;
		border-radius: 100%;
		background: rgba(0, 0, 0, 0.3);
		margin: 0 0.03rem;
	}
	
	.mint-swipe-indicator.is-active {
		background: #FFFFFF;
	}
	/*商品*/
	
	.Affix {
		z-index: 100;
		position: fixed;
		width: 100%;
		/*top: 40px;*/
		top: 84px;
	}
	
	.sort-bar {
		padding: .07rem .1rem;
		font-size: 0;
		background: #FFF;
	}
	
	.sort-bar a {
		position: relative;
		display: inline-block;
		width: 33.33%;
		line-height: 25px;
		font-size: 14px;
		color: #333;
		text-align: center;
	}
	
	.sort-bar .active {
		color: #FE312A;
	}
	
	.sort-tool {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	
	.sort-tool .s-box {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}
	
	.sort-tool .s-box {
		position: relative;
		line-height: 25px;
		font-size: 14px;
		color: #333;
		text-align: center;
	}
	
	.sort-tool .s-box.active {
		color: #FE312A;
	}
	
	.sort-icon {
		position: relative;
	}
	
	.sort-icon i.asc,
	.sort-icon i.dsc {
		width: 9px;
		height: 4px;
		cursor: pointer;
		position: absolute;
		left: 6px;
	}
	
	.sort-icon i.asc {
		top: 1px;
	}
	
	.sort-icon i.dsc {
		top: 9px;
	}
	
	.sort-icon i.asc:before,
	.sort-icon i.asc:after,
	.sort-icon i.dsc:before,
	.sort-icon i.dsc:after {
		content: '';
		border-style: solid;
		position: absolute;
		left: 0;
	}
	
	.sort-icon i.asc:before {
		border-width: 0 6px 6px 6px;
		border-color: transparent transparent #979797 transparent;
		top: 0;
	}
	
	.sort-icon i.asc:after {
		border-width: 0 6px 6px 6px;
		border-color: transparent transparent #fff transparent;
		top: 1px;
	}
	
	.sort-icon i.dsc:before {
		border-width: 6px 6px 0 6px;
		border-color: #979797 transparent transparent transparent;
		top: 0;
	}
	
	.sort-icon i.dsc:after {
		border-width: 6px 6px 0 6px;
		border-color: #fff transparent transparent transparent;
		top: -1px;
	}
	
	.sort-tool .s-box.active .sort-icon i.asc.on:before {
		border-color: transparent transparent #FE312A transparent;
	}
	
	.sort-tool .s-box.active .sort-icon i.dsc.on:before {
		border-color: #FE312A transparent transparent transparent;
	}
	/*商品列表*/
	
	.nav-bar {
		width: 100%;
	}
	
	.goodsOne {
		padding: 15px 12px;
		border-top: 1px solid #F1F1F1;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	
	.goodsOne .cover-image {
		width: 125px;
		height: 125px;
		vertical-align: top;
		display: inline-block;
		position: relative;
	}
	
	.goodsOne .cover-image .image {
		width: 125px;
		height: 125px;
		display: inline-block;
	}
	
	.goodsOne .cover-image .tong {
		width: 100%;
		height: .2rem;
		line-height: .2rem;
		color: #FFF;
		background: -webkit-gradient(linear, left top, right top, from(rgba(234, 120, 51, .7)), to(rgba(246, 55, 11, .7)));
		background: -webkit-linear-gradient(left, rgba(234, 120, 51, .7), rgba(246, 55, 11, .7));
		background: -o-linear-gradient(left, rgba(234, 120, 51, .7), rgba(246, 55, 11, .7));
		background: linear-gradient(90deg, rgba(234, 120, 51, .7), rgba(246, 55, 11, .7));
		font-size: .1rem;
		text-align: center;
		position: absolute;
		bottom: 0;
	}
	
	.goodsOne .cover-image .tong img {
		width: .1rem;
		height: .1rem;
		vertical-align: middle;
	}
	
	.goodsOne .item-info {
		margin-left: .1rem;
		display: inline-block;
	}
	
	.goodsOne .item-info .title {
		width: 2.17rem;
		height: .44rem;
		line-height: .22rem;
		color: #333;
		font-size: 16px;
		vertical-align: middle;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-bottom: 4px;
	}
	
	.goodsOne .item-info .title .tabsImg {
		width: 13px;
		margin-right: 5px;
	}
	
	.goodsOne .item-info p.rec {
		width: 2.17rem;
		height: 20px;
		line-height: 20px;
		color: #FB5413;
		font-size: 14px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.goodsOne .item-info .title .text img {
		width: .13rem;
		height: .13rem;
		margin-right: 0.03rem;
	}
	
	.goodsOne .item-info .title .tab img {
		width: 0.13rem;
		height: 0.13rem;
		margin-right: 0.03rem;
	}
	
	.goodsOne .item-info .info {
		margin-top: .08rem;
	}
	
	.goodsOne .item-info .info .title {
		color: #FE814B;
		font-size: 0.11rem;
		height: .14rem;
		margin-bottom: 0.03rem;
	}
	
	.goodsOne .count {
		color: #C7C4C4;
		font-size: 12px;
		margin-top: .12rem;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}
	
	.goodsOne .count .alreadyBuy {
		color: #B1AEAE;
	}
	
	.goodsOne .item-info .coupon {
		height: .24rem;
		line-height: .24rem;
		margin-top: .12rem;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.goodsOne .item-info .coupon .price {
		color: #FC3D37;
		font-size: 12px;
		display: inline-block;
	}
	
	.goodsOne .item-info .coupon .price b {
		font-size: 22px;
	}
	
	.goodsOne .item-info .coupon .count-label {
		width: 70px;
		height: 23px;
		color: #fff;
		background: url(//oss1.lanlanlife.com/105634c31956b0be54ac867a209c26ca_46x140.png) no-repeat;
		background-size: 70px 23px;
		border-radius: 1px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}
	
	.goodsOne .item-info .coupon .count-label strong {
		font-size: 14px;
		font-weight: bold;
	}
	
	.last-page {
		width: 100%;
		p {
			color: #333;
			text-align: center;
			height: 40px;
			line-height: 40px;
			font-size: 14px;
		}
	}
</style>