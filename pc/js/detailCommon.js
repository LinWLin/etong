// B款
/*$('.dc-1 .d-1-c-1 .d-1-c-li').eq(0).click(function () {
    var color=$(this).css('background-color');
    $(".dc-1 .d-1-c-2>li").children("a").removeClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).addClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.color-name').html('卡其色');
    $('.dc-1 .i-1 ').css('border-color',color);
    $('.dc-1 .i-1-left').css('background-color',color);
    $('.dc-1 .i-1-right-in p').css('color',color);
    $('.dc-1 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-1 .i-1-center p i').css('color',color);
    $('.dc-1 img').attr('src','../img/B/img_001.png');
    $('.dc-1 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-1 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-1 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
});
$('.dc-1 .d-1-c-1 .d-1-c-li').eq(1).click(function () {
    var color=$(this).css('background-color');
    $(".dc-1 .d-1-c-2>li").children("a").removeClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).addClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).removeClass('color-li-now');

    $('.color-name').html('咖啡色');
    $('.dc-1 .i-1 ').css('border-color',color);
    $('.dc-1 .i-1-left').css('background-color',color);
    $('.dc-1 .i-1-right-in p').css('color',color);
    $('.dc-1 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-1 .i-1-center p i').css('color',color);
    $('.dc-1 img').attr('src','../img/B/img_002.png');
    $('.dc-1 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-1 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-1 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
});
$('.dc-1 .d-1-c-1 .d-1-c-li').eq(2).click(function () {
    var color=$(this).css('background-color');
    $(".dc-1 .d-1-c-2>li").children("a").removeClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).addClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).removeClass('color-li-now');

    $('.color-name').html('经典红');
    $('.dc-1 .i-1 ').css('border-color',color);
    $('.dc-1 .i-1-left').css('background-color',color);
    $('.dc-1 .i-1-right-in p').css('color',color);
    $('.dc-1 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-1 .i-1-center p i').css('color',color);
    $('.dc-1 img').attr('src','../img/B/img_003.png');
    $('.dc-1 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    })
    $('.dc-1 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-1 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
});

$('.dc-1 .d-1-c-1 .d-1-c-li').eq(3).click(function () {
    var color=$(this).css('background-color');
    console.log($(this).find("a"));
    $(".dc-1 .d-1-c-2>li").children("a").removeClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).addClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).removeClass('color-li-now');

    $('.color-name').html('高雅紫');
    $('.dc-1 .i-1 ').css('border-color',color);
    $('.dc-1 .i-1-left').css('background-color',color);
    $('.dc-1 .i-1-right-in p').css('color',color);
    $('.dc-1 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-1 .i-1-center p i').css('color',color);
    $('.dc-1 img').attr('src','../img/B/img_004.png');
    $('.dc-1 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    })
    $('.dc-1 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-1 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
})*/



