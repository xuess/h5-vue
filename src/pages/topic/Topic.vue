<template>
	<div>
		<div style="width: 100%; height: 44px;">
			<div class="head">
				<a href="javascript:history.go(-1);" class="back"></a>
				<span>{{title}}</span>
			</div>
		</div>
		
		<!--商品列表-->
		<div class="lists" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
				<div class="goods-two" v-for="(item,index) in topicGoodsList" :key="index">
					<router-link :to="{ path: 'detail', query: { goods_id: item.goods_id}}">
						<div class="cover-image">
							<img :src="item.img_url" class="image">
						</div>
						<h1 class="title"><img src="//oss1.lanlanlife.com/f87493c5f309d8b282476c232df6bd4b_26x26.png" class="tabsImg" v-if="item.is_tmall">
								<img  src="//oss3.lanlanlife.com/3f681b35cd2518c925786f7b44e24cf8_26x26.png" class="tabsImg" v-if="item.is_jhs">{{item.title}}
				            </h1>
						<div class="count"><span>原价 {{item.old_price}}元</span> <span class="alreadyBuy">{{item.sales_num}} 人已购</span></div>
						<div class="coupon">
							<div class="price">
								¥<b>{{item.price}}</b></div>
							<div class="count-label"><strong>{{item.coupon_num}}</strong>元 券
							</div>
						</div>
					</router-link>
				</div>
		</div>
		<div class="last-page" v-if="isLastPage">
			<p class="last-page-p">没有更多了~</p>
		</div>
		<!--向上 去首页展示-->
		<scroll-top :is-index="true"></scroll-top>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import api from '@/fetch/api'
	import ScrollTop from '@/components/ScrollTop'
	//	import * as _ from '@/util/tool'
		
	export default {
		components: {
			ScrollTop
		},
		data() {
			return {
				//商品流是否在加载
				busy: false,
				//是否是最后一页
				isLastPage: false,
				//商品列表
				topicGoodsList: [],
				//页码
				pageNo: this.$route.query.page_no || 0,
				//查找类型，区分主题商品
				findType: this.$route.query.find_type || '',
				//title
				title: this.$route.query.title || '',
				
			}
		},
		//创建之前
		created() {
			//加载商品数据
			this.loadMore();
		},
		//计算属性
		computed: {
			//上一页六个商品id，首页为空
			exsitGoodsidList() {
				let list = []
				if(this.topicGoodsList.length > 0) {
					for(let i = this.topicGoodsList.length - 6; i < this.topicGoodsList.length; i++) {
						list.push(this.topicGoodsList[i].goods_id)
					}
				}
				return list
			}

		},
		mounted() {},

		methods: {
			//设置loading 图标
			...mapActions([
				'setLoadingState'
			]),
			//加载分页 商品流
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
					"channelType": this.findType,
					"first_cid": 0,
					"second_cid": 0,
					"pageNo": this.pageNo += 1,
					"pageSize": 12,
					"exsit_goodsid_list": this.exsitGoodsidList,
					"sort_type": 1
				};
				api.getGoodsList(params)
					.then(res => {
						console.log(res)
						if(res && res.code == 0) {
							
							//结果为空 则为最后一页
							if(res.data.goods_list.length == 0) {
								this.isLastPage = true
							} else {
								if(this.topicGoodsList.length == 0) {
									this.topicGoodsList = res.data.goods_list
								} else {
									this.topicGoodsList = this.topicGoodsList.concat(res.data.goods_list)
								}
								//不能加载
								this.busy = false;
							}
						}
						//loading 图标
						this.setLoadingState(false)
					})
			},

		},
		//监控属性
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/function';
	@import './style/list.css';
	/*@import './style/style.css';*/
	/*商品流*/
	
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
	
	.lists .goods-two .coupon .count-label {
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
	
	.lists .goods-two .coupon .count-label strong {
		font-size: 14px;
		font-weight: bold;
	}
	
	.last-page {
		width: 100%;
		p {
			text-align: center;
		}
	}
</style>