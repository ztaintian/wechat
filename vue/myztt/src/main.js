// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router' //新加-n
import Vuex from 'vuex' //xj-n
import createLogger from 'vuex/dist/logger' //xj-n 日志插件
import FastClick from 'fastclick'//xj-n 插件
import '../styles/common.less'//xj
import '../styles/border.less'//xj
import '..styles/reset.css'//xj
import App from './App.vue'//xj
import httpconfig from '../utils/httpconfig'//xj-http
import 'utils/fontset'//xj-根元素rem设置
import {Loading} from 'components'//xj-element组件
import {isFunction,isPrd} from 'utils'//xj
/* eslint-disable no-new */
Vue.use(Vuex)
//state日志
const logger = createLogger({
	collapseed:false,
	transform(state){
		return state
	},
	mutationTransformer (mutation) {
		return mutation.type
	}
})

export default function ({router={},stores}){
	Vue.use(VueRouter)
	FastClick.attach(document.body)
	const Router = new VueRouter({
		mode:'hash',
		//base:_dirname,
		routes:router.routes,//router路由，routers路线
	})
	//钩子
	Router.beforeEach((to,from,next)=>{
		if(!!to.meta.title){
			document.title=to.meta.title
		}
		next()
	})

	if(router.beforeEach){
		router.beforeEach.forEach(f=>{
			if(isFunction(f)){
				Router.beforeEach(f)
			}
		})
	}

	const store = new Vuex.Store({
		modules:{
			...stores
		},
		strict:process.env.NODE_ENV !== 'production',
		plugins:isPrd()?[]:[logger]
	})

	App.store = store
	new Vue ({
		router:Router,
		render:h=>(App)
	}).$mount('#app')
	window.router = Router
}




//源代码
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
