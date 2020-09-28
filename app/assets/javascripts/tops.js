$(function () {
  var root = document.documentElement;
  var i = 0;

  var bgcolor = $(':root').css("--bg_color");
  var fcolor = $(':root').css("--f_color");
  var efcolor = $(':root').css("--ef_color");
  var efcolor2 = $(':root').css("--ef_color2");
  bg_color = `"${bgcolor.trim()}"`;
  f_color = `"${fcolor.trim()}"`;
  ef_color = `"${efcolor.trim()}"`;
  ef_color2 = `"${efcolor2.trim()}"`;
  
  $(document).on('click','.darkmode',function () {
    if(i == 0){
      $('.darkmode_switch_button').addClass('on');
      $(":root").css({ '--bg_color' : 'rgb(17, 17, 17)'} );
      $(".darkmode_name").text("LIGHT MODE");
        console.log(i);
      i++
    }else{
      $('.darkmode_switch_button').removeClass('on');
      $(":root").css({ '--bg_color' : 'rgb(0, 187, 255)' } );
      $(".darkmode_name").text("DARK MODE");
      console.log(i);
      i--
    }
  });
    const controller = new ScrollMagic.Controller()
    // アニメーションスピード
    const speed = 0.3
    // タイトルとスキルボックス
    var tween = TweenMax.staggerTo('.top_main_upper',speed,{
      y: '-80px',
    })
    var scene = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_history',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 0,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'タイトル&スキルボックス' })
      .addTo(controller)

////【-- HISTORY --】
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_history',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 207,
      reverse: true
    })
      .setPin('.top_main_middle_history')
      .addIndicators({ name: 'ヒストリー' })
      .addTo(controller)

    var tween = TweenMax.staggerTo('.top_main_middle_history h2',speed,{
        opacity: 0
    })
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_history',
      triggerHook: 'onLeave',
      duration: 100,
      offset: 707,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'ヒストリー透過' })
      .addTo(controller)

