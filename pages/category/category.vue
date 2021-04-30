<template>
	<view class="parent">
		<category-bar class="top"></category-bar>
		<scroll-view class="bottom" scroll-y="true">
			<category-item v-for="(item, index) in listings" :key="index" :item="item"></category-item>
			<load-more-item :hasMoreData="hasMoreData"></load-more-item>
		</scroll-view>
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
	.parent {
		
	}
	.top {
		
	}
	.bottom {
		
	}
</style>
