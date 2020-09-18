$(document).ready(function(){
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
//Ai アイコン変化
  var tween = TweenMax.staggerTo('#ai,#ai p',1,{
    backgroundColor: '#fff',
    color:'#0bf',
    fontSize: '26px',
  })
  var scene3 = new ScrollMagic.Scene({
    triggerElement: '.history_box4',
    triggerHook: 'onLeave',
    duration: 160,
    offset: 130,
    reverse: true
  })
    .setTween(tween)
    .addIndicators({ name: 'CC' })
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
  // テックキャンプ 
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

    var tween = TweenMax.staggerTo('.skill_html,.skill_css,.skill_js,.skill_ruby,.skill_rails,.skill_mysql,.skill_aws',speed,{
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
  // 桜パソコンスクール
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
//WardPress
var tween = TweenMax.staggerTo('.skill_wp',speed,{
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
// Ps アイコン変化
var tween = TweenMax.staggerTo('#ps,#ps p',1,{
  backgroundColor: '#fff',
  color:'#0bf',
  fontSize: '26px',
})
var scene3 = new ScrollMagic.Scene({
  triggerElement: '.history_box6',
  triggerHook: 'onLeave',
  duration: 160,
  offset: 130,
  reverse: true
})
  .setTween(tween)
  .addIndicators({ name: 'CC' })
  .addTo(controller)
//Fl 目線
var tween = TweenMax.staggerTo('#fl p',speed,{
  x: '-8px',
})
var scene4 = new ScrollMagic.Scene({
  triggerElement: '.history_box6',
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
  triggerElement: '.history_box6',
  triggerHook: 'onLeave',
  duration: 1000,
  offset: 710,
  reverse: true
})
  .setTween(tween)
  .addIndicators({ name: 'CC' })
  .addTo(controller)
  //HTML CSS アイコン変化
  var tween = TweenMax.staggerTo('#html p,#css p',1,{
    fontSize: '28px',
  })
  var scene3 = new ScrollMagic.Scene({
    triggerElement: '.history_box6',
    triggerHook: 'onLeave',
    duration: 160,
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
    border: '5px solid #ff8',
    y: '-30px',
    repeat: 1,
    yoyo: true
  })
  var tween2 = TweenMax.staggerTo('.top_main_upper_skills_box h2',speed,{
    color: '#ff8',
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
