<template>
	<view class="parent">
		<image class="icon" src="../../static/test/1.jpeg" mode="scaleToFill"></image>
		<view>货源地：</view>
		<view>产品重量：</view>
		<view>室内存放：</view>
		<view>最早发货日期：</view>
	</view>
</template>

<script>
	export default {
		name:"lastest-item",
		data() {
			return {
				
			};
		},
		props: {
			item: {
				type: Object
			}
		}
	}
</script>

<style>
	.parent {
		display: inline-block;
		height: 100%;
		background-color: #DCDFE6;
		width: 300rpx;
		margin-top: 15px;
		margin-bottom: 15px;
		margin-left: 20px;
		flex-direction: column;
	}
	.icon {
		width: 100%;
		height: 200rpx;
		border-radius: 15px;
		margin-bottom: 5px;
	}
</style>
