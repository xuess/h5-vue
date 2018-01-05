<template>
	<div>
		<!--搜索框-->
		<div style="width: 100%; height: 44px;">
			<div class="search">
				<a href="#" class="search-href">
					<form action="javascript:return true;" class="form">
						<div class="placeholder">
							<button type="button"></button>
							<span>立即查找独家优惠券</span>
						</div>
						<input type="search" disabled="disabled">
					</form>
				</a>
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
				<router-link :to="{ path: 'index', query: { tab_id: item.id }}" class="category-cell router-link-active" :class="{'router-link-exact-active': tabsId == item.id }" v-for="(item,index) in categoryList" :key="index"><p class="category-cell-item">{{item.name}}</p></router-link>
			</div>
		</div>

		<!--轮播-->
		<swipe :banner-list="bannerList"></swipe>

		<!--二级分类-->
		<div class="category-two">
			<div class="category-item" v-for="(item,index) in secondCategoryList">
				<router-link :to="{ path: 'index', query: { tab_id: tabsId, c_id : item.category_id }}">
					<h1><img :src="item.img_url" :alt="item.name"></h1>
					<p :class="{'category-active': categoryId == item.category_id}">{{item.name}}</p>
				</router-link>
			</div>
		</div>

		<!--主题资源-->
		<div class="row topic-wrapper" v-if="topicList.length > 0">
			<div class="col c4">
				<a href="#" class=""><img :src="topicList[0].img_url"></a>
			</div>
			<div class="col c8">
				<div class="topic-right">
					<a href="#" class=""><img :src="topicList[1].img_url"></a>
					<div class="row down">
						<a href="#" class="col c6"><img :src="topicList[2].img_url"></a>
						<a href="#" class="col c6"><img :src="topicList[3].img_url"></a>
					</div>
				</div>
			</div>
		</div>

		<!--灰色条-->
		<div class="divide"></div>

		<!--商品列表-->
		<product-list></product-list>

	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import api from '@/fetch/api'
	import * as _ from '@/util/tool'
	import ProductList from '@/pages/index/ProductList'
	import Swipe from '@/components/Swipe'

	//	components
	//	props
	//	data
	//	created
	//	mounted
	//	activited
	//	update
	//	beforeRouteUpdate
	//	methods
	//	filter
	//	computed
	//	watch

	export default {
		components: {
			ProductList,
			Swipe,
		},
		data() {
			return {
				//tabsId 主Id
				tabsId: this.$route.query.tab_id || 0,
				categoryId: this.$route.query.c_id || 0, //分类id
				bannerList: [],
				categoryList: [],
				secondCategoryList: [],
				topicList: [],
				//展开分类
				showCategory:false
			}
		},
		//创建之前
		created() {
			//加载首屏数据
			this.getIndexData();
		},
		//计算属性
		computed: {

		},
		mounted() {},
		//路由守护 跳转相同时，在此操作
		beforeRouteUpdate(to, from, next) {
			//把loading 放出来
			//然后调接口 更新数据

			console.log('to', to);
			console.log('from', from);
			console.log('next', next);
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

			next() //修改路径
		},
		methods: {
			openCategory:function(){
				this.showCategory = !this.showCategory;
			},
			//获取首屏数据
			getIndexData: function() {
				//获取首屏数据
				api.getIndexData({
						"tabs_id": this.tabsId,
						"category_id": this.categoryId
					})
					.then(res => {
						console.log(res)
						if(res.success) {
							this.bannerList = res.banner_list;
							this.categoryList = res.category_list;
							this.secondCategoryList = res.second_category_list;
							this.topicList = res.topic_list;
						}
					})
			},
			//			gotoTabs(index) {
			//				this.$router.push({
			//					path: 'index',
			//					query: {
			//						c_id: index
			//					}
			//				})
			//			},
		},
		//监控属性
		watch: {

		}

	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/function';
	@import './style/index.css';
	/*@import './style/list.css';*/
	/*@import './style/style.css';*/
	/*主题资源位*/
	
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
</style>