////////////////////////////
//////【-- 高校生活 --】//////
////////////////////////////

    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_history',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 2227,
      reverse: true
    })
      .setPin('.history_box1')
      .addIndicators({ name: 'ヒストリー１' })
      .addTo(controller)

    var tween = TweenMax.staggerTo('.history_box1',speed,{
      opacity: 0
    })
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 120,
      offset: 130,
      reverse: true
    })
    .setTween(tween)
    .addIndicators({ name: 'box1透過' })
    .addTo(controller)

    //エンカウント楽器
    var tween = TweenMax.staggerTo('.skill_triangle,.skill_cymb,.skill_drum',speed,{
      display:'block',
      opacity: 1,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '楽器' })
      .addTo(controller)

  ////右__発光__1st
    var tween = TweenMax.staggerTo('.portfolio_right_o',speed,{
      repeat: 1,
      yoyo: true,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset:290,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)
    //右__エネルギー弾
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      backgroundColor: ef_color,
      opacity: 1,
      scale: 0.3,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 160,
      offset:290,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)
    //右__エネルギー弾__飛ばし
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      x: '-98px',
      y: '145px',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 490,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'beam1' })
      .addTo(controller)
    //右__エネルギー弾__戻し__カラー
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      opacity: 0,
      scale: 1,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 1,
      offset:690,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)
    //右__エネルギー弾__戻し__座標
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      x: '0',
      y: '0',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 1,
      offset:691,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)

  ////右__発光__2nd
    var tween = TweenMax.staggerTo('.portfolio_right_o',speed,{
      repeat: 1,
      yoyo: true,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset:700,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)
    //右__エネルギー弾
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      backgroundColor: ef_color,
      opacity: 1,
      scale: 0.3,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 160,
      offset:700,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)
    //右__エネルギー弾__飛ばし
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      x: '-163px',
      y: '145px',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 900,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'beam1' })
      .addTo(controller)
    //右__エネルギー弾__戻し__カラー
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      opacity: 0,
      scale: 1,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 1,
      offset:1200,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)
    //右__エネルギー弾__戻し__座標
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      x: '0',
      y: '0',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 1,
      offset:1201,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)

    ////右__発光__3rd
    var tween = TweenMax.staggerTo('.portfolio_right_o',speed,{
      repeat: 1,
      yoyo: true,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset:1210,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)
    //右__エネルギー弾
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      backgroundColor: ef_color,
      opacity: 1,
      scale: 0.3,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 160,
      offset:1210,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)
    //右__エネルギー弾__飛ばし
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      x: '-228px',
      y: '145px',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1420,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'beam1' })
      .addTo(controller)
    //右__エネルギー弾__戻し__カラー
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      opacity: 0,
      scale: 1,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 1,
      offset:1720,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)
    //右__エネルギー弾__戻し__座標
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      x: '0',
      y: '0',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 1,
      offset:1721,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)


    //ドラム__ダメージエフェクト__カラー
    var tween = TweenMax.staggerTo('#drum',speed,{
      backgroundColor: ef_color,
      borderColor: ef_color,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 680,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'drums消滅' })
      .addTo(controller)
    //ドラム__ダメージエフェクト__カラー__フォント
    var tween = TweenMax.staggerTo('.skill_drum p',speed,{
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 680,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'フォントカラー変更' })
      .addTo(controller)
    //ドラム__ダメージエフェクト__透明
    var tween = TweenMax.staggerTo('.skill_drum i',speed,{
      opacity: '0',
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 100,
      offset: 680,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'drums' })
      .addTo(controller)
    //ドラム__ダメージエフェクト__消失
    var tween = TweenMax.staggerTo('#drum,.skill_drum,.beam',speed,{
      display: 'none',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 680,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'drums' })
      .addTo(controller)
    //シンバル__ダメージエフェクト__カラー
    var tween = TweenMax.staggerTo('#cymb, .cymbSpace',speed,{
      backgroundColor: ef_color,
      borderColor: ef_color,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1080,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'drums消滅' })
      .addTo(controller)
    //シンバル__ダメージエフェクト__カラー__フォント
    var tween = TweenMax.staggerTo('.skill_cymb p',speed,{
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1080,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'フォントカラー変更' })
      .addTo(controller)
    //シンバル__ダメージエフェクト__透明　
    var tween = TweenMax.staggerTo('.cymb1',speed,{
      opacity: '0',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 100,
      offset: 1080,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'drums' })
      .addTo(controller)
    //シンバル__ダメージエフェクト__消失
    var tween = TweenMax.staggerTo('#cymb,.skill_cymb',speed,{
      display: 'none',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1080,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'drums' })
      .addTo(controller)
    //トライアングル__ダメージエフェクト__カラー
    var tween = TweenMax.staggerTo('#triangle',speed,{
      backgroundColor: ef_color,
      borderColor: ef_color,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1600,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'drums消滅' })
      .addTo(controller)
    //トライアングル__ダメージエフェクト__カラー
    var tween = TweenMax.staggerTo('.triangle_mini',speed,{
      borderBottomColor: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1600,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'drums消滅' })
      .addTo(controller)
    //トラアングル__ダメージエフェクト__カラー__フォント
    var tween = TweenMax.staggerTo('.skill_triangle p',speed,{
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1600,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'フォントカラー変更' })
      .addTo(controller)
    //トライアングル__ダメージエフェクト__透明　
    var tween = TweenMax.staggerTo('.triangle',speed,{
      opacity: '0',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 100,
      offset: 1600,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'drums' })
      .addTo(controller)
    //トライアングル__ダメージエフェクト__消失
    var tween = TweenMax.staggerTo('#triangle,.skill_triangle',speed,{
      display: 'none',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1600,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'drums' })
      .addTo(controller)
    //楽器スペース__消失
    var tween = TweenMax.staggerTo('.skills_top',speed,{
      height: '0',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1600,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'drums' })
      .addTo(controller)
    // 大学生活
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1681,
      reverse: true
    })
    
      .setPin('.history_box2')
      .addIndicators({ name: 'ヒストリー2' })
      .addTo(controller)

    var tween = TweenMax.staggerTo('.history_box2',speed,{
      opacity: 0
    })
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.history_box2',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'box2透過' })
      .addTo(controller)
    // ps ai fl アイコン出現
    var tween = TweenMax.staggerTo('.skill_ps,.skill_ai,.skill_fl',speed,{
      display:'block',
      opacity: 1,

    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box2',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CS5' })
      .addTo(controller)

