const koa = require('koa');
const app = new koa();
const wechat = require('co-wechat');
const port = '18080';
let config = {
  token: 'tiantiansiqi',
  appid: 'wx956adf43bb8036e4',
  encodingAESKey: 'cp48FaYSPbzcPMTaAUmoGxR25b7Cs5pkc8paBIzUW62',
  checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};
app.use(wechat(config).middleware(async (message) => {
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