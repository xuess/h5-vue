<template>
	<div>
		<router-link :to="{ path: 'detail', query: { goods_id: item.goods_id}}" v-for="(item,index) in goodsList" :key="index">
			<div class="goodsOne">
				<div class="cover-image"><img :src="item.img_url" class="image">
				</div>
				<div class="item-info">
					<h1 class="title"><img src="//oss1.lanlanlife.com/f87493c5f309d8b282476c232df6bd4b_26x26.png" class="tabsImg" v-if="item.is_tmall">
					<img  src="//oss3.lanlanlife.com/3f681b35cd2518c925786f7b44e24cf8_26x26.png" class="tabsImg" v-if="item.is_jhs">{{item.title}}
		            </h1>
					<p class="rec">{{item.desc}}</p>
					<div class="count"><span>原价 {{item.old_price}}元</span> <span class="alreadyBuy">{{item.sales_num}} 人已购</span></div>
					<div class="coupon">
						<div class="price">
							¥<b>{{item.price}}</b></div>
						<div class="count-label"><strong>{{item.coupon_num}}</strong>元 券
						</div>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'ProductItem',
		props: {
	        goodsList: Array,
	    },
		data() {
			return {
			}
		},
		
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import '../../assets/css/function.scss';
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
</style>