////////////////////////////
//////【-- ダクト工 --】//////
////////////////////////////

    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box2',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1681,
      reverse: true
    })
      .setPin('.history_box3')
      .addIndicators({ name: 'ヒストリー3' })
      .addTo(controller)
    var tween = TweenMax.staggerTo('.history_box3',speed,{
      opacity: 0
    })
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 120,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'box3透過' })
      .addTo(controller)

    //幅変更
    var tween = TweenMax.staggerTo('.skills_top',speed,{
        width: '83%',
    })
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'box3透過' })
      .addTo(controller)

    // 電動工具アイコン出現
    var tween = TweenMax.staggerTo('.skill_bolt',speed,{
      display:'block',
      opacity: 1,
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'Electric' })
      .addTo(controller)

    ////中__発光__1st
    var tween = TweenMax.staggerTo('.portfolio_middle_o',speed,{
      repeat: 1,
      yoyo: true,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 200,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '中O' })
      .addTo(controller)
    //中__エネルギー弾__移動
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      backgroundColor: ef_color,
      opacity: 1,
      right: '159px',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 1,
      offset:200,
      reverse: true
    })
    .setTween(tween)
    .addIndicators({ name: '中O' })
    .addTo(controller)
    //中__エネルギー弾__発射準備
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      backgroundColor: ef_color,
      opacity: 1,
      scale: 0.3,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 160,
      offset:201,
      reverse: true
    })
    .setTween(tween)
    .addIndicators({ name: '中O' })
    .addTo(controller)
    //ビーム登場
    var tween = TweenMax.staggerTo('.energyBeam',speed,{
      opacity: 1,
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 100,
      offset: 400,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'Electric' })
      .addTo(controller)
    //ビーム発射
    var tween = TweenMax.staggerTo('.energyBeam',speed,{
      width: '880px',
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 400,
      offset: 400,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'Electric' })
      .addTo(controller)

    //ビーム回転
    var tween = TweenMax.staggerTo('.energyBeam',speed,{
      rotation: 70,
      width: '780px',
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 600,
      offset: 1000,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'Electric' })
      .addTo(controller)
    //ビーム長さ調整
    var tween = TweenMax.staggerTo('.energyBeam',speed,{
      repeat: 1,
      yoyo: true,
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 600,
      offset: 1000,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'Electric' })
      .addTo(controller)

    //ビーム終了
    var tween = TweenMax.staggerTo('.energyBall_right,.energyBeam',speed,{
      opacity: 0,
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 100,
      offset: 1580,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'Electric' })
      .addTo(controller)
    //エネルギー弾__終了
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      opacity: 0,
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 100,
      offset: 1580,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'Electric' })
      .addTo(controller)

    //インパクト__ダメージエフェクト__カラー
    var tween = TweenMax.staggerTo('.skill_impact  #impact',speed,{
      backgroundColor: ef_color,
      borderColor: ef_color,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 980,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'impact消滅' })
      .addTo(controller)
    //インパクト__ダメージエフェクト__カラー__フォント
    var tween = TweenMax.staggerTo('.skill_impact p',speed,{
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 980,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'フォントカラー変更' })
      .addTo(controller)
    //インパクト___ダメージエフェクト__透明
    var tween = TweenMax.staggerTo('.skill_impact i',speed,{
      opacity: '0',
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 100,
      offset: 980,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'impact' })
      .addTo(controller)
    //インパクト___ダメージエフェクト__消失
    var tween = TweenMax.staggerTo('#impact,.skill_impact,.beam',speed,{
      display: 'none',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 980,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'drums' })
      .addTo(controller)

    //サンダー__ダメージエフェクト__カラー
    var tween = TweenMax.staggerTo('.skill_sander  #sander',speed,{
      backgroundColor: ef_color,
      borderColor: ef_color,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1080,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'sander消滅' })
      .addTo(controller)
    //サンダー__ダメージエフェクト__カラー__フォント
    var tween = TweenMax.staggerTo('.skill_sander p',speed,{
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1080,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'フォントカラー変更' })
      .addTo(controller)
    //サンダー___ダメージエフェクト__透明
    var tween = TweenMax.staggerTo('.skill_sander i',speed,{
      opacity: '0',
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 100,
      offset: 1080,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'sander' })
      .addTo(controller)
    //サンダー___ダメージエフェクト__消失
    var tween = TweenMax.staggerTo('#sander,.skill_sander,.beam',speed,{
      display: 'none',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1080,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'drums' })
      .addTo(controller)

    //ジグソー__ダメージエフェクト__カラー
    var tween = TweenMax.staggerTo('.skill_jigsaw  #jigsaw',speed,{
      backgroundColor: ef_color,
      borderColor: ef_color,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1180,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'jigsaw消滅' })
      .addTo(controller)
    //ジグソー__ダメージエフェクト__カラー__フォント
    var tween = TweenMax.staggerTo('.skill_jigsaw p',speed,{
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1180,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'フォントカラー変更' })
      .addTo(controller)
    //ジグソー___ダメージエフェクト__透明
    var tween = TweenMax.staggerTo('.skill_jigsaw i',speed,{
      opacity: '0',
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 100,
      offset: 1180,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '#jigsaw' })
      .addTo(controller)
    //ジグソー___ダメージエフェクト__消失
    var tween = TweenMax.staggerTo('#jigsaw,.skill_jigsaw,.beam',speed,{
      display: 'none',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1180,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '#jigsaw' })
      .addTo(controller)

    //ドリル__ダメージエフェクト__カラー
    var tween = TweenMax.staggerTo('.skill_hammerdrill  #hammerdrill',speed,{
      backgroundColor: ef_color,
      borderColor: ef_color,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1280,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'hammerdrill消滅' })
      .addTo(controller)
    //ドリル__ダメージエフェクト__カラー__フォント
    var tween = TweenMax.staggerTo('.skill_hammerdrill p',speed,{
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1280,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'フォントカラー変更' })
      .addTo(controller)
    //ドリル___ダメージエフェクト__透明
    var tween = TweenMax.staggerTo('.skill_hammerdrill i',speed,{
      opacity: '0',
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 100,
      offset: 1280,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'hammerdrill' })
      .addTo(controller)
    //ドリル___ダメージエフェクト__消失
    var tween = TweenMax.staggerTo('#hammerdrill,.skill_hammerdrill,.beam',speed,{
      display: 'none',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1280,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'hammerdrill' })
      .addTo(controller)

    //セーバーソー__ダメージエフェクト__カラー
    var tween = TweenMax.staggerTo('.skill_sabersaw  #sabersaw',speed,{
      backgroundColor: ef_color,
      borderColor: ef_color,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1380,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'sabersaw消滅' })
      .addTo(controller)
    //セーバーソー__ダメージエフェクト__カラー__フォント
    var tween = TweenMax.staggerTo('.skill_sabersaw p',speed,{
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1380,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'フォントカラー変更' })
      .addTo(controller)
    //セーバーソー___ダメージエフェクト__透明
    var tween = TweenMax.staggerTo('.skill_sabersaw i',speed,{
      opacity: '0',
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 100,
      offset: 1380,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'sabersaw' })
      .addTo(controller)
    //セーバーソー___ダメージエフェクト__消失
    var tween = TweenMax.staggerTo('#sabersaw,.skill_sabersaw,.beam',speed,{
      display: 'none',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1380,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'sabersaw' })
      .addTo(controller)

