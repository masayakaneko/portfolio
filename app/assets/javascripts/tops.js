$(document).ready(function(){
// コントローラ作成
const controller = new ScrollMagic.Controller()
// アニメーションスピード
const speed = 0.3
// タイトルとスキルボックス
var tween = TweenMax.staggerTo('.top_main_upper',speed,{
  y: '-80px',
  }
)
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
var scene = new ScrollMagic.Scene({
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
var scene = new ScrollMagic.Scene({
  triggerElement: '.top_main_middle_history',
  triggerHook: 'onLeave',
  duration: 100,
  offset: 740,
  reverse: true
})
  .setTween(tween)
  .addIndicators({ name: 'ヒストリー透過' })
  .addTo(controller)

  // ヒストリー1
var scene = new ScrollMagic.Scene({
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
var scene = new ScrollMagic.Scene({
  triggerElement: '.history_box1',
  triggerHook: 'onLeave',
  duration: 160,
  offset: 130,
  reverse: true
})
  .setTween(tween)
  .addIndicators({ name: 'box1透過' })
  .addTo(controller)

  // ヒストリー2
  var scene = new ScrollMagic.Scene({
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
  var scene = new ScrollMagic.Scene({
    triggerElement: '.history_box2',
    triggerHook: 'onLeave',
    duration: 160,
    offset: 130,
    reverse: true
  })
    .setTween(tween)
    .addIndicators({ name: 'box2透過' })
    .addTo(controller)

      // ヒストリー3
  var scene = new ScrollMagic.Scene({
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
  var scene = new ScrollMagic.Scene({
    triggerElement: '.history_box3',
    triggerHook: 'onLeave',
    duration: 160,
    offset: 130,
    reverse: true
  })
    .setTween(tween)
    .addIndicators({ name: 'box3透過' })
    .addTo(controller)

          // ヒストリー4
  var scene = new ScrollMagic.Scene({
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
  var scene = new ScrollMagic.Scene({
    triggerElement: '.history_box4',
    triggerHook: 'onLeave',
    duration: 160,
    offset: 130,
    reverse: true
  })
    .setTween(tween)
    .addIndicators({ name: 'box4透過' })
    .addTo(controller)

            // ヒストリー5
  var scene = new ScrollMagic.Scene({
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
  var scene = new ScrollMagic.Scene({
    triggerElement: '.history_box5',
    triggerHook: 'onLeave',
    duration: 160,
    offset: 130,
    reverse: true
  })
    .setTween(tween)
    .addIndicators({ name: 'box5透過' })
    .addTo(controller)

  // ヒストリー6
  var scene = new ScrollMagic.Scene({
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
      opacity: 0
  })
  var scene = new ScrollMagic.Scene({
    triggerElement: '.history_box6',
    triggerHook: 'onLeave',
    duration: 160,
    offset: 130,
    reverse: true
  })
    .setTween(tween)
    .addIndicators({ name: 'box6透過' })
    .addTo(controller)
    // プロダクト
  var scene = new ScrollMagic.Scene({
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
      y: '-35px',
      repeat: 1,
       yoyo: true
  })
  var scene = new ScrollMagic.Scene({
    triggerElement: '.top_main_middle_products_box',
    triggerHook: 'onLeave',
    duration: 240,
    offset: 130,
    reverse: true
  })
    .setTween(tween)
    .addIndicators({ name: 'products' })
    .addTo(controller)

    // ぶつかられた方
  var tween = TweenMax.staggerTo('.top_main_upper_skills_box',speed,{
    border: '5px solid #ff8',
    y: '-20px',
    repeat: 1,
    yoyo: true
  })
  var tween2 = TweenMax.staggerTo('.top_main_upper_skills_box h2',speed,{
    color: '#ff8',
    repeat: 1,
    yoyo: true
  })
  var scene = new ScrollMagic.Scene({
    triggerElement: '.top_main_middle_products_box',
    triggerHook: 'onLeave',
    duration: 120,
    offset: 270,
    reverse: true
  })
    .setTween(tween)
    .addIndicators({ name: 'products' })
    .addTo(controller)
  var scene2 = new ScrollMagic.Scene({
    triggerElement: '.top_main_middle_products_box',
    triggerHook: 'onLeave',
    duration: 120,
    offset: 270,
    reverse: true
  })
    .setTween(tween2)
    .addIndicators({ name: 'products' })
    .addTo(controller)
});
