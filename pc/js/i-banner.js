$('.type-color').eq(0).click(function () {
    $('.i-1-center img').attr('src','img/a03.png').css("margin-top","0px");

    $('.i-1-left01').animate({top:"0px"},1000);
    $('.i-1-left02').animate({top:"736px"},1000);
    $('.i-1-left03').animate({top:"1472px"},1000);
    $('.i-1-left04').animate({top:"2208px"},1000);
    $('.i-1-left').css('background-color','rgb(202,91,119)');
    $('.i-1').css('border-color','rgb(202,91,119)');
    $('.i-1-right-in p').css('color','rgb(202,91,119)');
    $('.i-1-center p i').css('color','rgb(202,91,119)');
    $('.i-1-right-in a').css('border-color','rgb(202,91,119)');
    $('.i-1-right-in a').css('color','rgb(202,91,119)');
    $('.i-1-left-in a').hover(function () {
        $(this).css('color','rgb(202,91,119)');
    },function () {
        $(this).css('color','#fff');
    });
    $('.i-1-right-in a').hover(function () {
        $(this).css('background-color','rgb(202,91,119)');
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color','rgb(202,91,119)');
    })
    $(".curr").html("标准色系4色");
})
$('.type-color').eq(1).click(function () {
    $('.i-1-center img').attr('src','img/B/img_001.png').css("margin-top","0px");
    $('.i-1-left01').animate({top:"-736px"},1000);
    $('.i-1-left02').animate({top:"0px"},1000);
    $('.i-1-left03').animate({top:"736px"},1000);
    $('.i-1-left04').animate({top:"1472px"},1000);
    $('.i-1-left').css('background-color','rgb(216,189,167)');
    $('.i-1').css('border-color','rgb(216,189,167)');
    $('.i-1-right-in p').css('color','rgb(216,189,167)');
    $('.i-1-center p i').css('color','rgb(216,189,167)');
    $('.i-1-right-in a').css('border-color','rgb(216,189,167)');
    $('.i-1-right-in a').css('color','rgb(216,189,167)');
    $('.i-1-left-in a').hover(function () {
        $(this).css('color','rgb(216,189,167)');
    },function () {
        $(this).css('color','#fff');
    });
    $('.i-1-right-in a').hover(function () {
        $(this).css('background-color','rgb(216,189,167)');
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color','rgb(216,189,167)');
    })
    $(".curr").html("标准色系8色");
})
$('.type-color').eq(2).click(function () {
    $('.i-1-center img').attr('src','img/A/6.5.png').css("margin-top","0px");
    $('.i-1-left01').animate({top:"-1472px"},1000);
    $('.i-1-left02').animate({top:"-736px"},1000);
    $('.i-1-left03').animate({top:"0px"},1000);
    $('.i-1-left04').animate({top:"736px"},1000);
    $('.i-1-left').css('background-color','rgb(139,106,103)');
    $('.i-1').css('border-color','rgb(139,106,103)');
    $('.i-1-right-in p').css('color','rgb(139,106,103)');
    $('.i-1-center p i').css('color','rgb(139,106,103)');
    $('.i-1-right-in a').css('border-color','rgb(139,106,103)');
    $('.i-1-right-in a').css('color','rgb(139,106,103)');
    $('.i-1-left-in a').hover(function () {
        $(this).css('color','rgb(139,106,103)');
    },function () {
        $(this).css('color','#fff');
    });
    $('.i-1-right-in a').hover(function () {
        $(this).css('background-color','rgb(139,106,103)');
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color','rgb(139,106,103)');
    })
    $(".curr").html("&nbsp;");
})
$('.type-color').eq(3).click(function () {
    $('.i-1-center img').attr('src','img/Z/q5.png');
    $('.i-1-left01').animate({top:"-2208px"},1000);
    $('.i-1-left02').animate({top:"-1472px"},1000);
    $('.i-1-left03').animate({top:"-736px"},1000);
    $('.i-1-left04').animate({top:"0px"},1000);
    $('.i-1-left').css('background-color','rgb(170, 142, 130)');
    $('.i-1').css('border-color','rgb(170, 142, 130)');
    $('.i-1-right-in p').css('color','rgb(170, 142, 130)');
    $('.i-1-center p i').css('color','rgb(170, 142, 130)');
    $('.i-1-right-in a').css('border-color','rgb(170, 142, 130)');
    $('.i-1-right-in a').css('color','rgb(170, 142, 130)');
    $('.i-1-left-in a').hover(function () {
        $(this).css('color','rgb(170, 142, 130)');
    },function () {
        $(this).css('color','#fff');
    });
    $('.i-1-right-in a').hover(function () {
        $(this).css('background-color','rgb(170, 142, 130)');
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color','rgb(170, 142, 130)');
    })
    $(".curr").html("标准色系6色");
})


