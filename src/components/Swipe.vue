<template>
	<div>
		<swiper :options="swiperOption" class="swiper-box" ref="mySwiper">
			<swiper-slide class="swiper-item" v-for="(banner, index) in bannerList" :key="index">
				<img :src="banner.image_url">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination" v-if="bannerList.length > 1"></div>
		</swiper>
	</div>
</template>

<script>
	// require styles
	import 'swiper/dist/css/swiper.css'

	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		name: 'BannerList',
		components: {
			swiper,
			swiperSlide,
		},
		props: {
	        bannerList: Array,
	    },
		data() {
			return {
//				bannerList : ['//oss.lanlanlife.com/30d3381b160c6f9312737a132f42a66e_300x750.jpg','//oss.lanlanlife.com/45625002bdfd8baa24c2b4aef0829eb6_300x750.jpg','//oss1.lanlanlife.com/c0bb79e77b28d319a493b2dad82b3665_300x750.jpg'],
				swiperOption: {
					// 所有配置均为可选（同Swiper配置） 
//					loop : true,
					notNextTick: true,
					autoplay: 3000,
					grabCursor: true,
					setWrapperSize: true,
					autoHeight: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					mousewheelControl: true,
					observeParents: true
				}
			};
		},
		//定义这个sweiper对象  
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},
		mounted() {
			//如果小于1 就销毁 swiper
//			if(this.swiper.slides.length <= 1){
//				console.log('数量小啊 ');
//				this.swiper.destroy();
//			}
//			console.log("每次切换都会触发我");
//			this.swiper.slideTo(0, 0, true);
		},
		beforeDestroy(){
//			alert('beforeDestroy')
//			this.swiper.destroy()
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import '../assets/css/function.scss';
	.swiper-box {
		height: 1.5rem !important;
		/*width: 100%;
		height: 100%;
		margin: 0 auto;*/
		.swiper-item {
			/*height: px2rem(380px);*/
			text-align: center;
			font-size: 18px;
			img {
				width: 100%;
			}
		}
	}

</style>