//////////////////////////
//////【-- オフ会 --】//////
//////////////////////////

    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1681,
      reverse: true
    })
      .setPin('.history_box4')
      .addIndicators({ name: 'ヒストリー4' })
      .addTo(controller)

    var tween = TweenMax.staggerTo('.history_box4',speed,{
      opacity: 0
    })
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.history_box4',
      triggerHook: 'onLeave',
      duration: 120,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'box4透過' })
      .addTo(controller)
    // ai アイコン消滅
    var tween = TweenMax.staggerTo('.skill_ai',speed,{
      display:'none',
      opacity: 0.5,

    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box4',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CS5' })
      .addTo(controller)
    // aicc アイコン出現
    var tween = TweenMax.staggerTo('.skill_aicc, #aicc p',speed,{
      display:'block',
      opacity: 1,
      fontSize: '26px',

    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box4',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 290,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CS5' })
      .addTo(controller)

    //Fl 目線
    var tween = TweenMax.staggerTo('#fl p',speed,{
      x: '-8px',
    })
    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.history_box4',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 210,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CC' })
      .addTo(controller)
      
    var tween = TweenMax.staggerTo('#fl p',speed,{
      x: '0px',
    })
    var scene5 = new ScrollMagic.Scene({
      triggerElement: '.history_box4',
      triggerHook: 'onLeave',
      duration: 1000,
      offset: 710,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CC' })
      .addTo(controller)
    //Ps 目線
    var tween = TweenMax.staggerTo('#ps p',speed,{
      x: '8px',
    })
    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.history_box4',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 210,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CC' })
      .addTo(controller)
    var tween = TweenMax.staggerTo('#ps p',speed,{
      x: '0px',
    })
    var scene5 = new ScrollMagic.Scene({
      triggerElement: '.history_box4',
      triggerHook: 'onLeave',
      duration: 1000,
      offset: 710,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CC' })
      .addTo(controller)

////////////////////////////////////
//////【-- 桜パソコンスクール --】//////
////////////////////////////////////

    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box4',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1681,
      reverse: true
    })
      .setPin('.history_box5')
      .addIndicators({ name: 'ヒストリー5' })
      .addTo(controller)

    var tween = TweenMax.staggerTo('.skills_top',speed,{
      height: '70px',
      width: '50%',
    })
    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.history_box4',
      triggerHook: 'onLeave',
      duration: 300,
      offset: 1874,
      reverse: true
    })
    .setTween(tween)
    .addIndicators({ name: '下移動' })
    .addTo(controller)

    var tween = TweenMax.staggerTo('.history_box5',speed,{
      opacity: 0
    })
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.history_box5',
      triggerHook: 'onLeave',
      duration: 120,
      offset: 130,
      reverse: true
    })
    .setTween(tween)
      .addIndicators({ name: 'box5透過' })
      .addTo(controller)

      var tween = TweenMax.staggerTo('.skill_html,.skill_css,.skill_wp',speed,{
        display:'block',
        opacity: 1,
      })
      var scene3 = new ScrollMagic.Scene({
        triggerElement: '.history_box5',
        triggerHook: 'onLeave',
        duration: 160,
        offset: 130,
        reverse: true
      })
        .setTween(tween)
        .addIndicators({ name: 'html,css,js' })
        .addTo(controller)
    //top幅変更
    var tween = TweenMax.staggerTo('.skills_top',speed,{
      width: '33%',
    })
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.history_box5',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 0,
      reverse: true
    })
    .setTween(tween)
    .addIndicators({ name: 'box3透過' })
    .addTo(controller)

    //bottom幅変更

    var tween = TweenMax.staggerTo('.skills_middle',speed,{
        width: '67%',
        justifyContent: 'flex-end',
    })
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.history_box5',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 0,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'box3透過' })
      .addTo(controller)

    //  ps アイコン消滅
    var tween = TweenMax.staggerTo('.skill_ps',speed,{
      display:'none',
      opacity: 1,

    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box5',
      triggerHook: 'onLeave',
      duration: 161,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CS5' })
      .addTo(controller)
    // pscc アイコン出現
    var tween = TweenMax.staggerTo('.skill_pscc, #pscc p',speed,{
      display:'block',
      fontSize: '26px',
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box5',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 290,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CS5' })
      .addTo(controller)
    //Fl 目線
    var tween = TweenMax.staggerTo('#fl p',speed,{
      x: '-8px',
    })
    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.history_box5',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 210,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CC' })
      .addTo(controller)
      
    var tween = TweenMax.staggerTo('#fl p',speed,{
      x: '0px',
    })
    var scene5 = new ScrollMagic.Scene({
      triggerElement: '.history_box5',
      triggerHook: 'onLeave',
      duration: 1000,
      offset: 710,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CC' })
      .addTo(controller)
    //top幅変更
    var tween = TweenMax.staggerTo('.skills_top',speed,{
      width: '100%',
      justifyContent: 'left',
    })
    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.history_box5',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1514,
      reverse: true
    })
    .setTween(tween)
    .addIndicators({ name: '左移動' })
    .addTo(controller)
    //bottom幅変更
    var tween = TweenMax.staggerTo('.skills_middle',speed,{
      width: '100%',
      justifyContent: 'flex-end',
    })
    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.history_box5',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 1514,
      reverse: true
    })
    .setTween(tween)
    .addIndicators({ name: '右移動' })
    .addTo(controller)

