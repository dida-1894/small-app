// pages/Mine/mine.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    deals: {
      title: "我的订单",
      servers: [
        {
          name: "待付款",
          src: "../../assets/16.png"
        },
        {
          name: "代发货",
          src: "../../assets/17.png"
        },
        {
          name: "待收货",
          src: "../../assets/18.png"
        },
        {
          name: "已完成",
          src: "../../assets/19.png"
        },
        {
          name: "收货",
          src: "../../assets/20.png"
        },
      ]
    },
    list: [
      { 
        name: "我的拼团",
        src: "../../assets/21.png"
      },
      {
        name: "我的卡券",
        src: "../../assets/22.png"
      },
      {
        name: "我的优惠卷",
        src: "../../assets/22.png"
      },
      {
        name: "领券中心",
        src: "../../assets/24.png"
      },
      {
        name: "我的收藏",
        src: "../../assets/25.png"
      },
      {
        name: "在线客服",
        src: "../../assets/26.png"
      },
      {
        name: "联系我们",
        src: "../../assets/27.png"
      },
      {
        name: "服务中心",
        src: "../../assets/28.png"
      },
      {
        name: "关于我们",
        src: "../../assets/29.png"
      },
      {
        name: "我的预约",
        src: "../../assets/30.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})