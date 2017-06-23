const koa = require('koa');
const app = new koa();
const port = '1534';
const wechat = require('co-wechat');
let appid = 'wx956adf43bb8036e4';
let appsecret = '34497349bae037aee8216dc3a8e9b497';
var API = require('wechat-api');


// { ToUserName: 'gh_bc5c9003bbd3',
//   FromUserName: 'of7tl0VyGkPblXAkZwQ5Q-Bk2OlQ',
//   CreateTime: '1498144185',
//   MsgType: 'event',
//   Event: 'subscribe', //订阅
//   EventKey: '' }

var api = new API(appid, appsecret, function* () {
  // 传入一个获取全局token的方法
  var txt = yield fs.readFile('access_token.txt', 'utf8');
  return JSON.parse(txt);
}, function* (token) {
  // 请将token存储到全局，跨进程、跨机器级别的全局，比如写到数据库、redis等
  // 这样才能在cluster模式及多机情况下使用，以下为写入到文件的示例
  yield fs.writeFile('access_token.txt', JSON.stringify(token));
});
// var api = new API('wx956adf43bb8036e4', '34497349bae037aee8216dc3a8e9b497', async function () {
//   // 传入一个获取全局token的方法
//   var txt = await fs.readFile('access_token.txt', 'utf8');
//   return JSON.parse(txt);
// }, async function (token) {
//   // 请将token存储到全局，跨进程、跨机器级别的全局，比如写到数据库、redis等
//   // 这样才能在cluster模式及多机情况下使用，以下为写入到文件的示例
//   await fs.writeFile('access_token.txt', JSON.stringify(token));
// });
let config = {
  token: 'tiantiansiqi',
  appid: 'wx956adf43bb8036e4',
  encodingAESKey: 'cp48FaYSPbzcPMTaAUmoGxR25b7Cs5pkc8paBIzUW62',
  checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};
app.use(wechat(config).middleware(async (message) => {
    console.log(message)
	  if(message.MsgType === 'text'){
	  if (message.Content === '朱田田') {
	    // 回复文本
	    return {
	    	type:'text',
	    	content:'朱田田公众号'
	    }
	  } else {
	    // 图文回复
	    return {
        title: '图片',
        description: '这是图片',
        picurl: 'http://zttwechat.duapp.com/images/0.jpg',
        url: 'http://zttwechat.duapp.com/index.html'
	    }
	  }
  }else if(message.MsgType === 'voice'){
    return [{
	    title: '语音',
	    description: '这是语音',
	    picurl: 'http://zttwechat.duapp.com/images/1.jpg',
	    url: 'http://zttwechat.duapp.com/voice.html'
    }]
  }else{
    return [{
      title: '错了',
      description: '错了',
      picurl: 'http://zttwechat.duapp.com/images/1.jpg',
      url: 'http://zttwechat.duapp.com/voice.html'
    }]
  }
}));

app.listen(port);
console.log('port'+port)