////【-- プログラミングスクール --】
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box5',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1681,
      reverse: true
    })
      .setPin('.history_box6')
      .addIndicators({ name: 'ヒストリー6' })
      .addTo(controller)

    var tween = TweenMax.staggerTo('.history_box6',speed,{
      opacity: 0,
    })
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.history_box6',
      triggerHook: 'onLeave',
      duration: 120,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'box6透過' })
      .addTo(controller)
    //出現
    var tween = TweenMax.staggerTo('.skill_js,.skill_js,.skill_ruby,.skill_rails,.skill_mysql,.skill_aws,.skill_gh',speed,{
      display:'block',
      opacity: 1,
      
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box6',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'WardPress' })
      .addTo(controller)

    //bottom幅変更
    var tween = TweenMax.staggerTo('.skills_middle',speed,{
      justifyContent: 'left',
    })
    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.history_box6',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 290,
      reverse: true
    })
    .setTween(tween)
    .addIndicators({ name: '左移動' })
    .addTo(controller)

    //HTML CSS エフェクト
    var tween = TweenMax.staggerTo('.fa-html5,.fa-css3-alt',speed,{
      fontSize: '32px',
    })
    
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box6',
      triggerHook: 'onLeave',
      duration: 320,
      offset: 290,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CC' })
      .addTo(controller)

    var tween = TweenMax.staggerTo('.skill_icon#html,.skill_icon#css',speed,{
      repeat: 1,
      yoyo: true,
    })
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.history_box6',
      triggerHook: 'onLeave',
      duration: 320,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CC' })
      .addTo(controller)

