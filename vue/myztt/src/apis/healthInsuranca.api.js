/*
* @Author: 新思
* @Date:   2017-01-19 13:45:22
* @Last Modified by:   新思
* @Last Modified time: 2017-01-19 13:49:53
*/

'use strict';

import Vue from 'vue'

export function getAhProductDetail (data) {
	return Vue.http.post(Vue.getUrl({
		url:'/icp-yl-dmz/product/getAhProductDetail.do',
		format:true
	}),data)
}

export function policyHealthRecord(data){
	return Vue.http.post(Vue.getUrl('./icp_yl_dmz/policy/policyHealthRecord.do'),data)
}