$(function () {
    const mainMenu = $('.main-menu > .menu-item')
    // 방법1
    // mainMenu
    //     .on('mouseover', function () {
    //         $(this).find('.submenu').stop().slideDown()
    //     })
    //     .on('mouseout', function () {
    //         $(this).find('.submenu').stop().slideUp()
    //     })
    // 방법2
    // mainMenu.hover (
    //     function () {
    //         $(this).find('.submenu').stop().fadeIn()
    //     },
    //     function () {
    //         $(this).find('.submenu').stop().fadeOut()
    //     }
    // )
    mainMenu.hover (
        function () {
            $(this).find('.submenu').stop().show()
        },
        function () {
            $(this).find('.submenu').stop().hide()
        }
    )
})
