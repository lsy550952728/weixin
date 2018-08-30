var status = true;
Page({
      
  /**
   * 页面的初始数据
   */
  data: {
    only:0,   //避免最终结果重复累计
    flag:0,  //用于判定当前骰子的点数
    score: 0,  //用于传到前端中的最终得分
    point:0,  //点数
    status: status,
    showDiceTemplateArray: [], // 用于存储显示哪些骰子模版
    showDiceArray: [0], // 用于存储随机数
    gaming: false, //判断是否在游戏中
    timeArray: [],
    
  },
  toastShow: function (event) {
    console.log("触发了点击事件，弹出toast")
    status = false
    var tonly=this.data.only;
    console.log(tonly);
    if(tonly=='1'){  //当骰子被投掷时，only才等于1，则记下此次的值，并将only+1，当only为其他数值时，直接显示结果，避免结果累加
    var point = this.data.flag;
    console.log("point的值");
    console.log(point)
    if (point == '0') {
      console.log("判断0");
      point=point-1+2; // 先-1， 可进行正常的加减运算
      console.log(point);
      var tscore = this.data.score + point;
      console.log("tscore的值");
      console.log(tscore);
      this.setData({
        score: tscore
      })
    }
    else if (point == '1') {
      console.log("判断1");
      point = point-1+2;
      console.log(point);
      var tscore = this.data.score + point;
      console.log("tscore的值");
      console.log(tscore);
      this.setData({
        score: tscore
      })
    }
    else if (point == '2') {
      console.log("判断2");
      point = point-1+2;
      console.log(point);
      var tscore = this.data.score + point;
      console.log("tscore的值");
      console.log(tscore);
      this.setData({
        score: tscore
      })
    }
    else if (point == '3') {
      console.log("判断3");
      point = point-1+2;
      console.log(point);
      var tscore = this.data.score + point;
      console.log("tscore的值");
      console.log(tscore);
      this.setData({
        score: tscore
      })
    }
    else if (point == '4') {
      console.log("判断4");
      point = point-1+2;
      console.log(point);
      var tscore = this.data.score + point;
      console.log("tscore的值");
      console.log(tscore);
      this.setData({
        score: tscore
      })
    }
    else if (point == '5') {
      console.log("判断5");
      point = point-1+2;
      console.log(point);
      var tscore = this.data.score + point;
      console.log("tscore的值");
      console.log(tscore);
      this.setData({
        score: tscore
      })
    }
    tonly=tonly+1;
    this.setData({only:tonly++})
  }
    else {
      var tscore=this.data.score;
      this.setData({
        score: tscore
      })}
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
        flag:that.data.showDiceArray,
        only:1
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