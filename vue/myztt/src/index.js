/*
* @Author: 新思
* @Date:   2017-01-19 11:27:10
* @Last Modified by:   新思
* @Last Modified time: 2017-01-19 11:30:13
*/

'use strict';
import configApp from './main'
import Router from './routers'
import stores from './vuex'
const cfg = {
	stores:stores,
	router:{
		router:[...Routers]
	}
}
configApp(cfg)

