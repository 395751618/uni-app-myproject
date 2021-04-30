<template>
	<view class="home">
		<swiper class="banners" indicator-dots circular v-show="showSwiper">
			<swiper-item v-for="(item, index) in banners" :key="index">
				<image src="../../static/test/4.jpg"></image>
			</swiper-item>
		</swiper>
		<view class="lastest" v-show="showLastest">
			<view class="title">推荐商品</view>
			<scroll-view class="scroll-view" scroll-x="true" scroll-left="100%">
			    <view class="lastest-item-item" v-for="(item, index) in latests" :key="index">
					<image class="icon" src="../../static/test/1.jpeg" mode="scaleToFill"></image>
					<view>货源地：</view>
					<view>产品重量：</view>
					<view>室内存放：</view>
					<view>最早发货日期：</view>
				</view>
			</scroll-view>
			
		</view>
		<view class="recent-deal" v-show="showRecentDeal">
			<view class="title">即时成交</view>
			<view class="recent-deal-list" v-for="(item, index) in recentDeals" :key="index">
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
		</view>
		<view class="test">
			<text>{{i18n.statistics}}</text>
			<text>{{$t('global.price')}}</text>
			<text>{{$t('index.total_person',{msg1:'1000',msg2:'60'})}}</text>
			<text>{{language.i18nMsg().global.price}}</text>
			<text>{{language.i18nMsg().home.array[0]}}</text>
			<text>{{language.i18nMsg().home.array[1]}}</text>
			<text>{{language.locale().home.array[2]}}</text>
			<text>{{language.locale().home.message}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showSwiper: false,
				showRecentDeal: false,
				showLastest: false,
				banners: [],
				recentDeals: [],
				latests: [{'name': 'LDPE-Blue-Film', 'price': null, 'localeName': 'LDPE-蓝色-膜'},
				{'name': 'LDPE-Blue-Film', 'price': null, 'localeName': 'LDPE-蓝色-膜'}]
			}
		},
		onLoad() {
			this.banner()
			this.recentDeal()
			this.latest()
		},
		methods: {
			banner: function() {
				this.$http.getData('banner', {}).then((res) => {
					if (res.code == 1) {
						// if (res.data.length == 0) {
						// 	this.banners = [{'url': 'https://images.weserv.nl/?url=pic3.zhimg.com/v2-9f8bb937fd1bca9f07bda1c5934acaca.jpg'}]
						// } else {
						// 	this.banners = res.data
						// }
						this.showSwiper = (this.banners.length > 0 ? true : false)
					} else {
						
					}
				})
			},
			recentDeal: function() {
				this.$http.apis.recentDeal().then((res) => {
					if (res.code == 1) {
						if (res.data.length == 0) {
							
						} else {
							this.recentDeals = res.data
						}
						this.showRecentDeal = (this.recentDeals.length > 0 ? true : false)
						console.log(this.recentDeals)
					} else {
						
					}
				})
			},
			latest: function() {
				this.$http.apis.latest().then((res) => {
					if (res.code == 1) {
						if (res.data.length == 0) {
							
						} else {
							this.latests = res.data
						}
						this.showLastest = (this.latests.length > 0 ? true : false)
					} else {
						
					}
				})
			},
			getRecentDealItemWidth: function() {
				return $xx-screen-width - $xx-spaceing-hmargin*4
			}
		},
		computed: {
			i18n () {
				return this.$t('home')  
			},
			language() {
				return this.$i18nMsg
			}
		},
		onPullDownRefresh() {
			
		},
		onReachBottom() {
			
		}
	}
</script>

<style lang="scss">
	.home {
		background-color: #2C405A;
		swiper {
			width: 750rpx;
			height: 375rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.lastest {
		.title {
			background-color: #FFFFFF;
			width: 100%;
			text-align: center;
			letter-spacing: 10px;
			padding-top: 5px;
			padding-bottom: 5px;
		}
		.scroll-view_H {
		    white-space: nowrap;
		    .lastest-item-item {
		        display: inline-block;
		        width: 100%;
		        height: 100px;
		    }    
		}
		.scroll-view {
			background-color: #2C405A;
			white-space: nowrap;
			.lastest-item-item {
				display: inline-block;
				height: 100%;
				background-color: #DCDFE6;
				width: 300rpx;
				margin-top: 15px;
				margin-bottom: 15px;
				margin-left: 20px;
				flex-direction: column;
				.icon {
					width: 100%;
					height: 200rpx;
					border-radius: 15px;
					margin-bottom: 5px;
				}
			}
		}
	}
	.recent-deal {
		background-color: #DCDFE6;
		width: 750rpx;
		.title {
			background-color: #FFFFFF;
			width: 100%;
			text-align: center;
			letter-spacing: 10px;
			padding-top: 5px;
			padding-bottom: 5px;
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
		}
	}
	
</style>