////【-- プロダクト --】
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box6',
      triggerHook: 'onLeave',
      duration: 3000,
      offset: 1681,
      reverse: true
    })
      .setPin('.top_main_middle_products_box')
      .addIndicators({ name: 'プロダクト' })
      .addTo(controller)

    var tween = TweenMax.staggerTo('.top_main_middle_products_box',speed,{
        y: '-60px',
        repeat: 1,
        yoyo: true,
    })
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 200,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'products' })
      .addTo(controller)

      // ぶつかられた方
    var tween = TweenMax.staggerTo('.top_main_upper_skills_box',speed,{
      borderColor: ef_color2,
      y: '-30px',
      repeat: 1,
      yoyo: true
    })
    var tween2 = TweenMax.staggerTo('.top_main_upper_skills_box h2',speed,{
      color: ef_color2,
      repeat: 1,
      yoyo: true
    })
    
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 300,
      offset: 435,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'products' })
      .addTo(controller)

    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 300,
      offset: 435,
      reverse: true
    })
      .setTween(tween2)
      .addIndicators({ name: 'products' })
      .addTo(controller)
    
    ////左__発光__1st
    var tween = TweenMax.staggerTo('.portfolio_left_o',speed,{
      repeat: 1,
      yoyo: true,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 200,
      offset: 600,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '中O' })
      .addTo(controller)
    //左__エネルギー弾__移動
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      backgroundColor: ef_color,
      scale: 1,
      right: '338px',
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 1,
      offset:200,
      reverse: true
    })
    .setTween(tween)
    .addIndicators({ name: '中O' })
    .addTo(controller)
    //左__エネルギー弾__発射準備
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      backgroundColor: ef_color,
      opacity: 1,
      scale: 0.3,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 160,
      offset:600,
      reverse: true
    })
    .setTween(tween)
    .addIndicators({ name: '中O' })
    .addTo(controller)

    //左__エネルギー弾__発射中断
    var tween = TweenMax.staggerTo('.energyBall_right',speed,{
      backgroundColor: ef_color,
      opacity: 0,
      scale: 1,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 160,
      offset:1400,
      reverse: true
    })
    .setTween(tween)
    .addIndicators({ name: '中O' })
    .addTo(controller)

    //Flいなくなる
    var tween = TweenMax.staggerTo('.skill_fl',speed,{
      y: '-300px',
      opacity: 1,
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 435,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'products' })
      .addTo(controller)

    var tween = TweenMax.staggerTo('.skill_fl',speed,{
      y: '-290px',
    })
    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 65,
      offset: 935,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'products' })
      .addTo(controller)
    var tween = TweenMax.staggerTo('.skill_fl',speed,{
      y: '-212px',
    })
    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1000,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'products' })
      .addTo(controller)
    var tween = TweenMax.staggerTo('.skill_fl',speed,{
      opacity: 0,
    })
    var scene4 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 10,
      offset: 1400,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'products' })
      .addTo(controller)
    ////右__発光__1st
    var tween = TweenMax.staggerTo('.portfolio_right_o',speed,{
      zIndex: 11,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1000,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)

    var tween = TweenMax.staggerTo('.portfolio_right_o',speed,{
      repeat: 1,
      scale: 5,
      yoyo: true,
      color: ef_color,
    })
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1000,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: '右O' })
      .addTo(controller)
  });


