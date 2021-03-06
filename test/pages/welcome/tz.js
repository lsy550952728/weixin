Page({
  onReady: function () {
    // 页面渲染完成
    // 实例化一个动画
    var that = this;
    var i = 0
    var ii = 0

    var animationData = wx.createAnimation({
      duration: 1000, // 默认为400     动画持续时间，单位ms
      timingFunction: 'ease-in-out',
      //transformOrigin: '4px 91px'
    });

    var animationCloudData = wx.createAnimation({
      duration: 1000, // 默认为400     动画持续时间，单位ms
      timingFunction: 'ease-in-out',
      //transformOrigin: '4px 91px'
    });

    // 顺序执行，当已经执行完上面的代码就会开启定时器
    // 循环执行代码
    //dotAnFun = setInterval(function () {});    
    /*setInterval(function () {
      // 动画脚本定义
      //animationData.rotate(6 * (++i)).step()
      //animationData.scale(2, 2).rotate(45).step().scale(1, 1).step();
      animationData.translateY(10).step({ duration: 500 }).translateY(-10).step({ duration: 500 });
      // 更新数据
      that.setData({
        // 导出动画示例
        animationData: animationData.export(),
        //animationCloudData: animationCloudData.export(),        
      })
      ++i;
      console.log(i);
    }.bind(that), 2000);//循环时间 这里1000是1秒
    */


    //动画的脚本定义必须每次都重新生成，不能放在循环外
    animationCloudData.translateX(200).step({ duration: 5000 }).translateX(0).step({ duration: 5000 });

    // 更新数据
    that.setData({
      // 导出动画示例
      //animationData: animationData.export(),
      animationCloudData: animationCloudData.export(),
    })

    setInterval(function () {
      //动画的脚本定义必须每次都重新生成，不能放在循环外
      animationCloudData.translateX(300).step({ duration: 5000 }).translateX(-400).step({ duration: 5000 });

      // 更新数据
      that.setData({
        // 导出动画示例
        //animationData: animationData.export(),
        animationCloudData: animationCloudData.export(),
      })
      ++ii;
      console.log(ii);

    }.bind(that), 10000);//3000这里的设置如果小于动画step的持续时间的话会导致执行一半后出错

  }

})