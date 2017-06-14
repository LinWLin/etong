$('.dt').eq(0).click(function () {
    $(this).addClass('dt-now').siblings().removeClass('dt-now');
    $('.dc-1').show();
    $('.dc-2').hide();
    $('.dc-3').hide();
    $('.dc-4').hide();
})
$('.dt').eq(1).click(function () {
    $(this).addClass('dt-now').siblings().removeClass('dt-now');
    $('.dc-2').show();
    $('.dc-1').hide();
    $('.dc-3').hide();
    $('.dc-4').hide();
})
$('.dt').eq(2).click(function () {
    $(this).addClass('dt-now').siblings().removeClass('dt-now');
    $('.dc-3').show();
    $('.dc-2').hide();
    $('.dc-1').hide();
    $('.dc-4').hide();
})
$('.dt').eq(3).click(function () {
    $(this).addClass('dt-now').siblings().removeClass('dt-now');
    $('.dc-4').show();
    $('.dc-2').hide();
    $('.dc-1').hide();
    $('.dc-3').hide();
})