// 以上简写为：

    $('.dc-1 .d-1-c-1').delegate('.d-1-c-li', 'click', function() {
        var color=$(this).css('background-color');
        $(".dc-1 .d-1-c-2>li").children("a").removeClass('color-li-now');
        $(this).find("a").addClass('color-li-now').parent("li").siblings().find("a").removeClass('color-li-now');
        $('.dc-1 .color-name').html( $(this).find("i").text() );
        $('.dc-1 .i-1 ').css('border-color',color);
        $('.dc-1 .i-1-left').css('background-color',color);
        $('.dc-1 .i-1-right-in p').css('color',color);
        $('.dc-1 .i-1-right-in a').css({'color':color,'border-color':color});
        $('.dc-1 .i-1-center p i').css('color',color);
        $('.dc-1 img').attr('src','../img/B/img_00'+($(this).index()+1)+'.png');
        $('.dc-1 .i-1-left-in a').hover(function () {
            $(this).css('color',color);
        },function () {
            $(this).css('color','#fff');
        })
        $('.dc-1 .i-1-right-in a').hover(function () {
            $(this).css('background-color',color);
            $(this).css('color','#fff');
        },function () {
            $(this).css('background-color','#fff');
            $(this).css('color',color);
        })
        $(".dc-1 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
    });
    




// A款
/*$('.dc-2 .d-1-c-1 .d-1-c-li').eq(0).click(function () {
    var color=$(this).css('background-color');
    $(".dc-2 .d-1-c-2>li").children("a").removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).addClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(4).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(5).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(6).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(7).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .color-name').html('象牙白');
    $('.dc-2 .i-1 ').css('border-color',color);
    $('.dc-2 .i-1-left').css('background-color',color);
    $('.dc-2 .i-1-right-in p').css('color',color);
    $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-2 .i-1-center p i').css('color',color);
    $('.dc-2 img').attr('src','../img/A/IMG_0418.png');
    $('.dc-2 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-2 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系8色");
});
$('.dc-2 .d-1-c-1 .d-1-c-li').eq(1).click(function () {
    var color=$(this).css('background-color');
    $(".dc-2 .d-1-c-2>li").children("a").removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).addClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(4).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(5).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(6).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(7).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .color-name').html('浅卡其');
    $('.dc-2 .i-1 ').css('border-color',color);
    $('.dc-2 .i-1-left').css('background-color',color);
    $('.dc-2 .i-1-right-in p').css('color',color);
    $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-2 .i-1-center p i').css('color',color);
    $('.dc-2 img').attr('src','../img/A/IMG_0410.png');
    $('.dc-2 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-2 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系8色");
});
$('.dc-2 .d-1-c-1 .d-1-c-li').eq(2).click(function () {
    var color=$(this).css('background-color');
    $(".dc-2 .d-1-c-2>li").children("a").removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).addClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(4).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(5).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(6).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(7).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .color-name').html('咖啡色');
    $('.dc-2 .i-1 ').css('border-color',color);
    $('.dc-2 .i-1-left').css('background-color',color);
    $('.dc-2 .i-1-right-in p').css('color',color);
    $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-2 .i-1-center p i').css('color',color);
    $('.dc-2 img').attr('src','../img/A/IMG_0414.png');
    $('.dc-2 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-2 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系8色");
});
$('.dc-2 .d-1-c-1 .d-1-c-li').eq(3).click(function () {
    var color=$(this).css('background-color');
    $(".dc-2 .d-1-c-2>li").children("a").removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).addClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(4).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(5).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(6).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(7).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .color-name').html('土耳其黄');
    $('.dc-2 .i-1 ').css('border-color',color);
    $('.dc-2 .i-1-left').css('background-color',color);
    $('.dc-2 .i-1-right-in p').css('color',color);
    $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-2 .i-1-center p i').css('color',color);
    $('.dc-2 img').attr('src','../img/A/IMG_0397.png');
    $('.dc-2 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-2 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系8色");
    $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系8色");
});
$('.dc-2 .d-1-c-1 .d-1-c-li').eq(4).click(function () {
    var color=$(this).css('background-color');
    $(".dc-2 .d-1-c-2>li").children("a").removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(4).children().eq(0).addClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(5).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(6).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(7).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .color-name').html('经典红');
    $('.dc-2 .i-1 ').css('border-color',color);
    $('.dc-2 .i-1-left').css('background-color',color);
    $('.dc-2 .i-1-right-in p').css('color',color);
    $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-2 .i-1-center p i').css('color',color);
    $('.dc-2 img').attr('src','../img/A/IMG_0420.png');
    $('.dc-2 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-2 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系8色");
});
$('.dc-2 .d-1-c-1 .d-1-c-li').eq(5).click(function () {
    var color=$(this).css('background-color');
    $(".dc-2 .d-1-c-2>li").children("a").removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(5).children().eq(0).addClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(4).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(6).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(7).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .color-name').html('魅力酒红');
    $('.dc-2 .i-1 ').css('border-color',color);
    $('.dc-2 .i-1-left').css('background-color',color);
    $('.dc-2 .i-1-right-in p').css('color',color);
    $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-2 .i-1-center p i').css('color',color);
    $('.dc-2 img').attr('src','../img/A/IMG_0412.png');
    $('.dc-2 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-2 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系8色");
});
$('.dc-2 .d-1-c-1 .d-1-c-li').eq(6).click(function () {
    var color=$(this).css('background-color');
    $(".dc-2 .d-1-c-2>li").children("a").removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(6).children().eq(0).addClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(4).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(5).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(7).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .color-name').html('高雅紫');
    $('.dc-2 .i-1 ').css('border-color',color);
    $('.dc-2 .i-1-left').css('background-color',color);
    $('.dc-2 .i-1-right-in p').css('color',color);
    $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-2 .i-1-center p i').css('color',color);
    $('.dc-2 img').attr('src','../img/A/IMG_0408.png');
    $('.dc-2 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-2 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系8色");
});
$('.dc-2 .d-1-c-1 .d-1-c-li').eq(7).click(function () {
    var color=$(this).css('background-color');
    $(".dc-2 .d-1-c-2>li").children("a").removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(7).children().eq(0).addClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(4).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(5).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-1 .d-1-c-li').eq(6).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .color-name').html('永恒黑');
    $('.dc-2 .i-1 ').css('border-color',color);
    $('.dc-2 .i-1-left').css('background-color',color);
    $('.dc-2 .i-1-right-in p').css('color',color);
    $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-2 .i-1-center p i').css('color',color);
    $('.dc-2 img').attr('src','../img/A/IMG_0416.png');
    $('.dc-2 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-2 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系8色");
});*/



// 以上简写为：
    $('.dc-2 .d-1-c-1').delegate('.d-1-c-li', 'click', function() {
        var color=$(this).css('background-color');
        $(".dc-2 .d-1-c-2>li").children("a").removeClass('color-li-now');

        $(this).find("a").addClass('color-li-now').parent("li").siblings().find("a").removeClass('color-li-now');
        $('.dc-2 .color-name').html( $(this).find("i").text() );
        $('.dc-2 .i-1 ').css('border-color',color);
        $('.dc-2 .i-1-left').css('background-color',color);
        $('.dc-2 .i-1-right-in p').css('color',color);
        $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
        $('.dc-2 .i-1-center p i').css('color',color);
        $('.dc-2 img').attr('src','../img/A/IMG_040'+($(this).index()+1)+'.png');
        $('.dc-2 .i-1-left-in a').hover(function () {
            $(this).css('color',color);
        },function () {
            $(this).css('color','#fff');
        });
        $('.dc-2 .i-1-right-in a').hover(function () {
            $(this).css('background-color',color);
            $(this).css('color','#fff');
        },function () {
            $(this).css('background-color','#fff');
            $(this).css('color',color);
        })
        $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系8色");
    });




// 周边产品
/*$('.dc-3 .d-1-c-1 .d-1-c-li').eq(0).click(function () {
    var color=$(this).css('background-color');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).addClass('color-li-now');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.color-name').html('卡其色');
    $('.dc-3 .i-1 ').css('border-color',color);
    $('.dc-3 .i-1-left').css('background-color',color);
    $('.dc-3 .i-1-right-in p').css('color',color);
    $('.dc-3 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-3 .i-1-center p i').css('color',color);
    // $('.dc-3 img').attr('src','../img/B/IMG_2986.png');
    $('.dc-3 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-3 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-3 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
});
$('.dc-3 .d-1-c-1 .d-1-c-li').eq(1).click(function () {
    var color=$(this).css('background-color');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).addClass('color-li-now');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).removeClass('color-li-now');

    $('.color-name').html('咖啡色');
    $('.dc-3 .i-1 ').css('border-color',color);
    $('.dc-3 .i-1-left').css('background-color',color);
    $('.dc-3 .i-1-right-in p').css('color',color);
    $('.dc-3 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-3 .i-1-center p i').css('color',color);
    // $('.dc-3 img').attr('src','../img/B/IMG_3040.png');
    $('.dc-3 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-3 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-3 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
});
$('.dc-3 .d-1-c-1 .d-1-c-li').eq(2).click(function () {
    var color=$(this).css('background-color');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).addClass('color-li-now');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).removeClass('color-li-now');

    $('.color-name').html('经典红');
    $('.dc-3 .i-1 ').css('border-color',color);
    $('.dc-3 .i-1-left').css('background-color',color);
    $('.dc-3 .i-1-right-in p').css('color',color);
    $('.dc-3 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-3 .i-1-center p i').css('color',color);
    // $('.dc-3 img').attr('src','../img/B/IMG_3019.png');
    $('.dc-3 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    })
    $('.dc-3 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-3 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
});
$('.dc-3 .d-1-c-1 .d-1-c-li').eq(3).click(function () {
    var color=$(this).css('background-color');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(3).children().eq(0).addClass('color-li-now');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-3 .d-1-c-1 .d-1-c-li').eq(0).children().eq(0).removeClass('color-li-now');

    $('.color-name').html('高雅紫');
    $('.dc-3 .i-1 ').css('border-color',color);
    $('.dc-3 .i-1-left').css('background-color',color);
    $('.dc-3 .i-1-right-in p').css('color',color);
    $('.dc-3 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-3 .i-1-center p i').css('color',color);
    // $('.dc-3 img').attr('src','../img/B/IMG_2894.png');
    $('.dc-3 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    })
    $('.dc-3 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-3 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
})*/

// 以上简写为：
    $('.dc-3 .d-1-c-1').delegate('.d-1-c-li', 'click', function() {
        var color=$(this).css('background-color');
        $(this).find("a").addClass('color-li-now').parent("li").siblings().find("a").removeClass('color-li-now');
        

        $('.dc-3 .color-name').html(  $(this).find("i").text() );
        $('.dc-3 .i-1 ').css('border-color',color);
        $('.dc-3 .i-1-left').css('background-color',color);
        $('.dc-3 .i-1-right-in p').css('color',color);
        $('.dc-3 .i-1-right-in a').css({'color':color,'border-color':color});
        $('.dc-3 .i-1-center p i').css('color',color);
        $('.dc-3 img').attr('src','../img/Z/q'+($(this).index()+1)+'.png');
        $('.dc-3 .i-1-left-in a').hover(function () {
            $(this).css('color',color);
        },function () {
            $(this).css('color','#fff');
        })
        $('.dc-3 .i-1-right-in a').hover(function () {
            $(this).css('background-color',color);
            $(this).css('color','#fff');
        },function () {
            $(this).css('background-color','#fff');
            $(this).css('color',color);
        })
        $(".dc-3 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
        });



// 马卡龙色系

// B款
/*$('.dc-1 .d-1-c-2>li').eq(0).click(function () {
    var color=$(this).css('background-color');
    $(".dc-1 .d-1-c-1 .d-1-c-li").children("a").removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(0).children().eq(0).addClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(4).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(5).children().eq(0).removeClass('color-li-now');
    $('.color-name').html('嫩绿');
    $('.dc-1 .i-1 ').css('border-color',color);
    $('.dc-1 .i-1-left').css('background-color',color);
    $('.dc-1 .i-1-right-in p').css('color',color);
    $('.dc-1 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-1 .i-1-center p i').css('color',color);
    $('.dc-1 img').attr('src','../img/B/img_01.png');
    $('.dc-1 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-1 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-1 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系6色");
});

$('.dc-1 .d-1-c-2>li').eq(1).click(function () {
    var color=$(this).css('background-color');
    $(".dc-1 .d-1-c-1 .d-1-c-li").children("a").removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(1).children().eq(0).addClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(4).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(5).children().eq(0).removeClass('color-li-now');
    $('.color-name').html('橙黄');
    $('.dc-1 .i-1 ').css('border-color',color);
    $('.dc-1 .i-1-left').css('background-color',color);
    $('.dc-1 .i-1-right-in p').css('color',color);
    $('.dc-1 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-1 .i-1-center p i').css('color',color);
    $('.dc-1 img').attr('src','../img/B/img_02.png');
    $('.dc-1 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-1 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-1 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系6色");
});

$('.dc-1 .d-1-c-2>li').eq(2).click(function () {
    var color=$(this).css('background-color');
    $(".dc-1 .d-1-c-1 .d-1-c-li").children("a").removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(2).children().eq(0).addClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(4).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(5).children().eq(0).removeClass('color-li-now');
    $('.color-name').html('纯真红');
    $('.dc-1 .i-1 ').css('border-color',color);
    $('.dc-1 .i-1-left').css('background-color',color);
    $('.dc-1 .i-1-right-in p').css('color',color);
    $('.dc-1 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-1 .i-1-center p i').css('color',color);
    $('.dc-1 img').attr('src','../img/B/img_03.png');
    $('.dc-1 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-1 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-1 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系6色");
});

$('.dc-1 .d-1-c-2>li').eq(3).click(function () {
    var color=$(this).css('background-color');
    $(".dc-1 .d-1-c-1 .d-1-c-li").children("a").removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(3).children().eq(0).addClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(4).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(5).children().eq(0).removeClass('color-li-now');
    $('.color-name').html('傲娇粉');
    $('.dc-1 .i-1 ').css('border-color',color);
    $('.dc-1 .i-1-left').css('background-color',color);
    $('.dc-1 .i-1-right-in p').css('color',color);
    $('.dc-1 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-1 .i-1-center p i').css('color',color);
    $('.dc-1 img').attr('src','../img/B/img_04.png');
    $('.dc-1 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-1 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-1 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系6色");
});

$('.dc-1 .d-1-c-2>li').eq(4).click(function () {
    var color=$(this).css('background-color');
    $(".dc-1 .d-1-c-1 .d-1-c-li").children("a").removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(4).children().eq(0).addClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(5).children().eq(0).removeClass('color-li-now');
    $('.color-name').html('淡湖蓝');
    $('.dc-1 .i-1 ').css('border-color',color);
    $('.dc-1 .i-1-left').css('background-color',color);
    $('.dc-1 .i-1-right-in p').css('color',color);
    $('.dc-1 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-1 .i-1-center p i').css('color',color);
    $('.dc-1 img').attr('src','../img/B/img_05.png');
    $('.dc-1 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-1 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-1 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系6色");
});

$('.dc-1 .d-1-c-2>li').eq(5).click(function () {
    var color=$(this).css('background-color');
    $(".dc-1 .d-1-c-1 .d-1-c-li").children("a").removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(4).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-1 .d-1-c-2>li').eq(5).children().eq(0).addClass('color-li-now');
    $('.color-name').html('紫');
    $('.dc-1 .i-1 ').css('border-color',color);
    $('.dc-1 .i-1-left').css('background-color',color);
    $('.dc-1 .i-1-right-in p').css('color',color);
    $('.dc-1 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-1 .i-1-center p i').css('color',color);
    $('.dc-1 img').attr('src','../img/B/img_06.png');
    $('.dc-1 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-1 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-1 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系6色");
});*/


// 以上简写为：

    $('.dc-1 .d-1-c-2').delegate('li', 'click', function() {
        var color=$(this).css('background-color');
        $(".dc-1 .d-1-c-1 .d-1-c-li").children("a").removeClass('color-li-now');
        $(this).find("a").addClass('color-li-now').parent("li").siblings().find("a").removeClass('color-li-now');
        $('.dc-1 .color-name').html( $(this).find("i").text() );
        $('.dc-1 .i-1 ').css('border-color',color);
        $('.dc-1 .i-1-left').css('background-color',color);
        $('.dc-1 .i-1-right-in p').css('color',color);
        $('.dc-1 .i-1-right-in a').css({'color':color,'border-color':color});
        $('.dc-1 .i-1-center p i').css('color',color);
        $('.dc-1 img').attr('src','../img/B/img_0'+($(this).index()+1)+'.png');
        $('.dc-1 .i-1-left-in a').hover(function () {
            $(this).css('color',color);
        },function () {
            $(this).css('color','#fff');
        })
        $('.dc-1 .i-1-right-in a').hover(function () {
            $(this).css('background-color',color);
            $(this).css('color','#fff');
        },function () {
            $(this).css('background-color','#fff');
            $(this).css('color',color);
        })
        $(".dc-1 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系6色");
    });
    


// A款
/*$('.dc-2 .d-1-c-2>li').eq(0).click(function () {
    var color=$(this).css('background-color');
    $(".dc-2 .d-1-c-1 .d-1-c-li").children("a").removeClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(0).children().eq(0).addClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .color-name').html('象牙白');
    $('.dc-2 .i-1 ').css('border-color',color);
    $('.dc-2 .i-1-left').css('background-color',color);
    $('.dc-2 .i-1-right-in p').css('color',color);
    $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-2 .i-1-center p i').css('color',color);
    $('.dc-2 img').attr('src','../img/A/IMG_01.png');
    $('.dc-2 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-2 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
});
$('.dc-2 .d-1-c-2>li').eq(1).click(function () {
    var color=$(this).css('background-color');
    $(".dc-2 .d-1-c-1 .d-1-c-li").children("a").removeClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(1).children().eq(0).addClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .color-name').html('象牙白');
    $('.dc-2 .i-1 ').css('border-color',color);
    $('.dc-2 .i-1-left').css('background-color',color);
    $('.dc-2 .i-1-right-in p').css('color',color);
    $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-2 .i-1-center p i').css('color',color);
    $('.dc-2 img').attr('src','../img/A/IMG_02.png');
    $('.dc-2 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-2 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
});
$('.dc-2 .d-1-c-2>li').eq(2).click(function () {
    var color=$(this).css('background-color');
    $(".dc-2 .d-1-c-1 .d-1-c-li").children("a").removeClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(2).children().eq(0).addClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(3).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .color-name').html('象牙白');
    $('.dc-2 .i-1 ').css('border-color',color);
    $('.dc-2 .i-1-left').css('background-color',color);
    $('.dc-2 .i-1-right-in p').css('color',color);
    $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-2 .i-1-center p i').css('color',color);
    $('.dc-2 img').attr('src','../img/A/IMG_03.png');
    $('.dc-2 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-2 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
});
$('.dc-2 .d-1-c-2>li').eq(3).click(function () {
    var color=$(this).css('background-color');
    $(".dc-2 .d-1-c-1 .d-1-c-li").children("a").removeClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(3).children().eq(0).addClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(1).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(2).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .d-1-c-2>li').eq(0).children().eq(0).removeClass('color-li-now');
    $('.dc-2 .color-name').html('象牙白');
    $('.dc-2 .i-1 ').css('border-color',color);
    $('.dc-2 .i-1-left').css('background-color',color);
    $('.dc-2 .i-1-right-in p').css('color',color);
    $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
    $('.dc-2 .i-1-center p i').css('color',color);
    $('.dc-2 img').attr('src','../img/A/IMG_04.png');
    $('.dc-2 .i-1-left-in a').hover(function () {
        $(this).css('color',color);
    },function () {
        $(this).css('color','#fff');
    });
    $('.dc-2 .i-1-right-in a').hover(function () {
        $(this).css('background-color',color);
        $(this).css('color','#fff');
    },function () {
        $(this).css('background-color','#fff');
        $(this).css('color',color);
    })
    $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
});*/



// 以上简写为：
    $('.dc-2 .d-1-c-2').delegate('li', 'click', function() {
        var color=$(this).css('background-color');
        $(".dc-2 .d-1-c-1>li").children("a").removeClass('color-li-now');

        $(this).find("a").addClass('color-li-now').parent("li").siblings().find("a").removeClass('color-li-now');
        $('.dc-2 .color-name').html( $(this).find("i").text() );
        $('.dc-2 .i-1 ').css('border-color',color);
        $('.dc-2 .i-1-left').css('background-color',color);
        $('.dc-2 .i-1-right-in p').css('color',color);
        $('.dc-2 .i-1-right-in a').css({'color':color,'border-color':color});
        $('.dc-2 .i-1-center p i').css('color',color);
        $('.dc-2 img').attr('src','../img/A/IMG_0'+($(this).index()+1)+'.png');
        $('.dc-2 .i-1-left-in a').hover(function () {
            $(this).css('color',color);
        },function () {
            $(this).css('color','#fff');
        });
        $('.dc-2 .i-1-right-in a').hover(function () {
            $(this).css('background-color',color);
            $(this).css('color','#fff');
        },function () {
            $(this).css('background-color','#fff');
            $(this).css('color',color);
        })
        $(".dc-2 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
    });



    $('.dc-4 .d-1-c-1').delegate('.d-1-c-li', 'click', function() {
        var color=$(this).css('background-color');
        $(this).find("a").addClass('color-li-now').parent("li").siblings().find("a").removeClass('color-li-now');
        

        $('.dc-4 .color-name').html(  $(this).find("i").text() );
        $('.dc-4 .i-1 ').css('border-color',color);
        $('.dc-4 .i-1-left').css('background-color',color);
        $('.dc-4 .i-1-right-in p').css('color',color);
        $('.dc-4 .i-1-right-in a').css({'color':color,'border-color':color});
        $('.dc-4 .i-1-center p i').css('color',color);
        $('.dc-4 img').attr('src','../img/Z/q'+($(this).index()+1)+'.png');
        $('.dc-4 .i-1-left-in a').hover(function () {
            $(this).css('color',color);
        },function () {
            $(this).css('color','#fff');
        })
        $('.dc-4 .i-1-right-in a').hover(function () {
            $(this).css('background-color',color);
            $(this).css('color','#fff');
        },function () {
            $(this).css('background-color','#fff');
            $(this).css('color',color);
        })
        $(".dc-4 .i-1 .i-1-right-in>p:nth-child(6)").html("标准色系4色");
        });