<template>
	<div>
		<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js" type="text/javascript" charset="utf-8"></script>
	</div>

</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				isShow: false
			}
		},

	}

	wx.config({
		debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: '', // 必填，公众号的唯一标识
		timestamp: , // 必填，生成签名的时间戳
		nonceStr: '', // 必填，生成签名的随机串
		signature: '', // 必填，签名
		jsApiList: [] // 必填，需要使用的JS接口列表
	});

	wx.ready(function() {
		
		var shareData = {
			title: '${title}',
			desc: '${description}',
			link: '${url}',
			imgUrl: '${headImgUrl}',
			success: function(res) {
				//alert('已分享');    
			},
			cancel: function(res) {}
		};
		
		
		
		wx.onMenuShareAppMessage({
			title: shareData.title,
			desc: shareData.description,
			link: shareData.url,
			imgUrl: shareData.headImgUrl,
			trigger: function(res) {
				//  alert('用户点击发送给朋友');    
			},
			success: function(res) {
				//alert('已分享');    
			},
			cancel: function(res) {
				//alert('已取消');    
			},
			fail: function(res) {
				alert(JSON.stringify(res));
			}
		});
		wx.onMenuShareTimeline(shareData);
	});
	wx.error(function(res) {
		alert("error: " + res.errMsg);
	});
</script>
<style lang="scss" scoped>
	@import '../assets/css/function';
	.loading {
		text-align: center;
	}
</style>