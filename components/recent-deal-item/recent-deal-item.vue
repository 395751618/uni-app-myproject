<template>
	<view class="parent">
		<text class="name">{{item.name}}</text>
		<view class="content">
			<view class="left">
				<text>货源地</text>
				<text>重量</text>
				<text>成交日期</text>
			</view>
			<view class="right">
				<text>目的地</text>
				<text>成交价</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"recent-deal-item",
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		filters: {
			formatDate(date) {
				return '123'
			}
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
		background-color: #DCDFE6;
		width: 750rpx;
	}
	.name {
		font-size: 14px;
		padding-top: 5px;
		padding-bottom: 5px;
		margin-left: $xx-spaceing-hmargin;
		margin-right: $xx-spaceing-hmargin;
	}
	.content {
		display: flex;
		flex-direction: row;
		margin-bottom: 15px;
	}
	.left {
		display: flex;
		flex-direction: column;
		width: 50%;
		margin-left: $xx-spaceing-hmargin;
	}
	.right {
		display: flex;
		flex-direction: column;
		width: 50%;
		margin-right: $xx-spaceing-hmargin;
	}
</style>
