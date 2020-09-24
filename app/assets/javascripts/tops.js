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

    // HISTORY
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_history',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 240,
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
      offset: 740,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'ヒストリー透過' })
      .addTo(controller)

      // 高校生活
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_history',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 2260,
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
      duration: 160,
      offset: 130,
      reverse: true
    })

    .setTween(tween)
    .addIndicators({ name: 'box1透過' })
    .addTo(controller)

    //楽器が出てくる
    var tween = TweenMax.staggerTo('.skill_triangle,.skill_drum',speed,{
      display:'block',
      opacity: 1,

    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'triangle' })
      .addTo(controller)

    //楽器がいる
    var tween = TweenMax.staggerTo('.skill_triangle,.skill_drum',speed,{

    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 290,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'triangle' })
      .addTo(controller)
    //楽器が消える
    var tween = TweenMax.staggerTo('.skill_triangle,.skill_drum',speed,{
      display:'none',
      opacity: 0,
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 790,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'triangle' })
      .addTo(controller)
    // 大学生活
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box1',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1714,
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

    //　ダクト工
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box2',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1714,
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
      duration: 160,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'box3透過' })
      .addTo(controller)

    // オフ会
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box3',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1714,
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
      duration: 160,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'box4透過' })
      .addTo(controller)
    //  ai アイコン消滅
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
    var tween = TweenMax.staggerTo('.skill_aicc',speed,{
      display:'block',
      opacity: 1,

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
    
    // 桜パソコンスクール
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box4',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1714,
      reverse: true
    })
      .setPin('.history_box5')
      .addIndicators({ name: 'ヒストリー5' })
      .addTo(controller)

    var tween = TweenMax.staggerTo('.history_box5',speed,{
        opacity: 0
    })
    var scene2 = new ScrollMagic.Scene({
      triggerElement: '.history_box5',
      triggerHook: 'onLeave',
      duration: 160,
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

    //  ps アイコン消滅
    var tween = TweenMax.staggerTo('.skill_ps',speed,{
      display:'none',
      opacity: 0.5,

    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box5',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CS5' })
      .addTo(controller)
    // aicc アイコン出現
    var tween = TweenMax.staggerTo('.skill_pscc',speed,{
      display:'block',
      opacity: 1,

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

    // テックキャンプ 
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box5',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 1714,
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
      duration: 160,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'box6透過' })
      .addTo(controller)
  //
    var tween = TweenMax.staggerTo('.skill_js,.skill_js,.skill_ruby,.skill_rails,.skill_mysql,.skill_aws,.skill_gh',speed,{
      display:'block',
      opacity: 1,
      
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box6',
      triggerHook: 'onLeave',
      duration: 160,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'WardPress' })
      .addTo(controller)

    //HTML CSS エフェクト
    var tween = TweenMax.staggerTo('#html i,#css i',speed,{
      fontSize: '36px',
      repeat: 1,
      yoyo: true,
      display: 'none',
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box6',
      triggerHook: 'onLeave',
      duration: 320,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CC' })
      .addTo(controller)

    var tween = TweenMax.staggerTo('.skill_icon#html,.skill_icon#css',speed,{
      repeat: 1,
      yoyo: true,
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.history_box6',
      triggerHook: 'onLeave',
      duration: 320,
      offset: 130,
      reverse: true
    })
      .setTween(tween)
      .addIndicators({ name: 'CC' })
      .addTo(controller)
    // プロダクト
    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.history_box6',
      triggerHook: 'onLeave',
      duration: 2000,
      offset: 1714,
      reverse: true
    })
      .setPin('.top_main_middle_products_box')
      .addIndicators({ name: 'プロダクト' })
      .addTo(controller)

    var tween = TweenMax.staggerTo('.top_main_middle_products_box',speed,{
        y: '-30px',
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
    //Flいなくなる
    var tween3 = TweenMax.staggerTo('.skill_fl',speed,{
      y: '-300px',
      opacity: 0,
      display: 'none',
    })
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.top_main_middle_products_box',
      triggerHook: 'onLeave',
      duration: 500,
      offset: 435,
      reverse: true
    })
      .setTween(tween3)
      .addIndicators({ name: 'products' })
      .addTo(controller) 
  });


