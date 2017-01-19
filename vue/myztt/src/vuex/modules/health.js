/*
* @Author: 新思
* @Date:   2017-01-19 11:35:19
* @Last Modified by:   新思
* @Last Modified time: 2017-01-19 14:06:32
*/

'use strict';
import * as healthMu from '../mutationType/health.mutation.types'
import * as healthAc from '../actionType/health.action.types'

export default {
	//状态
	state: {
		newHeight:'111'
		newHeight:'555'
	},
	//改变状态（同步）
	mutation: {
		//有效期时间戳
		[healthMu.productDetatil](state,data){
			state.newHeight = state.newHeight+data;
		},
		[healthMu.setPrice](state,data){
			state.newHight=data;
		}
	},
	action:{
		//询问价格
		async [healthAc.personProducts]({commit},data){
			commit(healthMu.setPrice,await data);
		},		
		async [healthAc.personProducts]({commit},data){
			commit(healthMu.setPrice,await policyInquiry(data).then(
				function({body}){
					if(body.resultCode == '00000'){
						return body
					}else {
						Msg.toast(body.resultCode)
					}
				}
			))
		}
		
	}
}