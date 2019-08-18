/* 常用的js方法 */
module.exports = {
	test: function(){
		console.log("text")
	},
	// json:将json格式的参数转换为url的参数模式
	json2url : function (json){
		var params = Object.keys(json).map(function (key) {
		    // body...
		    return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
		}).join("&");
		return params;
	},
	// boole: 将一个value全部为布尔类型的对象，做逻辑与运算
	booles2Boole: function(obj){
		var demo = {
			a: true,
			b: true,
			c: true
		};
		let arr = Object.values(obj)
		var res = arr.reduce((m, o) => m + o) === arr.length;
		return res
	}
}