<template>
	<view class="parent">
		<view class="content">
			<view class="time-background">
				<text class="time">发布时间</text>
				<image class="time-arrow" mode="aspectFit" src="/static/images/category_arrow1.png"></image>
			</view>
			<view class="filter-background">
				<text class="filter">筛选</text>
				<image class="filter-arrow" mode="aspectFit" src="/static/images/category_arrow2.png"></image>
			</view>
		</view>
		<line class="line"></line>
	</view>
</template>

<script>
	import line from '../../components/line/line.vue'
	export default {
		name:"category-bar",
		components: {
			line
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.parent {
		flex-direction: column;
	}
	.content {
		flex-direction: row;
		height: 80rpx;
	}
	.time-background {
		flex: 1;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.filter-background {
		flex: 1;
		flex-direction: row;
		align-items: center;	
		justify-content: center;
	}
	.time {
		color: #FF7519;
		font-size: 13sp;
		margin-right: 10rpx;
	}
	.filter {
		color: #3F536E;
		font-size: 13sp;
		margin-right: 10rpx;
	}
	.time-arrow {
		width: 14rpx;
		height: 12rpx;
		justify-content: center;
	}
	.filter-arrow {
		width: 14rpx;
		height: 12rpx;
		justify-content: center;
	}
</style>
