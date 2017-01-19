/*
* @Author: 新思
* @Date:   2017-01-19 11:43:35
* @Last Modified by:   新思
* @Last Modified time: 2017-01-19 11:48:03
*/

'use strict';
import Index from  './index.route'
import {isPrd} from '../../utils'
import healthIn from './healthIn.route'
import service from './service.route'

function getIndex (){
	if(isPrd()){
		return []
	} else {
		return Index
	}
}

export default [
	...getIndex(),
	...healthIn,
	...service
]