// pages/Sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { name: "手机" },
      { name: "服务器" },
      { name: "笔记本" },
      { name: "平板电脑" },
      { name: "智能穿戴" },
      { name: "华为配件" },
      { name: "其他配件" },
      { name: "智能家居" }
    ],
    phones: {
      proName: "手机",
      tinyImg: "../../assets/shopCar.png"
    },
    ph_items: [
      {
        id: 1,
        name: '华为 P21 Pro',
        src: "../../assets/2-list_03.png",
        price: 4988
      },
      {
        id: 2,
        name: '华为 P22 Pro',
        src: "../../assets/2-list_07.png",
        price: 4988
      },
      {
        id: 3,
        name: '华为 P23 Pro',
        src: "../../assets/2-list_03.png",
        price: 4988
      },
      {
        id: 4,
        name: '华为 P24 Pro',
        src: "../../assets/2-list_03.png",
        price: 4988
      },
      {
        id: 5,
        name: '华为 P25 Pro',
        src: "../../assets/2-list_07.png",
        price: 4988
      },
      {
        id: 6,
        name: '华为 P26 Pro',
        src: "../../assets/2-list_03.png",
        price: 4988
      }
    ],
    laps: {
      proName: "电脑",
      tinyImg: "../../assets/shopCar.png"
    },
    la_items: [
      {
        id: 7,
        name: 'RH2288 V3',
        src: "../../assets/2-list_11.png",
        price: 4988
      },
      {
        id: 8,
        name: 'RH2288 V4',
        src: "../../assets/2-list_13.png",
        price: 4988
      },
      {
        id: 9,
        name: 'RH2288 V5',
        src: "../../assets/2-list_11.png",
        price: 4988
      }
    ],
    servers: {
      proName: "我找不到图的服务器",
      tinyImg: "../../assets/shopCar.png"
    },
    se_items: [
      {
        id: 1,
        name: '华为 P21 Pro',
        src: "../../assets/2-list_03.png",
        price: 4988
      },
      {
        id: 2,
        name: '华为 P22 Pro',
        src: "../../assets/2-list_07.png",
        price: 4988
      },
      {
        id: 3,
        name: '华为 P23 Pro',
        src: "../../assets/2-list_03.png",
        price: 4988
      },
      {
        id: 4,
        name: '华为 P24 Pro',
        src: "../../assets/2-list_03.png",
        price: 4988
      },
      {
        id: 5,
        name: '华为 P25 Pro',
        src: "../../assets/2-list_07.png",
        price: 4988
      },
      {
        id: 6,
        name: '华为 P26 Pro',
        src: "../../assets/2-list_03.png",
        price: 4988
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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