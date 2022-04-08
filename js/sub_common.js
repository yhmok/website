$(document).ready(function(){
    $("header").load("header.html");
    $("footer").load("footer.html");

    $(window).scroll(function(){
        var winWidth = $(window).width();
        var winSct = $(window).scrollTop();

        if(winWidth >= 1280){
            if(winSct > 390 - 90){
                $("header").css("background-color","#222");
            }else{
                $("header").css("background-color","rgba(0,0,0,0.3)");
            }
        }else if(winWidth >= 768 && winWidth < 1280){
            if(winSct > 390 - 80){
                $("header").css("background-color","#222");
            }else{
                $("header").css("background-color","rgba(0,0,0,0.3)");
            }
        }else{
            if(winSct > 300 - 70){
                $("header").css("background-color","#222");
            }else{
                $("header").css("background-color","rgba(0,0,0,0.3)");
            }
        }

    });

    $(window).resize(function(){
        var winWidth = $(this).width();
        var winSct = $(window).scrollTop();

        if(winWidth >= 1280){
            if(winSct > 390 - 90){
                $("header").css("background-color","#222");
            }else{
                $("header").css("background-color","rgba(0,0,0,0.3)");
            }
        }else if(winWidth >= 768 && winWidth < 1280){
            if(winSct > 390 - 80){
                $("header").css("background-color","#222");
            }else{
                $("header").css("background-color","rgba(0,0,0,0.3)");
            }

            // 태블릿이하 모바일메뉴가 열린상태에서 
            //pc로 갔다가 태블릿으로 돌아왔을때 [메뉴가 닫혀있도록]
            $(".mobtn").removeClass("change");
            $(".mobileNav").stop().animate({left:"100%"}, 300);

        }else{
            if(winSct > 300 - 70){
                $("header").css("background-color","#222");
            }else{
                $("header").css("background-color","rgba(0,0,0,0.3)");
            }
        }
    });
});