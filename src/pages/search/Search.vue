<template>
	<div>
		<div style="width: 100%; height: 44px;">
			<div class="head">
				<a href="javascript:history.go(-1);" class="back"></a>
				<form action="javascript:return true;" class="find"><input type="text" placeholder="立即查找独家优惠券" name="search" autocomplete="off" v-model="keyWords">
					<div class="placeholder-search"></div>
					<svg @click="clearKeyWords" width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="close">
						<path d="M6.96653719,6 L11.7988875,1.16764973 C12.0662439,0.900293262 12.066125,0.46767872 11.7992232,0.200776844 C11.5304605,-0.0679858222 11.0994375,-0.065974736 10.8323503,0.201112539 L6,5.03346281 L1.16764973,0.201112539 C0.900293262,-0.0662439302 0.46767872,-0.0661250314 0.200776844,0.200776844 C-0.0679858222,0.469539511 -0.065974736,0.900562457 0.201112539,1.16764973 L5.03346281,6 L0.201112539,10.8323503 C-0.0662439302,11.0997067 -0.0661250314,11.5323213 0.200776844,11.7992232 C0.469539511,12.0679858 0.900562457,12.0659747 1.16764973,11.7988875 L6,6.96653719 L10.8323503,11.7988875 C11.0997067,12.0662439 11.5323213,12.066125 11.7992232,11.7992232 C12.0679858,11.5304605 12.0659747,11.0994375 11.7988875,10.8323503 L6.96653719,6 Z" fill="#fc7b82" id="Combined-Shape"></path>
					</svg>
				</form> <button class="search-btn" @click="searchPrd">搜索</button></div>
		</div>
		<div class="divide"></div>

		<!--商品流-->
		<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" class="lists">
			<div class="goods-two" v-for="(item,index) in goodsList" :key="index">
				<router-link :to="{ path: 'detail', query: { goods_id: item.goods_id}}">
					<div class="cover-image">
						<img :src="item.img_url" class="image">
					</div>
					<h1 class="title"><img src="//oss1.lanlanlife.com/f87493c5f309d8b282476c232df6bd4b_26x26.png" class="tabsImg" v-if="item.is_tmall">
							<img  src="//oss3.lanlanlife.com/3f681b35cd2518c925786f7b44e24cf8_26x26.png" class="tabsImg" v-if="item.is_jhs">{{item.title}}
			            </h1>
					<!--<div class="coupon">
							<div class="price">
								¥<b>19.9</b></div>
							<div class="count-label type-1"><strong>2</strong>&nbsp;折
							</div>
						</div>-->
					<div class="count"><span>{{item.origin_price}}</span> <span class="alreadyBuy">{{item.sales_num}} 人已购</span></div>
					<div class="coupon">
						<div class="price">
							¥<b>{{item.price}}</b></div>
						<div class="count-label type-2"><strong>{{item.voucher_price | formatDoubleStart}}</strong>元 券
						</div>
					</div>
				</router-link>
			</div>
		</div>

		<div class="last-page" v-if="isLastPage">
			<p class="last-page-p">没有更多了~</p>
		</div>

		<!--向上标-->
		<scroll-top :is-index="true"></scroll-top>

	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import api from '@/fetch/api'
	//	import * as _ from '@/util/tool'
	import { _debounceTail } from '@/util/tool'
	
	import ScrollTop from '@/components/ScrollTop'

	export default {
		components: {
			ScrollTop
		},
		data() {
			return {
				//keyWords
				keyWords: this.$route.query.keyWords || '',
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
			//加载商品数据
			this.loadMore();
			//商品排序条位置固定
//			this.sortBarScroll();
			//滚动到顶部
			window.scrollTo(0, 0)
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
				console.log('上一页数据：', list)
				return list
			}
		},
		mounted() {},
		//路由守护 跳转相同时，在此操作
		beforeRouteUpdate(to, from, next) {
			//把loading 放出来
			//然后调接口 更新数据
			console.log('to', to);
			
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
			window.scrollTo(0, 0)
			next() //修改路径
		},
		methods: {
			//设置loading 图标
			...mapActions([
				'setLoadingState'
			]),
			//清除 关键字
			clearKeyWords(){
				this.keyWords = ''
			},
			openCategory() {
				this.showCategory = !this.showCategory;
			},
			//重新搜索搜索页
			searchPrd(){
				//页码清0
				this.pageNo = 0
				//最后一页
				this.isLastPage = false
				//清空goodsList 
				this.goodsList = []
				//切换排序 重新查询
				this.getGoodsListData();
				//滚动到顶部
				window.scrollTo(0, 0)
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
				window.scrollTo(0, 0)
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
				let params = {
					"keyWords": this.keyWords,
					"pageNo": this.pageNo += 1,
					"pageSize": this.pageSize,
//					"exsitIdList": JSON.stringify(this.exsitGoodsidList),
				};
				api.getSearchPrd(params)
					.then(res => {
						console.log(res)
						if(res && res.code == 0) {
							//结果为空 则为最后一页
							if(res.data.goods_list == null || res.data.goods_list.length == 0) {
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
	@import 'list.css';
	input::-webkit-search-decoration,
	input::-webkit-search-cancel-button {
		display: none;
	}
	
	#cms-find ::-webkit-input-placeholder {
		/* WebKit browsers */
		color: #FFF;
		font-size: 14px;
	}
	
	#cms-find :-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #FFF;
		font-size: 14px;
		opacity: 1;
	}
	
	#cms-find ::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #FFF;
		opacity: 1;
		font-size: 14px;
	}
	
	#cms-find :-ms-input-placeholder {
		/* Internet Explorer 10+ */
		color: #FFF;
		font-size: 14px;
	}
	
	.head label.home {
		position: absolute;
		right: 7px;
		top: 18px;
		line-height: 1;
	}
	
	.hot,
	.his {
		padding: 20px;
	}
	
	.hot .subject,
	.his .subject {
		margin-bottom: 15px;
		font-size: 14px;
		color: #9a9a9a;
	}
	
	.subject i.icon {
		display: inline-block;
		margin-right: 5px;
		width: 14px;
		height: 16px;
		background: url(//oss2.lanlanlife.com/91ccedeefba0cc5b86502817e78a166d_32x28.png)no-repeat;
		background-size: 100%;
		vertical-align: bottom;
	}
	
	.hot .subject span,
	.his .subject span {
		float: right;
	}
	
	.hot .list a,
	.his .list a {
		color: #514F4F;
		font-size: 12px;
		display: inline-block;
	}
	
	.hot .list a {
		background: #f1f1f1;
		border-radius: 2px;
		padding: 6px 19px;
		margin: 0 10px 10px 0;
	}
	
	.his .list a {
		margin: 0 39px 20px 0;
	}
	
	.suggest {
		position: absolute;
		top: 50px;
		left: 0;
		width: 100%;
		background-color: #FFF;
		color: #9a9a9a;
		font-size: 12px;
		padding: 10px 0;
		box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
	}
	
	.suggest li:active {
		background-color: #f1f1f1;
	}
	
	.suggest li {
		padding: 0 20px;
		height: 30px;
		line-height: 30px;
	}
	
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
	
	#scroll_top_icon {
		display: none;
		position: fixed;
		width: 40px;
		height: 40px;
	}
	
	#scroll_top_icon img {
		width: 40px;
		height: 40px;
	}
	
	#scroll_top_icon.on {
		display: block;
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
	
	.back-index {
		width: 40px;
		height: 40px;
		position: fixed;
		right: 20px;
		bottom: 80px;
	}
	
	.back-index img {
		width: 40px;
		height: 40px;
	}
	
	.goodsOne {
		padding: 15px 12px;
		border-top: 1px solid #F1F1F1;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	
	.goodsOne .cover-image {
		width: 1.25rem;
		height: 1.25rem;
		vertical-align: top;
		display: inline-block;
		position: relative;
	}
	
	.goodsOne .cover-image .tags-img {
		width: 26px;
		height: 31px;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.goodsOne .cover-image .image {
		width: 100%;
		height: 100%;
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
		height: 44px;
		margin-bottom: .04rem;
		line-height: 1.5;
		color: #333;
		font-size: 16px;
		vertical-align: middle;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.goodsOne .item-info .title .tabsImg {
		width: 13px;
		margin-right: 5px;
	}
	
	.goodsOne .item-info p.rec {
		height: 20px;
		line-height: 20px;
		color: #FB5413;
		font-size: 14px;
		white-space: nowrap;
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
	
	.goodsOne .item-info .coupon .count-label.type-1 {
		background: url(http://oss3.lanlanlife.com/caf1f155b1a83e1467bfa9e726814b8e_46x140.png) no-repeat;
		background-size: 70px 23px;
		padding-left: 9px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.goodsOne .item-info .coupon .count-label.type-2 {
		background: url(//oss1.lanlanlife.com/105634c31956b0be54ac867a209c26ca_46x140.png) no-repeat;
		background-size: 70px 23px;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}
	
	.goodsOne .item-info .coupon .count-label {
		width: 70px;
		height: 23px;
		color: #fff;
		border-radius: 1px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.goodsOne .item-info .coupon .count-label strong {
		font-size: 14px;
		font-weight: bold;
	}
	
	.lists .goods-two {
		width: 49.3%;
		background: #fff;
		margin-bottom: 1.2%;
	}
	
	.lists .goods-two:nth-child(odd) {
		margin-right: 1.2%;
	}
	
	.lists .goods-two .cover-image {
		position: relative;
	}
	
	.lists .goods-two .cover-image .tags-img {
		width: 26px;
		height: 31px;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.lists .goods-two .cover-image .image {
		width: 100%;
		height: 1.85rem;
		display: block;
	}
	
	.lists .goods-two .cover-image .tong {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: .2rem;
		line-height: .2rem;
		background: -webkit-gradient(linear, left top, right top, from(rgba(234, 120, 51, .7)), to(rgba(246, 55, 11, .7)));
		background: -webkit-linear-gradient(left, rgba(234, 120, 51, .7), rgba(246, 55, 11, .7));
		background: -o-linear-gradient(left, rgba(234, 120, 51, .7), rgba(246, 55, 11, .7));
		background: linear-gradient(90deg, rgba(234, 120, 51, .7), rgba(246, 55, 11, .7));
		color: #FFF;
		font-size: .1rem;
		text-align: center;
	}
	
	.lists .goods-two .cover-image .tong img {
		width: .1rem;
		height: 10px;
		vertical-align: middle;
	}
	
	.lists .goods-two .title {
		height: .4rem;
		line-height: .2rem;
		color: #333;
		font-size: 14px;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin: .06rem .1rem;
	}
	
	.lists .goods-two .title .tabsImg {
		width: 13px;
		margin-right: 3px;
	}
	
	.lists .goods-two .count {
		color: #C7C4C4;
		font-size: 12px;
		margin: 0 .1rem;
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
	
	.lists .goods-two .count .alreadyBuy {
		color: #B1AEAE;
	}
	
	.lists .goods-two .coupon {
		padding: .08rem .1rem .05rem;
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
	
	.lists .goods-two .coupon .price {
		color: #FC3D37;
		font-size: 12px;
		display: inline-block;
	}
	
	.lists .goods-two .coupon .price b {
		font-size: 22px;
	}
	
	.lists .goods-two .coupon .count-label.type-1 {
		background: url(http://oss3.lanlanlife.com/caf1f155b1a83e1467bfa9e726814b8e_46x140.png) no-repeat;
		background-size: 70px 23px;
		padding-left: 9px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.lists .goods-two .coupon .count-label.type-2 {
		background: url(//oss1.lanlanlife.com/105634c31956b0be54ac867a209c26ca_46x140.png) no-repeat;
		background-size: 70px 23px;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}
	
	.lists .goods-two .coupon .count-label {
		width: 70px;
		height: 23px;
		color: #fff;
		border-radius: 1px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.lists .goods-two .coupon .count-label strong {
		font-size: 14px;
		font-weight: bold;
	}
	
	.Affix {
		z-index: 100;
		position: fixed;
	}
	
	.activity-item {
		padding: 0.1rem;
	}
	
	.activity-item .activity-logo {
		text-align: center;
		margin-bottom: 0.1rem;
	}
	
	.activity-item .activity-logo img {
		width: 1.98rem;
		display: block;
		margin: 0 auto;
	}
	
	.activity-item1 .item {
		text-align: center;
	}
	
	.activity-item1 .item img {
		width: 3.55rem;
		display: block;
		margin: 0 auto;
	}
	
	.activity-item2 .item {
		display: inline-block;
		width: 48.5%;
	}
	
	.activity-item2 .item:first-child {
		margin-right: 0.05rem;
	}
	
	.activity-item2 .item:last-child {
		margin-left: 0.05rem;
	}
	
	.activity-item2 .item img {
		width: 100%;
		display: block;
	}
	
	.activity-item3 .item {
		display: inline-block;
		width: 31%;
	}
	
	.activity-item3 .item:nth-child(2) {
		margin: 0 0.1rem;
	}
	
	.activity-item3 .item img {
		width: 100%;
		display: block;
	}
	
	.gender {
		position: fixed;
		z-index: 9999;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
	}
	
	.gender-select {
		position: fixed;
		z-index: 9999;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #FFF;
		padding: 0.27rem 0.70rem 0.20rem 0.70rem;
		border-radius: 0.02rem;
		text-align: center;
	}
	
	.gender-select.show {
		padding: 0.27rem 0.45rem 0.20rem 0.45rem;
	}
	
	.gender-select.show .close {
		position: absolute;
		right: 4%;
		top: 4%;
		color: #969696;
		font-size: 0.24rem;
	}
	
	.gender-select h1 {
		text-align: center;
		font-size: 0.22rem;
		color: #333333;
		margin-bottom: 0.1rem;
	}
	
	.gender-select p {
		text-align: center;
		font-size: 0.14rem;
		color: #969696;
		margin-bottom: 0.2rem;
		white-space: nowrap;
	}
	
	.select-sex div {
		width: 1.5rem;
		height: 0.42rem;
		margin: 0 auto 0.2rem auto;
	}
	
	.select-sex .girl,
	.select-sex .boy,
	.select-sex .pregnant {
		width: 1.38rem;
		height: 0.36rem;
		border-radius: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		display: -webkit-flex;
		-webkit-justify-content: center;
		-webkit-align-items: center;
	}
	
	.select-sex .girl {
		background: #FF91AA;
		box-shadow: 0 2px 6px 0 #FFCEDC;
		-moz-box-shadow: 0 2px 6px 0 #FFCEDC;
		-o-box-shadow: 0 2px 6px 0 #FFCEDC;
		-webkit-box-shadow: 0 2px 6px 0 #FFCEDC;
	}
	
	.select-sex .pregnant {
		background: #E87EFE;
		box-shadow: 0 2px 6px 0 #FFCEDC;
		-moz-box-shadow: 0 2px 6px 0 #FFCEDC;
		-o-box-shadow: 0 2px 6px 0 #FFCEDC;
		-webkit-box-shadow: 0 2px 6px 0 #FFCEDC;
	}
	
	.select-sex .boy {
		background: #87DDFE;
		box-shadow: 0 2px 6px 0 #D2EDFF;
		-moz-box-shadow: 0 2px 6px 0 #D2EDFF;
		-o-box-shadow: 0 2px 6px 0 #D2EDFF;
		-webkit-box-shadow: 0 2px 6px 0 #D2EDFF;
	}
	
	.select-sex .girl .icon-girl,
	.select-sex .pregnant .icon-pregnant {
		width: 0.81rem;
		height: 0.195rem;
	}
	
	.select-sex .boy .icon-boy {
		width: 0.81rem;
		height: 0.18rem;
	}
	
	#gender-btn {
		margin-left: 0.1rem;
		display: inline-block;
		font-size: 12px;
		width: .3rem;
		height: .2rem;
		vertical-align: middle;
	}
	
	#gender-btn.boy {
		background: url("//oss.lanlanlife.com/ca102401f3f7764652eabfcf48b359a5_32x58.png") no-repeat center;
		background-size: .29rem .16rem;
	}
	
	#gender-btn.girl {
		background: url("//oss.lanlanlife.com/a1e5d850a3ec6c6e1a2fbe41160255d2_36x58.png") no-repeat center;
		background-size: .29rem .18rem;
	}
	
	#gender-btn.pregnant {
		background: url("//oss1.lanlanlife.com/73cb0cf026e805a886a23a0d56fa9cf1_40x60.png") no-repeat center;
		background-size: .29rem .18rem;
	}
	
	.category-active {
		color: #FE814B !important;
	}
	
	.category-two {
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
	
	.loading {
		text-align: center;
	}
	
	.push-card-mask {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 10000;
	}
	
	.push-card {
		width: 2.5rem;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background: #fff;
		border-radius: 10px;
		-webkit-box-shadow: 0 2px 6px 0 rgba(174, 174, 174, .5);
		box-shadow: 0 2px 6px 0 rgba(174, 174, 174, .5);
		display: inline-block;
	}
	
	.push-card .top-tt {
		width: 94px;
		height: 23px;
		top: -35px;
	}
	
	.push-card .close {
		width: 41px;
		height: 41px;
		bottom: -49px;
	}
	
	.push-card .top-tt,
	.push-card .close {
		position: absolute;
		left: 50%;
		-webkit-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		transform: translateX(-50%);
	}
	
	.push-card .card-img {
		width: 100%;
		height: 2.11rem;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}
	
	.push-card .tt {
		font-size: 14px;
		color: #333333;
		margin: .1rem .15rem;
	}
	
	.push-card .tt img {
		width: .13rem;
		height: .13rem;
		margin-right: 0.03rem;
	}
	
	.push-card .price {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		margin: 0 .2rem;
		font-size: 14px;
		color: #FE312A;
	}
	
	.push-card .price b {
		font-size: 20px;
	}
	
	.push-card .price .coupon {
		width: 64px;
		height: 24px;
		line-height: 24px;
		text-align: center;
		color: #fff;
		background: url(//oss1.lanlanlife.com/fb640489cd0121255cfa01ff35773dc9_48x128.png) no-repeat;
		background-size: 64px 24px;
	}
	
	.push-card .btn {
		width: 1.44rem;
		height: .4rem;
		line-height: .4rem;
		border-radius: 1rem;
		font-size: 16px;
		color: #FFF;
		margin: .15rem auto;
		text-align: center;
		background-image: -webkit-gradient(linear, left top, right top, from(#FE322A), color-stop(73%, #FA6A06));
		background-image: -webkit-linear-gradient(left, #FE322A 0%, #FA6A06 73%);
		background-image: -o-linear-gradient(left, #FE322A 0%, #FA6A06 73%);
		background-image: linear-gradient(90deg, #FE322A 0%, #FA6A06 73%);
	}
	
	.fade-enter-active,
	.fade-leave-active {
		-webkit-transition: opacity .6s;
		-o-transition: opacity .6s;
		transition: opacity .6s;
	}
	
	.bounce-enter-active {
		-webkit-animation: bounce-in-data-v-1b00a3ee .5s;
		animation: bounce-in-data-v-1b00a3ee .5s;
	}
	
	.bounce-leave-active {
		-webkit-animation: bounce-in-data-v-1b00a3ee .5s reverse;
		animation: bounce-in-data-v-1b00a3ee .5s reverse;
	}
	
	@-webkit-keyframes bounce-in-data-v-1b00a3ee {
		0% {
			-webkit-transform-origin: 50% 50%;
			transform-origin: 50% 50%;
			-webkit-transform: translate(-50%, -50%) scale(0);
			transform: translate(-50%, -50%) scale(0);
		}
		100% {
			-webkit-transform-origin: 50% 50%;
			transform-origin: 50% 50%;
			-webkit-transform: translate(-50%, -50%) scale(1);
			transform: translate(-50%, -50%) scale(1);
		}
	}
	
	@keyframes bounce-in-data-v-1b00a3ee {
		0% {
			-webkit-transform-origin: 50% 50%;
			transform-origin: 50% 50%;
			-webkit-transform: translate(-50%, -50%) scale(0);
			transform: translate(-50%, -50%) scale(0);
		}
		100% {
			-webkit-transform-origin: 50% 50%;
			transform-origin: 50% 50%;
			-webkit-transform: translate(-50%, -50%) scale(1);
			transform: translate(-50%, -50%) scale(1);
		}
	}
	
	.pdd-head {
		padding: 0.05rem 0;
	}
	
	.pdd-head .icon {
		display: inline-block;
		width: 1.1rem;
		height: 0.3rem;
		background: url("http://oss3.lanlanlife.com/8bfc71e410b049844187efce8f5077ab_68x224.png") no-repeat center;
		background-size: 1.1rem 0.3rem;
		line-height: 0.3rem;
		color: #FFF;
		font-size: 0.15rem;
		text-indent: 0.12rem;
	}
	
	.pdd-head .bgm {
		display: inline-block;
		width: 0.74rem;
		height: 0.17rem;
		background: url("http://oss.lanlanlife.com/f12f6f08c0e2cfda7665f32f0f06c705_26x146.png") no-repeat center;
		background-size: 0.74rem 0.17rem;
		float: right;
		padding: 0.05rem 0;
		margin-right: 0.1rem;
	}
	
	.pdd-body {
		padding: 0.15rem 0.12rem;
		display: flex;
		border-top: 1px solid #F1F1F1;
	}
	
	.pdd-body .img {
		position: relative;
	}
	
	.pdd-body .img .icon {
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.pdd-body .img .cover {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
	}
	
	.pdd-body .init {
		margin-left: 0.1rem;
	}
	
	.pdd-body .init .title {
		margin-bottom: 0.1rem;
	}
	
	.pdd-body .init .title img {
		display: inline-block;
		width: 0.13rem;
		height: 0.13rem;
		vertical-align: middle;
	}
	
	.pdd-body .init .title span {
		display: inline-block;
		vertical-align: middle;
		color: #333;
		font-size: 0.16rem;
		margin-left: 0.04rem;
	}
	
	.pdd-body .init .desc {
		color: #FB5413;
		font-size: 0.14rem;
		margin-bottom: 0.66rem;
	}
	
	.pdd-body .init .footer .price {
		color: #FC3D37;
		font-size: 0.2rem;
	}
	
	.pdd-body .init .footer .price i {
		font-size: 0.12rem;
		margin-right: 0.05rem;
	}
	
	.pdd-body .init .footer .btn {
		float: right;
		display: inline-block;
		width: 0.7rem;
		height: 0.23rem;
		background: linear-gradient(rgba(254, 50, 42, 1), rgba(250, 106, 6, 1));
		border-radius: 0.02rem;
		line-height: 1.8;
		text-align: center;
		font-size: 0.13rem;
		color: #FFFFFF;
	}
	
	.pdd-body .init .footer .btn:after {
		content: '';
		display: inline-block;
		width: 0.07rem;
		height: 0.23rem;
		vertical-align: top;
		background: url("//oss.lanlanlife.com/a239f83f0b07532d4c45bdeca43bcead_24x14.png") no-repeat center;
		background-size: 0.07rem 0.12rem;
		margin-left: 0.03rem;
	}
	.last-page {
		width: 100%;
		p {
			color: #333333;
			text-align: center;
			height: 40px;
			line-height: 40px;
			font-size: 14px;
		}
	}
</style>