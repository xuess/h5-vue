<template>
	<div id="scroll_top_icon" class="on" style="bottom: 24px; right: 20px;">
		<img src="//oss.lanlanlife.com/08dd6d07a5c9332f7dc7ab84a8ddca05_80x80.png" alt="top">
	</div>
</template>






<style lang="scss" scoped>
	@import '../assets/css/function';
	#scroll_top_icon {
		display: none;
		position: fixed;
		width: 40px;
		height: 40px;
	}
	
	#scroll_top_icon img {
		width: 40px;
		height: 40px;
	}
	
	#scroll_top_icon.on {
		display: block;
	}
</style>