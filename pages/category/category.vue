<template>
	<view>
		<category-bar class="top"></category-bar>
		<view class="list-item" v-for="(item, index) in listings" :key="index">
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
		<load-more-item :hasMoreData="hasMoreData"></load-more-item>
	</view>
</template>

<script>
	import helper from '../../common/helper/helper.js'
	export default {
		data() {
			return {
				skip: 0,
				take: 10,
				hasMoreData: true,
				listings: []
			}
		},
		onLoad: function (options) {
			uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
		    this.listingList(true)
		},
		onReachBottom() {
			if (this.hasMoreData) {
				this.skip += 1
				this.listingList(false)
			}
		},
		methods: {
			listingList(isRefresh) {
				this.$http.apis.listingList({"skip": this.skip, "take": this.take}).then((res) => {
					uni.stopPullDownRefresh()
					if (res.code == 1) {
						this.hasMoreData = (res.data.length >= this.take)
						if (res.data.length == 0) {
							
						} else {
							this.listings = this.listings.concat(res.data)
						}
					} else {
						
					}
				})
			}
		},
		filters: {
			formatABC(array) {
				return helper.getListThumbUrl(array)
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
