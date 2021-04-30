<template>
	<view class="list-item">
		<!-- <image :src="item.photos | formatThumb"></image> -->
		<image class="icon" src="../../static/test/2.jpeg" mode="aspectFill"></image>
		<view class="content">
			<view>
				<text>{{item.localeName}}</text>
			</view>
			<view>报盘号{{item.number}}</view>
			<view>货源地</view>
			<view>预计装柜重量</view>
			<view>预计柜数</view>
			<view>价格</view>
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
		background-color: #8F8F94;
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-top: 15px;
		margin-left: $xx-spaceing-hmargin;
	}
	.content {
		display: flex;
		flex-direction: column;
		margin-left: 5px;
	}
	.icon {
		width: 130px;
		height: 130px;
		margin-left: 15px;
		border-radius: 10px;
	}
</style>
