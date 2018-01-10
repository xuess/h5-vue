<template>
	<div>
		<transition name="fade">
			<div class="scroll_top_icon" v-show="isShow" @click="gotoTop">
				<img src="//oss.lanlanlife.com/08dd6d07a5c9332f7dc7ab84a8ddca05_80x80.png" alt="top">
			</div>
		</transition>
		<transition name="fade">
			<div class="back-index" v-show="isShow && isIndex">
				<router-link :to="{ path: 'index'}">
					<img src="//oss.lanlanlife.com/0cb693ff233f886fa6df93545bd9567d_80x80.png">
				</router-link>
			</div>
		</transition>
	</div>
</template>

<script>
	import { _debounceTail } from '@/util/tool'

	export default {
		props: {
			isIndex: Boolean
		},
		data() {
			return {
				isShow: false
			}
		},
		//创建之后
		mounted() {
			//商品排序条位置固定
			this.showGotoTop();
		},
		methods: {
			/**
			 * 从当前值滚动到顶部
			 * scrollDuration 速度 越大越慢
			 */
			scrollToTop(scrollDuration) {
				let scrollStep = -window.scrollY / (scrollDuration / 15),
					scrollInterval = setInterval(function() {
						if(window.scrollY != 0) {
							window.scrollBy(0, scrollStep);
						} else clearInterval(scrollInterval);
					}, 17)
			},
			//向上
			gotoTop() {
				
				this.scrollToTop(200)
				//scrolltop 到最上面
//				document.body.scrollTop = 0
//				document.documentElement.scrollTop = 0
			},
			/**
			 * 排序条 滚动时 位置固定
			 */
			showGotoTop() {
				//节流
				let scrollFn = _debounceTail(() => {
					let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
					//大于两倍高度 显示 向上按钮
					if(scrollTop > 800) {
						this.isShow = true
					} else {
						this.isShow = false
					}
				}, 200, this)

				//sortBar 滚动位置固定
				document.addEventListener('scroll', scrollFn, false)
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '../assets/css/function';
	.scroll_top_icon {
		position: fixed;
		width: 40px;
		height: 40px;
		z-index: 120;
		bottom: 24px;
		right: 20px;
	}
	
	.scroll_top_icon img {
		width: 40px;
		height: 40px;
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
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-to {
		opacity: 0
	}
</style>