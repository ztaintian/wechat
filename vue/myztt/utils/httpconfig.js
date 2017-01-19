/*
* @Author: 新思
* @Date:   2017-01-19 10:47:09
* @Last Modified by:   新思
* @Last Modified time: 2017-01-19 11:10:39
*/

'use strict';
import VueResource from 'vue-resource' //xj-插件
import Vue from 'vue' //xj-插件
import {isPrd,isString} from './index' //xj-新建
import {Msg,Loading} from 'components' //xj-饿了么插件

Vue.use(VueResource)

const TIMEOUT=30000
function _timeout(req,next){
	if(req.timeout===0){
		next()
		return
	}
	const timer = setTimeout( () => {
		req.abort()
		Loading.close()
		Msg.toast('请求超时')
	},req.timeout || TIMEOUT)

	next((response)=>{
		clearTimeout(timer)
	})
}

Vue.http.interceptors[1]=_timeout

//拦截
Vue.http.interceptors.push((request,next) =>{
	function errorAlert(response){
		Loading.close()
		let msg
		if(response.body && response.body.msg){
			msg = response.body.msg
		}

		Msg.alert(msg)
	}

	function checkError (response) {
		if(response.status>=500 && response.status<600){
			errorAlert(response)
		}else if(response.status===200 && response.body){
			Loading.close()
			if(isString(response.body)){
				response.body = JSON.parse(response.body)
			}
		}else if(response.status === 404){
			errorAlert({
				body:{
					msg:'服务地址错误：404'
				}
			})
		}
	}
	next(checkError)
})

function getURL (url){
	Loading.show()
	if(typeof url ==='object'){
		//默认json，设置format：true，则为表单
		if(url.format){
			Vue.http.options.emulateJSON = true;//表单形式
		}else{
			Vue.http.options.emulateHTTP=true;//json形式
		}
		url= url.url
	}else{
		Vue.http.options.emulateJSON = false; //json形式
	}

	return url
}

Vue.use((vue)=>{
	vue.getUrl =getURL
})