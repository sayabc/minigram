// 实例化app
const app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  // 页面的初始数据
  data: {
    userInfo: null,
    toView: 'red',
    scrollTop: 100    
  },
  onLoad: function (options) {
    console.log(options)
    if (app.globalData.info) {
      console.log(123)
    } else {
      app.infoReady = res => {
        console.log(234)
      }
    }
  },
  onReady: function () {
    // this.handleJump()
  },
  // 分享函数
  onShareAppMessage: function(res) {
    if (res.from === 'menu') {
      return {
        title: '自定义转发标题来源于菜单',
        path: '/index/index',
        success: function (res) {
          // 转发成功
        },
        fail: function (res) {
          // 转发失败
        }
      }
    } else if (res.from === 'button'){
      // 来自页面内转发按钮
      console.log(res.target)
      return {
        title: '自定义转发标题来源于button',
        path: '/page/user?id=123',
        success: function (res) {
          // 转发成功
        },
        fail: function (res) {
          // 转发失败
        }
      }
    }
  },
  // 事件处理函数
  handleJump: function() {
    let url = '/pages/welcome/welcome'
    url &&
    wx.navigateTo({
      url,
    })
  },
  onGotUserInfo: function(e){
    console.log('e',e)
    const { userInfo } = e.detail
    this.setData({
      userInfo: userInfo
    })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }  
})