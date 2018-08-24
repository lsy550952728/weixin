Page({
  data:{
    msg:"jintian",
    
  },
  abc:function(){
    
    var tmsg = this.data.msg.toString();
    console.log(tmsg);
    var data = this.data.msg;
    console.log(data);
    var testdata = data.substring(1,3);
    this.setData({ tdata: data.substring(1, 3), 
                   })
    console.log(testdata);
    console.log(tmsg);
  },
  cba:function(){
    
    this.setData({ 
      
      tdata: ''})
  },
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