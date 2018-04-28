<template>
	<div>
		<div>
			<div style="width: 100%; height: 44px;">
				<div id="cms-find" class="head">
					<a href="javascript:history.go(-1);" class="back"></a>
					<form action="javascript:return true;" class="find"><input type="text" placeholder="立即查找独家优惠券" name="search" autocomplete="off">
						<div class="placeholder-search"></div>
					</form> <button class="search-btn">搜索</button>
				</div>
			</div>
			<section>
				<div class="divide"></div>
				<section class="his">
					<p class="subject">搜索历史 <span>清空</span></p>
					<div class="list">
						<a>书包韩版</a>
						<a>加湿器</a>
						<a>手机</a>
					</div>
				</section>
			</section>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'


	export default {
		components: {
		},
		data() {
			return {
			}
		},
		//创建之前
		created() {
			//scrolltop 到最上面
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		},
		//创建完成
		mounted() {
		},
		//计算属性
		computed: {
		},
		methods: {
			//领券
			goGetCoupon() {

			},
			//显示详情图片
			showDetailImg() {
			},
		},
		//监控属性
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
@import '../../assets/css/function';
@import 'list.css';


input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
    display: none;
}
#cms-find ::-webkit-input-placeholder { /* WebKit browsers */
    color:    #FFF;
    font-size: 14px;
}
#cms-find :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #FFF;
    font-size: 14px;
    opacity:  1;
}
#cms-find ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #FFF;
    opacity:  1;
    font-size: 14px;
}
#cms-find :-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #FFF;
    font-size: 14px;
}
.head label.home{
    position: absolute;
    right: 7px;
    top: 18px;
    line-height: 1;
}
.hot, .his {
    padding: 20px;
}
.hot .subject, .his .subject {
    margin-bottom: 15px;
    font-size: 14px;
    color: #9a9a9a;
}
.subject i.icon{
    display: inline-block;
    margin-right: 5px;
    width: 14px;
    height: 16px;
    background: url(//oss2.lanlanlife.com/91ccedeefba0cc5b86502817e78a166d_32x28.png)no-repeat;
    background-size: 100%;
    vertical-align: bottom;
}
.hot .subject span, .his .subject span{
    float: right;
}
.hot .list a,
.his .list a{
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
.his .list a{
    margin: 0 39px 20px 0;
}
.suggest{
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: #FFF;
    color: #9a9a9a;
    font-size: 12px;
    padding: 10px 0;
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
}
.suggest li:active{
    background-color: #f1f1f1;
}
.suggest li{
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
}



</style>