// pages/welcome/tz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    screenData: "0",
    id1: "AC",
    id2: "+/-",
    id3: "%",
    id4: "÷",
    id5: "7",
    id6: "8",
    id7: "9",
    id8: "×",
    id9: "4",
    id10: "5",
    id11: "6",
    id12: "-",
    id13: "1",
    id14: "2",
    id15: "3",
    id16: "+",
    id17: "0",
    id18: ".",
    id19: "="
    
  },

  click:function(event){
      console.log(event);
      var data=event.target.id
    console.log(event.target.id);
    this.setData({
      screenData: data
    })
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