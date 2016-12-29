Page({
    data:{
        set:"保存本地数据缓存",
        get:"获取本地数据缓存",
        title:"改变窗口标题"
    },
    // 保存数据
    setDate:function(){
        wx.setStorage({
            key:"key",
            data:'我是tabBar页面储存数据'
        });
    },
    // 获得保存数据
    getDate:function(){
        wx.getStorage({
            key:"key",
            success:function(e){
                console.log(e.data)
            }
        });
    },
    // 设置标题
    setTitle:function(){
        wx.setNavigationBarTitle({
            title:"我是改变的标题",
            success:function(){
                wx.hideNavigationBarLoading();//隐藏导航条加载动画。
            },
            fail:function(){
                wx.showNavigationBarLoading();//在当前页面显示导航条加载动画。
            }
        });
        
    }
})