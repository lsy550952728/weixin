Page({
  tz: function () {
    wx.navigateTo({
      url: '../welcome/tz'
    })
  },
  tiaozhuan: function () {
    wx.navigateTo({
      url: '../tiao/tiao'
    })
  },
  game:function(){
    wx.navigateTo({
      url: '../game/game',
    })
  },
  click:function(event){
    var num=event.target.id
    console.log(event.target.id)
  }

  })