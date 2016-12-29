//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '第一个微信小程序开发页面',
    userInfo: {},
    lists:[1,2,3,4],
    condition:true,
    objectArray: [
      {id: 5, unique: 'unique_5'},
      {id: 4, unique: 'unique_4'},
      {id: 3, unique: 'unique_3'},
      {id: 2, unique: 'unique_2'},
      {id: 1, unique: 'unique_1'},
      {id: 0, unique: 'unique_0'},
    ],
    numberArray: [1, 2, 3, 4]  
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewHome: function() {
    console.log("跳到主页")
    wx.navigateTo({
      url: '../home/home'
    })
  },
  bindtabBar:function() {
    wx.navigateTo({
      url: '../tabBar/tabBar'
    })
  },
  tapName:function(event){
    console.log(event)
  },
  switch1Change:function(event){
    console.log(event.detail.value)
  },
  getData:function(){
  try{
    var value = wx.getStorageSync('key');
    console.log(value);
    if(value){
      // console.log('有值')
    }  
   }catch(e){
     console.log(111)
   }

  },
  getSystem:function(){
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
  },
  getPhone:function(){
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
