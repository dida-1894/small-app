
// pages/ShoppingCar/shoppingCar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deal: {
      title: "专属优惠券",
      src: "../../assets/1-index_10.gif"
    },
    sale: {
      msg:"我也看不清那张截图像素太太太渣了",
      items:[
        {
          id: 1,
          name: '华为 P21 Pro',
          src: "../../assets/2-list_03.png",
          price: 4988
        }
      ]
    },
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
    laps:{
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
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
 

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