
const getListThumbUrl = function(array) {
	if (null == array) {
		return null
	}
	if (array.length > 0) {
		let item = array[0]
		return item.thumb
	}
	return null
}

export default {
	getListThumbUrl
}