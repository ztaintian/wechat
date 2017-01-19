/*
* @Author: 新思
* @Date:   2017-01-19 11:51:17
* @Last Modified by:   新思
* @Last Modified time: 2017-01-19 13:41:39
*/

'use strict';
import healthIndex from '../views/healthInsurance/IndexView.vue'

export default [{
	path:'/healthInsurance/IndexView',
	name:'healthIndex',
	meta: {
		title:'防癌医疗保险',
	},
	component: healthIndex
},{
	path:'/insureDetail/customerInfo',
	name:'customerInfo',
	meta:{
		title:'',
	},
	component:resolve => require(['../views/insureDetail/customerInfo.vue'],resolve)

}]