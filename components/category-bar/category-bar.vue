<template>
	<view class="parent">
		<view class="item1">1</view>
		<view class="item2">2</view>
	</view>
</template>

<script>
	export default {
		name:"category-bar",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.parent {
		display: flex;
		flex-direction: row;
		height: 80rpx;
		line-height: 80rpx;
		height: 80rpx;
	}
	.item1 {
		flex: 1;
		text-align: center;
	}
	.item2 {
		flex: 1;
		text-align: center;
	}
</style>
