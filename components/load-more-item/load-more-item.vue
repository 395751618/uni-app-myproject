<template>
	<view class="load-more">
		<view class="content" v-if="hasMoreData">{{more}}</view>
		<view class="content" v-else>{{nodata}}</view>
	</view>
</template>

<script>
	export default {
		name:"load-more-item",
		data() {
			return {
				more: '加载中...',
				nodata: '没有更多数据了'
			}
		},
		methods: {
			
		},
		props: {
			hasMoreData: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style>
	.load-more {
		width: 100%;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.content {
		width: 100%;
		height: 100%;
		color: #999999;
		text-align: center;
	}
</style>
