<template>

	<div class="items" id="J_goodsList">
		<div style="height: 40px;" id="J_sortBar">
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
		</div>
		<product-item :goods-list="goodsList"></product-item>
	</div>
</template>

<script>
	import api from '@/fetch/api'
	import * as _ from '@/util/tool'
	import ProductItem from '@/pages/index/ProductItem'
	import { mapGetters } from 'vuex'
	import BottomScrolling from './scrollToBottom.js'

	export default {
		name: 'ProductList',
		data() {
			return {
				//tabsId 主Id
				tabsId: this.$route.query.tab_id || 0,
				//二级分类id
				categoryId: this.$route.query.c_id || 0,
				pageNo: this.$route.query.page_no || 0,
				pageSize: 12,
				sortType: 1,
				Affix: false,
				sortBarTop: 0,
			};
		},
		components: {
			ProductItem
		},
		//创建之前
		created() {
			//加载首屏数据
			if(this.goodsList.length == 0) {
				//获取数据
				this.getGoodsListData(this);
			}

			//滚动到底部 加载下一页
			new BottomScrolling({
				callback: () => {
					console.log('分页啦');
					this.getGoodsListData(this);
				},
				gap: 50
			});
			
			//sortBar 滚动位置固定
	        document.addEventListener('scroll', ()=>{
	        		let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
	        		if(this.sortBarTop == 0){
	        			this.sortBarTop = document.querySelector('#J_sortBar').offsetTop;
	        		}
	        		console.log('this.sortBarTop == ',this.sortBarTop);
				if(scrollTop > this.sortBarTop - 80){
					this.Affix = true
				}else{
					this.Affix = false
				}
	        }, false)
			
		},
		//计算属性
		computed: {
			...mapGetters([
				'goodsList'
			]),
			//上一页六个商品id，首页为空
			exsitGoodsidList: function() {
				let list = []
				if(this.goodsList.length > 0) {
					for(let i = this.goodsList.length - 6; i < this.goodsList.length; i++) {
						list.push(this.goodsList[i].goods_id)
					}
				}
				return list
			},
		},
		mounted() {
		},
		
		methods: {
			_debounceTail(fn, delay, ctx) {
		        let movement = null
		        return function() {
		            let args = arguments
		
		            // 清空上一次操作
		            clearTimeout(movement)
		
		            // delay时间之后，任务执行
		            movement = setTimeout(function() {
		                fn.apply(ctx, args)
		            }, delay)
		        }
		    },
			//sort_type	是	string	排序 1=精选，2=销量 ，3=最新，4=价格低到高 ，5=价格高到低
			changeSortType: function(sortType) {
				//价格升序4 改成降序
				if(sortType == this.sortType){
					if(sortType == 4){
						this.sortType = 5
					}else{
						//更上次相同不查询
						return ;
					}
				}else{
					this.sortType = sortType
				}
				
				//页码清0
				this.pageNo = 0
				//清空goodsList
				this.$store.dispatch('setGoodsListLength')
				//切换排序 重新查询
				this.getGoodsListData(this);
				
				//scrolltop 到最上面
				document.body.scrollTop = this.sortBarTop - 80
				document.documentElement.scrollTop = this.sortBarTop - 80
			},
			//		first_cid	是	string	一级类目id
			//		second_cid	否	string	分类
			//		page_no	int	当前页码	
			//		page_size	int	一页多少条	默认12
			//		exsit_goodsid_list	array	上页的商品id列表(传6个)格式：6,5,4,3,2,2
			//		sort_type	是	string	排序 1=精选，2=销量 ，3=最新，4=价格低到高 ，5=价格高到低
			getGoodsListData: function(){
				let params = {
					"first_cid": this.tabsId,
					"second_cid": this.categoryId,
					"page_no": this.pageNo += 1,
					"page_size": this.pageSize,
					"exsit_goodsid_list": this.exsitGoodsidList,
					"sort_type": this.sortType
				};
				this.$store.dispatch('getGoodsList', params)
			},
			windowScroll(e) {
				var _this = this;

				var scrollTop = $(window).scrollTop();
				var winHeight = $(window).height();
				var bodyHeight = $(document).height();

				if((scrollTop + 50 >= bodyHeight - winHeight) && !_this.model.isLastPage && !_this.model.isLoading) {
					//_this.getResultList();
				}
				pastScrollTop = scrollTop;
			},
		},
		//监控属性
		watch: {

		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	/*@import '../assets/css/function.scss';*/
	
	.Affix {
	    z-index: 100;
	    position: fixed;
	    width: 100%;
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
</style>