$(function () {
    const mainMenu = $('.main-menu > .menu-item')

    // 방법1
    // 마우스 올렸을 때
    mainMenu
        .on('mouseover', function () {
            $(this).find('.submenu').stop().slideDown()
        })
        // 메서드 체인
        // 마우스 벗어났을 때
        .on('mouseout', function () {
            $(this).find('.submenu').stop().slideUp()
        })
    // 방법2
    // $().hover(올렸을 때, 벗어났을 때)
    mainMenu.hover(
        function () {
            $(this).find('.submenu').stop().slideDown()
        },
        function () {
            $(this).find('.submenu').stop().slideUp()
        }
    )
})