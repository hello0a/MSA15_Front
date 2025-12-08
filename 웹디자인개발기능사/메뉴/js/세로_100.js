$(function () {
    const menu = $('.menu')
    const sub = $('.sub .inner')
    // 방법1
    // menu
    //     .on('mouseover', function () {
    //         sub.stop().fadeIn()
    //     })
    //     .on('mouseout', function () {
    //         sub.stop().fadeOut()
    //     })
    // 방법2
    menu.hover (
        function () {
            sub.stop().fadeIn()
        },
        function () {
            sub.stop().fadeOut()
        }
    )
})