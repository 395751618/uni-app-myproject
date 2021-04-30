import Vue from 'vue'

Vue.filter("formatDate",(data) => {
	const nDate = new Date(data);
	const year = nDate.getFullYear();
	const month = nDate.getMonth() + 1;
	const day = nDate.getDay();
	return year + '-' + month + '-' + day
})

Vue.filter("formatThumb",(array) => {
	if (null == array) {
		return null
	}
	if (array.length > 0) {
		let item = array[0]
		return item.thumb
	}
	return null
})