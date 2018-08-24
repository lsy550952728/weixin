var status = true;
Page({
      
  /**
   * 页面的初始数据
   */
  data: {
    flag:0,
    score: 0,
    point:0,
    status: status,
    showDiceTemplateArray: [], // 用于存储显示哪些骰子模版
    showDiceArray: [0], // 用于存储随机数
    gaming: false, //判断是否在游戏中
    timeArray: [],
    
  },
  toastShow: function (event) {
    console.log("触发了点击事件，弹出toast")
    status = false
    var point = this.data.flag;
    console.log("point的值");
    console.log(point)
    if (point == '0') {
      console.log("判断0");
      point=point-1+2;
      var tscore = this.data.score + point;
      this.setData({
        score: tscore
      })
    }
    else if (point == '1') {
      console.log("判断1");
      point = point-1+2;
      var tscore = this.data.score + point;
      this.setData({
        score: tscore
      })
    }
    else if (point == '2') {
      console.log("判断2");
      point = point-1+2;
      var tscore = this.data.score + point;
      this.setData({
        score: tscore
      })
    }
    else if (point == '3') {
      console.log("判断3");
      point = point-1+2;
      var tscore = this.data.score + point;
      this.setData({
        score: tscore
      })
    }
    else if (point == '4') {
      console.log("判断4");
      point = point-1+2;
      var tscore = this.data.score + point;
      this.setData({
        score: tscore
      })
    }
    else if (point == '5') {
      console.log("判断5");
      point = point-1+2;
      var tscore = this.data.score + point;
      this.setData({
        score: tscore
      })
    }
    this.setData({ status: status })　　　　//setData方法可以建立新的data属性，从而起到跟视图实时同步的效果
  },
  toastHide: function (event) {
    console.log("触发bindchange，隐藏toast")
    status = true
    this.setData({ status: status })
  },

    isHidden: function () {
      var templateNameArray = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
      var showDiceArrayTemp = [];
      this.data.showDiceArray.forEach(function (item) {
        showDiceArrayTemp.push(templateNameArray[item]);
      });
      
      this.setData({
        showDiceTemplateArray: showDiceArrayTemp
      });
    },

  getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  changeDice: function (event) {
    var that = this;
    
   
    var t1 = setInterval(function () {
      
      that.data.showDiceArray = [that.getRandomInt(0, 5)];
      that.setData({
        flag:that.data.showDiceArray
      })
      that.isHidden();
    
    }, 100);
    var t2 = setTimeout(function () {
      clearInterval(t1);
      
      // 设置没在游戏
      that.setData({
        gaming: false
      });
    }, 2000);
    
    
    
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