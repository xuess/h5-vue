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
	import Toast from '@/components/Toast'
	import Loading from '@/components/Loading'

	import { mapGetters } from 'vuex'
//	import { mapGetters, mapActions, mapState } from 'vuex'

	export default {
		name: 'app',
		components: {
			Loading,
			Toast,
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