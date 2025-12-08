$(function () {
    const mainMenu = $('.main-menu')
    // .main-menu 과 .main-menu > menu-item 다름
    // 방법1
    // mainMenu
    //     .on('mouseover', function () {
    //         $('.submenu, #back').stop().slideDown()
    //     })
    //     .on('mouseout', function () {
    //         $('.submenu, #back').stop().slideUp()
    //     })
    // 방법2
    mainMenu.hover (
        function () {
            $('.submenu, #back').stop().slideDown()
        },
        function () {
            $('.submenu, #back').stop().slideUp()
        }
    )
})