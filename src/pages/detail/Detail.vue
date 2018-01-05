<template>
	<div>
		<section id="app_detail">
			<section class="az">
				<section>
					<div class="sliders">
						<div class="mint-swipe detail-swipe">
							<div class="mint-swipe-items-wrap">
								<div class="mint-swipe-item" style="transform: translate3d(-375px, 0px, 0px);"><img src="//oss2.lanlanlife.com/a58aeae67b5b5665574dcd25c8c6db3e_800x800.jpg"></div>
								<div class="mint-swipe-item" style=""><img src="//oss3.lanlanlife.com/56f57df34155e9571f9a009eb0b485ea_800x800.jpg"></div>
								<div class="mint-swipe-item is-active" style=""><img src="//oss2.lanlanlife.com/25e095d5a5e54ca77b2420ba5f842ad7_800x800.jpg"></div>
								<div class="mint-swipe-item" style="transform: translate3d(-375px, 0px, 0px);"><img src="//oss3.lanlanlife.com/8dd5ee846ce7b5946433ec0aba8fd86f_800x800.jpg"></div>
								<div class="mint-swipe-item" style="transform: translate3d(-375px, 0px, 0px);"><img src="//oss3.lanlanlife.com/b105be381c5dd65f51b00ece718ea3c0_800x800.jpg"></div>
							</div>
							<div class="mint-swipe-indicators-center">
								<div class="mint-swipe-indicator"></div>
								<div class="mint-swipe-indicator"></div>
								<div class="mint-swipe-indicator is-active"></div>
								<div class="mint-swipe-indicator"></div>
								<div class="mint-swipe-indicator"></div>
							</div>
						</div>
						<a href="javascript:;"><img src="//oss.lanlanlife.com/d863edbc1bc617db70e2c1144f4c1079_60x60.png" alt="" class="detail_return"></a>
						<div class="user-list">

						</div>
					</div>
					<div class="detail-info">
						<h3>  <i class="icon tmall"></i> <span>车载纸巾盒 汽车用宝马奥迪大众扶手箱抽纸盒创意简约座式纸抽盒</span></h3>

						<div class="price"><span class="title">券后价</span> <span class="yPrice">¥18<s>.00</s></span> <span class="oPrice">¥23.00</span> <span class="monthSales">660人已购</span></div>
					</div>
					<div class="divide"></div>
					<div class="tpwd-copy"><button id="copy-trigger-tpwd" data-collection="_path=9001.CA.1321.i.560532820633.e.1" class="copy-btn"><img src="//oss.lanlanlife.com/3f75c9aed0c58300540c04ea703a3be2_36x36.png">
                            一键复制淘口令
                        </button>
						<div data-collection="_path=9001.CA.1321.i.560532820633.e.3" class="copy-area">
							<div>
								<p id="copy_tpwd">￥sUT909KVyqo￥</p>
							</div> <span>长按全选复制文字，然后打开［手机淘宝］即可领券购买</span></div>
					</div>
					<div class="coupon">
						<a href="javascript:;" data-collection="_path=9001.CA.1321.i.560532820633.e.0"><span class="amount"><s>￥</s><b>5</b></span><span class="time"><s><i>优惠券</i>使用期限</s><b>2018.01.02-2018.01.09</b></span><span class="go-coupon">立即领券</span></a>
					</div>
					<div class="recommend"><label>推荐语</label>
						<p>“买就送防滑垫，时尚豪华纸巾盒，采用优质皮料，精湛工艺，内衬无纺布，弧形设计，可定制车标，时尚大气，彰显豪华”</p>
					</div>
					<div class="divide"></div>
					<div class="grade"><img src="//oss1.lanlanlife.com/d343c64fdedfd7d52407c3eeaef78f07_36x213.png"><span class="name">华美仕家居旗舰店</span>
						<div class="dsr"><span>宝贝描述<b>4.9</b><i class="up"></i></span> <span>卖家服务<b>4.8</b><i class="up"></i></span> <span>物流服务<b>4.8</b><i class="up"></i></span></div>
					</div>
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
						<a href="javascript:;" class="share-btn"><img src="//oss3.lanlanlife.com/9647feda49c08796a9782f85a1152f32_36x36.png" alt=""> <span>分享图片</span></a>
					</li>
					<li class="btn tpwd">
						<a href="javascript:;">复制淘口令</a>
					</li>
					<li class="btn browser">
						<a href="javascript:;" data-collection="_path=9001.CA.1321.i.560532820633.e.0">领券购买</a>
					</li>
				</ul>
			</footer>
			<text-alert v-show="showAlert"></text-alert>
		</section>
	</div>
</template>

<script>
	import TextAlert from '@/pages/detail/TextAlert'
	export default {
		components: {
			TextAlert
		},
		data(){
			return {
				showAlert : true
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/function';
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