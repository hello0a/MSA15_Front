$(function () {
    const mainMenu = $('.main-menu > .menu-item')

    // 방법1
    // mainMenu
    //     // 마우스 올렸을 때
    //     .on('mouseover', function () {
    //         $('.submenu').stop().slideDown()
    //     })
    //     // 마우스 벗어날 때
    //     .on('mouseout', function () {
    //         $('.submenu').stop().slideUp()
    //     })
    // 방법2
    mainMenu
        // 마우스 올렸을 때
        .hover( 
            function () {
            $('.submenu').stop().slideDown()
        }, function () {
            $('.submenu').stop().slideUp()
        })
        
})