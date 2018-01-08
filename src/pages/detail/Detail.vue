<template>
	<div>
		<section id="app_detail">
			<section class="az">
				<section>
					<div class="sliders">
						<swiper class="mint-swipe detail-swipe" :options="swiperOption" ref="mySwiper">
							<swiper-slide class="swiper-item" v-for="(banner, index) in goodsData.img_list" :key="index">
								<img :src="banner">
							</swiper-slide>
							<div class="swiper-pagination" slot="pagination"></div>
						</swiper>
						<a href="javascript:history.go(-1);"><img src="//oss.lanlanlife.com/d863edbc1bc617db70e2c1144f4c1079_60x60.png" alt="" class="detail_return"></a>
					</div>
					<div class="detail-info">
						<h3>  <i class="icon tmall"></i> <span>{{goodsData.title}}</span></h3>
						<p class="rec" v-if="goodsData.desc">{{goodsData.desc}}</p>
						<div class="price"><span class="title">券后价</span> <span class="yPrice">¥{{goodsData.price | formatDoubleStart}}<s>{{goodsData.price | formatDoubleEnd}}</s></span> <span class="oPrice">¥{{goodsData.old_price}}</span> <span class="monthSales">{{goodsData.sales_num}}人已购</span></div>
					</div>
					<div class="divide"></div>
					<div class="tpwd-copy">
						<button class="copy-btn"><img src="//oss.lanlanlife.com/3f75c9aed0c58300540c04ea703a3be2_36x36.png">
                            <span id="copy-trigger-tpwd" data-clipboard-target="#copy_tpwd">一键复制淘口令</span>
                        </button>
						<div class="copy-area">
							<div>
								<p id="copy_tpwd">{{goodsData.prd_code}}</p>
							</div> <span>长按全选复制文字，然后打开［手机淘宝］即可领券购买</span></div>
					</div>
					<div class="coupon">
						<a :href="goodsData.buy_url"><span class="amount"><s>￥</s><b>{{goodsData.coupon_num}}</b></span><span class="time"><s><i>优惠券</i>使用期限</s><b>{{goodsData.coupon_date}}</b></span><span class="go-coupon">立即领券</span></a>
					</div>
					<div class="recommend"><label>推荐语</label>
						<p>“{{goodsData.recommend_str}}”</p>
					</div>
					<!--<div class="divide"></div>
					<div class="grade"><img src="//oss1.lanlanlife.com/d343c64fdedfd7d52407c3eeaef78f07_36x213.png"><span class="name">华美仕家居旗舰店</span>
						<div class="dsr"><span>宝贝描述<b>4.9</b><i class="up"></i></span> <span>卖家服务<b>4.8</b><i class="up"></i></span> <span>物流服务<b>4.8</b><i class="up"></i></span></div>
					</div>-->
					<div class="divide"></div>
					<div class="multi-image">
						<p><button>查看图文详情</button></p>
					</div>
				</section>
			</section>
			<footer class="footer">
				<ul>
					<li>
						<a href="/saber/index?pid=mm_112040233_40946019_167804789" class="home-link"><img src="//oss3.lanlanlife.com/ddfdbaa6b0ec0c4ba98622940b7b5ffb_40x38.png" alt=""> <span>首页</span></a>
					</li>
					<li>
						<a href="javascript:;" class="share-btn" @click="openShareImg"><img src="//oss3.lanlanlife.com/9647feda49c08796a9782f85a1152f32_36x36.png" alt=""> <span>分享图片</span></a>
					</li>
					<li class="btn tpwd">
						<a href="javascript:;" @click="openAlert('code')">复制淘口令</a>
					</li>
					<li class="btn browser">
						<a href="javascript:;" data-collection="_path=9001.CA.1321.i.560532820633.e.0">领券购买</a>
					</li>
				</ul>
			</footer>
			<text-alert v-show="showAlert" @close-alert="closeAlert" :alert-tpye="alertTpye" :prd-code-detail="prdCodeDetail" :prd-code-img-url="prdCodeImgUrl"></text-alert>
		</section>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import TextAlert from '@/pages/detail/TextAlert'
	import api from '@/fetch/api'
	import Clipboard from 'clipboard'
	// require styles
	import 'swiper/dist/css/swiper.css'
	

	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	
	export default {
		components: {
			swiper,
			swiperSlide,
			TextAlert
		},
		data() {
			return {
				swiperOption: {
					// 所有配置均为可选（同Swiper配置） 
					notNextTick: true,
					autoplay: 3000,
					grabCursor: true,
					setWrapperSize: true,
					autoHeight: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					mousewheelControl: true,
					observeParents: true
				},
				//弹窗 
				showAlert: false,
				//弹窗类别 img = 分享图片 code = 复制淘口令 
				alertTpye: 'code',
				//分享图片url
				prdCodeImgUrl:'',
				//商品数据
				goodsData: {
					"goods_id": "",
			        "img_list": [],
			        "title": "",
			        "desc": "",
			        "is_tmall": false,
			        "is_jhs": false,
			        "old_price": "00.00",
			        "price": "00.00",
			        "sales_num": "0",
			        "prd_code": "",
			        "coupon_num": "",
			        "coupon_date": "",
			        "recommend_str": "",
			        "buy_url": ""
				}
			}
		},
		//创建之前
		created() {
			//加载首屏数据
			this.getDetailData()
			//scrolltop 到最上面
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		},
		
		mounted() {
			//一键复制
			this.copyBuyCode()
			
		},
		//计算属性
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			},
			prdCodeDetail(){
				let res = []
				if(this.goodsData != null){
					res.push(this.goodsData.title);
					res.push(`【原价】:${this.goodsData.old_price}元`) 
					res.push(`【券后】: ${this.goodsData.price}元秒杀[闪电]`) 
//					res.push(`优惠下单：http://quan.tfbcoupon.com/x/5b735f3c`) 
					res.push(`【复制打开手机淘宝】`) 
					res.push(`领取下单${this.goodsData.prd_code}`) 
					res.push(`【推荐语】:${this.goodsData.recommend_str}`) 
				}
				return res
			}
		},
		methods: {
			//一键复制淘口令
			copyBuyCode(){
				let clipboardCode = new Clipboard('#copy-trigger-tpwd');
			
				clipboardCode.on('success', function(e) {
					e.trigger.innerHTML = "复制成功";
					setTimeout(() => {
						e.trigger.innerHTML = '一键复制淘口令';
					}, 2000);
				});
		
				clipboardCode.on('error', function(e) {
					e.trigger.innerHTML = "复制失败，请长按复制";
					setTimeout(() => {
						e.trigger.innerHTML = '一键复制淘口令';
					}, 2000);
				});
			},
			//领券
			goGetCoupon(){
				
			},
			//获取 详情页数据
			getDetailData() {
				//获取首屏数据
				api.getDetail({
						"goods_id": this.$route.query.goods_id
					})
					.then(res => {
						console.log(res)
						if(res.success) {
							this.goodsData = res.goods
						}
					})
			},
			//打开淘口令弹窗
			openAlert(type){
				this.alertTpye = type
				this.showAlert = true
			},
			//生成分享二维码图片
			openShareImg(){
				api.getPrdCodeImgUrl({goods_id:this.$route.query.goods_id})
					.then(res => {
						if(res.success) {
							this.prdCodeImgUrl = res.goods_img_url
							
							this.openAlert('img')
						}
						
					})
			},
			//关闭弹窗
			closeAlert(){
				this.showAlert = false
			}
		},
		//监控属性
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/function';
	
	.swiper-item img{
		width: 100%;
	}
	
	#app_detail .loading {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, .8) url(//oss1.lanlanlife.com/f5ed64b94f4bd995e5d8ea8dfda382a4_62x62.gif) no-repeat center;
	}
	
	.az {
		padding-bottom: 48px;
	}
	
	nav {
		position: relative;
		background-color: #FFF;
	}
	
	#app_detail ::-webkit-input-placeholder {
		/* WebKit browsers */
		color: #8C776E;
	}
	
	#app_detail :-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: #8C776E;
		opacity: 1;
	}
	
	#app_detail ::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: #8C776E;
		opacity: 1;
	}
	
	#app_detail :-ms-input-placeholder {
		/* Internet Explorer 10+ */
		color: #8C776E;
	}
	
	.a {
		position: absolute;
		width: 40px;
		height: 40px;
		background: url(//oss2.lanlanlife.com/9302c0ba7eca4730fe5a61bbadfb5272_21x13.png) no-repeat;
		background-size: 13px 21px;
		background-position: center;
	}
	
	.b {
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 17px;
		color: #030303;
	}
	
	.detail_return {
		width: 44px;
		height: 44px;
		position: absolute;
		top: 10px;
		left: 15px;
		z-index: 11;
	}
	
	.sliders {
		position: relative;
	}
	
	.detail-swipe {
		width: 3.75rem;
		height: 3.40rem !important;
		background-color: #F1F1F1;
	}
	
	.cover img {
		width: 3.75rem;
		height: 3.75rem;
	}
	
	.detail-info {
		position: relative;
		padding: 15px;
		background-color: #FFF;
	}
	
	.detail-info h3 {
		color: #030303;
		font-size: 16px;
		-o-text-overflow: ellipsis;
		/*兼容opera*/
		text-overflow: ellipsis;
		/*这就是省略号喽*/
		overflow: hidden;
		/*设置超过的隐藏*/
		white-space: nowrap;
		/*设置不折行*/
	}
	
	.detail-info p.rec {
		margin-top: .13rem;
		color: #F16628;
		font-size: 0.12rem;
		line-height: 1;
	}
	
	.detail-info .icon {
		display: inline-block;
		width: 13px;
		height: 13px;
	}
	
	.detail-info .icon.bao {
		background: url(//oss.lanlanlife.com/e8ce4e883277e77f2e335dd0f450d116_26x26.png) no-repeat;
		background-size: 13px;
	}
	
	.detail-info .icon.xian {
		background: url(//oss3.lanlanlife.com/a479f46088aff2b2f279a215bfc97148_26x26.png) no-repeat;
		background-size: 13px;
	}
	
	.detail-info .icon.tmall {
		background: url(//oss1.lanlanlife.com/3ea7c827b7ae0b763e95530b492ac59d_26x26.png) no-repeat;
		background-size: 13px;
	}
	
	.detail-info .price {
		position: relative;
		height: 28px;
		line-height: 28px;
		padding-top: 12px;
	}
	
	.detail-info .price s {
		font-size: 0.11rem;
		text-decoration: none;
	}
	
	.detail-info .price .title {
		font-size: 0.12rem;
		color: #696969;
		margin-right: 0.05rem;
	}
	
	.detail-info .price .yPrice {
		font-size: 0.2rem;
		color: #FB610C;
		margin-right: 0.05rem;
	}
	
	.detail-info .price .oPrice {
		color: #C7C4C4;
		font-size: 0.12rem;
		text-decoration: line-through;
	}
	
	.detail-info .price .monthSales {
		float: right;
		color: #696969;
		font-size: 0.12rem;
	}
	
	.recommend,
	.grade {
		padding: 15px;
		background-color: #FFF;
	}
	
	.recommend label,
	.grade label {
		position: absolute;
		color: #030303;
		font-size: 14px;
		font-weight: 400;
		font-style: normal;
		font-variant: normal;
	}
	
	.grade h5 {
		margin-bottom: 20px;
		color: #030303;
		font-size: 14px;
		font-weight: 400;
		font-style: normal;
		font-variant: normal;
		display: inline-block;
		vertical-align: middle;
		margin-left: 0.1rem;
	}
	
	.grade .name {
		font-size: 0.14rem;
		color: #030303;
		margin-left: 0.1rem;
		vertical-align: middle;
	}
	
	.grade img {
		height: 10px;
		vertical-align: middle;
	}
	
	.recommend p {
		padding-left: 60px;
		line-height: 1.4;
		color: #696969;
	}
	
	.grade .dsr {
		margin-top: 20px;
		font-size: 0;
	}
	
	.dsr span {
		display: inline-block;
		text-align: center;
		color: #696969;
		font-size: 12px;
		font-weight: 400;
		font-style: normal;
		font-variant: normal;
		margin-right: 0.4rem;
	}
	
	.dsr span:last-child {
		margin-right: 0!important;
	}
	
	.dsr .up {
		display: inline-block;
		width: 10px;
		height: 10px;
		background: url(//oss1.lanlanlife.com/68061408dc52928e999006abc815ad7f_22x20.png)no-repeat;
		background-position: center;
		background-size: 10px 10px;
		margin-left: 5px;
	}
	
	.dsr .down {
		display: inline-block;
		width: 10px;
		height: 10px;
		background: url(//oss2.lanlanlife.com/1313264fff5e57d89b81d6fe39fd06d2_22x20.png)no-repeat;
		background-position: center;
		background-size: 10px 10px;
		margin-left: 5px;
	}
	
	.text_alert {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		background-color: rgba(0, 0, 0, .3);
	}
	
	.pd15 {
		padding: 0 15px;
	}
	
	.tpwd-copy {
		padding: 13px;
		text-align: center;
	}
	
	.tpwd-copy button {
		color: #FFF;
		font-size: 14px;
		border: none;
	}
	
	.tpwd-copy .copy-btn {
		width: 100%;
		background: -webkit-gradient(linear, left top, right top, from(#FEA358), to(#F81F11));
		background: -webkit-linear-gradient(left, #FEA358, #F81F11);
		background: -o-linear-gradient(left, #FEA358, #F81F11);
		background: linear-gradient(to right, #FEA358, #F81F11);
		border-radius: 4px 4px 0 0;
		padding: 12px 0;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.tpwd-copy .copy-btn img {
		width: 18px;
		height: 18px;
		margin-right: 6px;
	}
	
	.tpwd-copy .manual {
		width: 230px;
		height: 28px;
		line-height: 28px;
		border-radius: 4px;
		background: -webkit-gradient(linear, left top, right top, from(#FEA358), to(#F81F11));
		background: -webkit-linear-gradient(left, #FEA358, #F81F11);
		background: -o-linear-gradient(left, #FEA358, #F81F11);
		background: linear-gradient(to right, #FEA358, #F81F11);
		margin-bottom: 11px;
	}
	
	.tpwd-copy .copy-area {
		color: #000;
		font-size: 14px;
		background: #FFF6F2;
		text-align: center;
		border: 1px dashed #FE814B;
		border-radius: 0 0 4px 4px;
		padding: 10px;
	}
	
	.tpwd-copy .copy-area p {
		font-weight: bold;
		margin-bottom: 5px;
	}
	
	.tpwd-copy .copy-area textarea {
		width: 100%;
		height: 14px;
		line-height: 14px;
		text-align: center;
		border: none;
		background-color: transparent;
		resize: none;
		margin-bottom: 5px;
	}
	
	.item-text {
		padding: 14px;
		text-align: left;
		font-size: 12px;
		color: #000;
		line-height: 1.5;
		background-color: #FFF6F2;
		border: 1px dashed #FE814B;
	}
	
	.text_alert .alert {
		margin-top: 25%;
		width: 100%;
		background-color: #FFF;
	}
	
	.text_alert .alert h2 {
		position: relative;
		height: 47px;
		line-height: 47px;
		color: #FFF;
		text-align: center;
		background: #FF8154;
		background: -webkit-gradient(linear, left top, right top, from(#FF8154), to(#Fc3E58));
		background: -webkit-linear-gradient(left, #FF8154, #Fc3E58);
		background: -o-linear-gradient(left, #FF8154, #Fc3E58);
		background: linear-gradient(90deg, #FF8154, #Fc3E58);
	}
	
	.text_alert .alert h2 .close {
		position: absolute;
		right: 15px;
		top: 15px;
	}
	
	.text_alert .alert .manual {
		display: inline-block;
		margin-top: 20px;
		padding: 4px 8px;
		color: #FFF;
		background: #FF8154;
		background: -webkit-gradient(linear, left top, right top, from(#FF8154), to(#Fc3E58));
		background: -webkit-linear-gradient(left, #FF8154, #Fc3E58);
		background: -o-linear-gradient(left, #FF8154, #Fc3E58);
		background: linear-gradient(90deg, #FF8154, #Fc3E58);
	}
	
	.text_alert .alert .wrapper {
		padding: 20px 30px;
		text-align: center;
	}
	
	.text_alert .alert .btn {
		display: inline-block;
		width: 1.8rem;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		color: #FFF;
		border-radius: 25px;
		border: none;
	}
	
	.text_alert .alert .bar {
		padding-top: 15px;
	}
	
	.text_alert .alert .btn.tpwd {
		background-color: #F94B7A;
	}
	
	.text_alert .alert .btn.text {
		background: #FF8154;
		background: -webkit-gradient(linear, left top, right top, from(#FF8154), to(#Fc3E58));
		background: -webkit-linear-gradient(left, #FF8154, #Fc3E58);
		background: -o-linear-gradient(left, #FF8154, #Fc3E58);
		background: linear-gradient(90deg, #FF8154, #Fc3E58);
	}
	
	.text_alert .alert .btn.green {
		background-color: #70CC67;
	}
	
	.text_alert .alert p.tip {
		padding: 10px;
		margin: 0;
		color: #828888;
		text-align: center;
		font-size: 12px;
		background-color: #F6F7F6;
	}
	
	.text_alert .alert textarea {
		width: 100%;
		height: 220px;
		line-height: 1.5;
		font-size: 12px;
		text-align: left;
		border: 1px dashed #FE4B68;
		background-color: #FFF6F2;
		resize: none;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		overflow: auto;
	}
	
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		font-size: 13px;
	}
	
	.footer ul {
		display: -webkit-box;
		/* OLD - iOS 6-, Safari 3.1-6 */
		/* OLD - Firefox 19- (buggy but mostly works) */
		display: -ms-flexbox;
		/* TWEENER - IE 10 */
		/* NEW - Chrome */
		display: flex;
		background-color: #FFF;
		border-top: 1px solid #F3F3F3;
	}
	
	.footer li {
		-webkit-box-flex: 1;
		/* OLD - iOS 6-, Safari 3.1-6 */
		/* OLD - Firefox 19- */
		/* Chrome */
		-ms-flex: 1;
		/* IE 10 */
		flex: 1;
		height: 48px;
		line-height: 48px;
	}
	
	.footer li a,
	.footer li span {
		display: block;
		color: #7D8690;
		text-align: center;
	}
	
	.footer li img {
		width: 20px;
		vertical-align: text-bottom;
	}
	
	.footer .browser {
		background: url("//oss3.lanlanlife.com/455aa01ff035507494e9f608883c23ae_55x110.png") no-repeat center;
		background-size: 100% 100%;
		color: #FFF;
	}
	
	.footer .browser>a {
		color: #FFF;
	}
	
	.footer .tpwd {
		background: url("//oss.lanlanlife.com/3729f62bfd7b3ca31015348c64d039db_55x110.png") no-repeat center;
		background-size: 100% 100%;
	}
	
	.footer .tpwd>a {
		color: #FFF;
	}
	
	.footer .home-link {
		width: 0.60rem;
		line-height: 1;
	}
	
	.footer .home-link img {
		width: 18px;
		margin-top: 10px;
	}
	
	.footer .home-link span {
		font-size: 12px;
		margin-top: 5px;
	}
	
	.footer .share-btn {
		width: 0.60rem;
		line-height: 1;
	}
	
	.footer .share-btn img {
		width: 18px;
		margin-top: 10px;
	}
	
	.footer .share-btn span {
		font-size: 12px;
		margin-top: 5px;
	}
	
	.footer li.btn {
		padding: 0 0.15rem;
	}
	
	.open-browser {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #FAFAFA;
	}
	
	.ob {
		margin-top: 20px;
		font-size: 18px;
		color: #030303;
		text-align: center;
	}
	
	.ob p {
		line-height: 35px;
	}
	
	.ob img {
		margin-top: 20px;
		width: 95%;
	}
	
	.multi-image {
		padding-top: 20px;
		padding-bottom: 20px;
		text-align: center;
	}
	
	.multi-image img {
		width: 100%;
		-webkit-touch-callout: default;
	}
	
	.multi-image p button {
		background-color: transparent;
		color: #FE814B;
		font-size: 14px;
		padding: 0.07rem 0.28rem;
		border: 1px solid #FE814B;
		border-radius: 4px;
	}
	
	.user-list {
		position: absolute;
		bottom: 0.5rem;
		left: 50%;
		-webkit-transform: translate(-50%, 0);
		-ms-transform: translate(-50%, 0);
		transform: translate(-50%, 0);
	}
	
	.user-list p {
		margin: 0 auto;
		padding: 0 10px 0 5px;
		height: 36px;
		width: 2.8rem;
		line-height: 36px;
		color: #FFF;
		border-radius: 25px;
		background-color: rgba(90, 68, 68, .9);
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.user-list p img {
		margin-top: 4px;
		margin-right: 5px;
		width: 28px;
		height: 28px;
		border-radius: 50%;
		vertical-align: top;
		font-size: 14px;
	}
	
	.slide-fade-enter-active {
		-webkit-transition: all .3s ease;
		-o-transition: all .3s ease;
		transition: all .3s ease;
	}
	
	.slide-fade-leave-active {
		-webkit-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		-o-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide-fade-enter,
	.slide-fade-leave-to {
		-webkit-transform: translateY(30px);
		-ms-transform: translateY(30px);
		transform: translateY(30px);
		opacity: 0;
	}
	
	.coupon {
		padding: 0.1rem 0.17rem;
		height: 0.78rem;
		background-image: url("//oss2.lanlanlife.com/f732110854173bec85ad7781a7592dcb_156x698.png");
		background-repeat: no-repeat;
		background-position: center 0.12rem;
		background-color: #F1F1F1;
		background-size: auto 0.78rem;
	}
	
	.coupon .amount {
		display: inline-block;
		vertical-align: middle;
		margin-left: 0.18rem;
		line-height: 0.75rem;
	}
	
	.coupon .amount s {
		color: #FA6A06;
		font-size: 0.2rem;
		text-decoration: none;
	}
	
	.coupon .amount b {
		color: #FA6A06;
		font-size: 0.4rem;
	}
	
	.coupon .time {
		display: inline-block;
		vertical-align: middle;
		width: 1.3rem;
		margin-left: 0.1rem;
		height: 0.37rem;
	}
	
	.coupon .time s {
		display: inline-block;
		text-decoration: none;
		font-size: 0.12rem;
		margin-bottom: 0.05rem;
		color: #696969;
	}
	
	.coupon .time i {
		color: #FE814B;
	}
	
	.coupon .time b {
		display: inline-block;
		color: #696969;
		font-size: 0.09rem;
		-webkit-transform: scale(0.8);
		-ms-transform: scale(0.8);
		transform: scale(0.8);
		margin-left: -0.09rem;
	}
	
	.coupon .go-coupon {
		display: inline-block;
		vertical-align: middle;
		color: #FFFFFF;
		font-size: 0.14rem;
		margin-right: 0.25rem;
		line-height: 0.75rem;
		float: right;
	}
	
	.detail-error img {
		display: block;
		margin: 0 auto;
		padding-top: 1rem;
		width: 0.6rem;
	}
	
	.detail-error h1 {
		color: #333;
		font-size: 0.2rem;
		margin-top: 0.3rem;
		text-align: center;
	}
	
	.detail-error p {
		color: #333333;
		font-size: 0.16rem;
		margin-top: 0.1rem;
		text-align: center;
	}
	
	.detail-error a {
		display: block;
		margin: 0.8rem auto 0 auto;
		width: 160px;
		height: 40px;
		font-size: 0.16rem;
		text-align: center;
		line-height: 40px;
		color: #FE3C24;
		border: 1px solid #FE3C24;
		border-radius: 4px;
		background: #FFF;
	}
</style>