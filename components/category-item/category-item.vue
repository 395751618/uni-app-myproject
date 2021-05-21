<template>
	<view class="list-item">
		<!-- <image :src="item.photos | formatThumb"></image> -->
		<image class="icon" src="../../static/test/2.jpeg" mode="aspectFill"></image>
		<view class="content">
			<text class="name">{{item.localeName}}</text>
			<text class="number">报盘号: {{item.number}}</text>
			<text class="source">货源地: {{item.source}}</text>
			<text class="ton">预计装柜重量: {{item.availableTon}}</text>
			<text class="container">预计柜数: {{item.containerQuantity}}</text>
			<text class="price">价格: {{item.price}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"category-item",
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
	.list-item {
		flex-direction: row;
		margin-top: 20rpx;
	}
	.content {
		flex-direction: column;
		margin-left: 20rpx;
	}
	.icon {
		width: 120px;
		height: 120px;
		margin-left: 20rpx;
		border-radius: 8px;
	}
	.name {
		font-size: 14sp;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}
	.number {
		font-size: 13sp;
		margin-bottom: 5rpx;
	}
	.source {
		font-size: 13sp;
		margin-bottom: 5rpx;
	}
	.ton {
		font-size: 13sp;
		margin-bottom: 5rpx;
	}
	.container {
		font-size: 13sp;
		margin-bottom: 5rpx;
	}
	.price {
		font-size: 13sp;
	}
</style>
