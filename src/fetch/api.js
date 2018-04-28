import axios from 'axios'
import qs from 'qs'

import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 20000;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://vueh5.xueshanshan.top/api';

//POST传参序列化
//axios.interceptors.request.use((config) => {
//  if(config.method  === 'post'){
//      config.data = qs.stringify(config.data);
//  }
//  return config;
//},(error) =>{
//   _.toast("错误的传参", 'fail');
//  return Promise.reject(error);
//});

//返回状态判断
//axios.interceptors.response.use((res) =>{
//  if(!res.data.success){
//         _.toast(res.data.msg);
//      return Promise.reject(res);
//  }
//  return res;
//}, (error) => {
//  _.toast("网络异常", 'fail');
//  return Promise.reject(error);
//});

export function fetch(url, params) {
	return new Promise((resolve, reject) => {
		axios({
				method: 'get',
				url: url+'?'+qs.stringify(params),
			})
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err);
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export default {
	/**
	 * 首屏数据
	 */
	getIndexData(params) {
		return fetch('/index.json', params)
	},

	/**
	 * 商品流数据
	 */
	getGoodsList(params) {
		return fetch('/goodsList.json', params)
	},
	/**
	 * 获取商品详数据
	 */
	getDetail(params) {
		return fetch('/detail.json', params)
	},

	/**
	 * 获取商品图片，用于分享
	 */
	getPrdCodeImgUrl(params) {
		return fetch('/prd-img.json', params)
	},
	/**
	 * 获取商品 淘口令
	 */
	getPrdCode(params) {
		return fetch('/code,json', params)
	},
	/**
	 * 搜索商品列表
	 */
	getSearchPrd(params) {
		return fetch('/search.json', params)
	},
	/**
	 * 分享相关
	 */
	getShareInfo(params) {
		return fetch('/getSignatureJson', params)
	},

}