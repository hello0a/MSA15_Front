/* jQuery 애니메이션 함수
    - hide/show
    - fadeIng/fadeOut
    - slideUp/slideDown
    - animate
    - class 를 추가하는 기법 */
$(function () {
    /* hide & show */
    /* 
        hide/show ( 인자1, 인자2 ) 
        * 인자1 : duration(시간)
        - margin, padding, width, height, opacity 속성 등을
        지정된 값에서 0으로, 지정시간(ms) 동안 애니메이션 동작 적용한다
        (1s = 1000ms)
        
        * 인자2 : 콜백함수
        - 애니메이션 완료 후, 호출할 콜백 함수
    */
   $('.hide').on('click', function () {
        $('#box1').hide()
   })

   $('.show').on('click', function () {
        $('#box1').show()
   })

   $('.hide1000').on('click', function () {
        $('#box1').hide(1000)
   })

   $('.show1000').on('click', function () {
        $('#box1').show(1000)
   })

   /* fade */
   $('.fadeOut').on('click', function () {
        $('#box2').fadeOut(1000)
   })

   $('.fadeIn').on('click', function () {
        $('#box2').fadeIn(1000)
   })

   $('.fadeToggle').on('click', function () {
        $('#box2').fadeToggle(1000)
   })
   
   $('.fadeTo').on('click', function () {
        $('#box2').fadeTo('slow', 0.2)
   })

   /* slide */
   $('.slideUp').on('mouseout', function () {
        $('#box3').slideUp(1000)
   })

   $('.slideDown').on('mouseover', function () {
        $('#box3').slideDown(1000)
   })

   $('.slideToggle').on('mouseover', function () {
        $('#box3').slideToggle(1000)
   })
   /* 웹 디자인 : 서브메뉴 문제 */

   /* animate */
   let sw = false
   $('.animate').on('click', function () {
    if( !sw ) {
        $('#box4').stop().animate({
            'opacity'   : '0.3',
            'width'   : '600px',
            'background-color'   : 'red',
        }, 3000)
        /* 백그라운드까지 적용X -> css 구현 */
    } else {
        $('#box4').stop().animate({
            'opacity'   : '1',
            'width'   : '140px',
            'background-color'   : 'cornflowerblue'
        }, 3000)
    }
    sw = !sw    // true <-> false
   })
   /* 
        animate() 함수로 지정가능한 스타일 속성
        : backgroundPositionX, backgroundPositionY, borderBottomWidth, borderLeftWidth
        , borderRightWidth, borderSpacing, borderTopWidth, borderWidth, bottom, fontSize
        , height, left, letterSpacing, lineHeight, margin, marginBottom, marginLeft, marginRight, marginTop
        , maxHeight, maxWidth, minHeight, minWidth, opacity, outlineWidth
        , padding, paddingBottom, paddingLeft, paddingRight, paddingTop, right, textIndent, top, width, wordSpacing
        X background, background-color, color 등등
    */
   let flag = true
   $('.active').on('click', function() {
    
    /*  방법1
    if( flag ) {
        $('#box5').removeClass('reset')
        $('#box5').addClass('active')
    } else {
        $('#box5').removeClass('active')
        $('#box5').addClass('reset')
    }
     */

    /* 방법2
    $('#box5').removeClass('reset')
    $('#box5').removeClass('active')
    if( flag ) {
        $('#box5').addClass('active')
        } else {
            $('#box5').addClass('reset')
    }
    */
   // flag = !flag
   
   // 방법3
   $('#box5').toggleClass('active')
   $('#box5').toggleClass('reset')

   /* 
   addCloss()    : 클래스 속성 추가
   removeClass() : 클래스 속성 제거
   toggleClass() : 클래스 속성 토글 
    */
   })
})