<template>
	<div id="app">
		<toast v-show="showToast"></toast>
		<transition>
			<router-view></router-view>
		</transition>
		<loading v-show="loading"></loading>

	</div>
</template>

<script>
//	import tabar from '@/components/tabar'
//	import header from '@/components/header'
//	import sidebar from '@/components/sidebar'
	import Toast from '@/components/Toast'
//	import alert from '@/components/alert'
	import Loading from '@/components/Loading'

//	import SearchBar from '@/components/SearchBar'
//	import NavBar from '@/components/NavBar'

	import { mapGetters, mapActions, mapState } from 'vuex'

	export default {
		name: 'app',
		components: {
			Loading,
			Toast,
//			SearchBar,
//			NavBar,
//			tabar,
//			header,
//			sidebar,
//			toast,
//			alert,
		},
		data() {
			return {
			}
		},
		computed: {
			...mapGetters([
				'loading',
				'showToast',
			]),
		}
	};
</script>

<style>
	@import './assets/css/base.css';
	
</style>