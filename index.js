$(document).ready(function(){       
    var scroll_pos = 0;
    var a_01_Y = $(".a-01").offset().top;
    var a_04_Y = $(".a-04").offset().top;
    var a_06_Y = $(".a-06").offset().top;
    var a_08_Y = $(".a-08").offset().top;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();

        if(scroll_pos > a_01_Y) {
            $("nav").css('display', 'block');
        } else {
            $("nav").css('display', 'none');
        }
        
        if(scroll_pos > (a_01_Y - 350)) {
            $("#a-01-vision-01").css('animation', 'a-01-txt 0.7s 0s both'); 
            $("#a-01-vision-02").css('animation', 'a-01-txt 0.7s 0.4s both'); 
            $("#a-01-vision-03").css('animation', 'a-01-txt 0.7s 0.8s both'); 
            $("#a-01-vision-04").css('animation', 'a-01-txt 0.5s 1s both');
            $("#a-01-vision-01-m").css('animation', 'a-01-txt 0.7s 0s both'); 
            $("#a-01-vision-02-m").css('animation', 'a-01-txt 0.7s 0.4s both'); 
            $("#a-01-vision-03-m").css('animation', 'a-01-txt 0.7s 0.8s both'); 
            $("#a-01-vision-04-m").css('animation', 'a-01-txt 0.5s 1s both'); 
        } else {
            $("#a-01-vision-01").css('animation', '0');
            $("#a-01-vision-02").css('animation', '0');
            $("#a-01-vision-03").css('animation', '0');
            $("#a-01-vision-04").css('animation', '0');
            $("#a-01-vision-01-m").css('animation', '0');
            $("#a-01-vision-02-m").css('animation', '0');
            $("#a-01-vision-03-m").css('animation', '0');
            $("#a-01-vision-04-m").css('animation', '0');
        }

        if(scroll_pos > (a_04_Y - 500)) {
            $("#a-04-mail-img").css('display', 'block');
            $("#a-04-txt-01").css('animation', 'a-01-txt 0.8s 0.3s both');
            $("#a-04-txt-02").css('animation', 'a-01-txt 0.8s 0.6s both');
        } else {
            $("#a-04-mail-img").css('display', 'none');
            $("#a-04-txt-01").css('animation', '0');
            $("#a-04-txt-02").css('animation', '0');
        }

        if(scroll_pos > (a_06_Y - 500)) {
            $("#a-06-bg-01").css('animation', 'a-06-bg-01 0.6s cubic-bezier(0.4, 0, 1, 1) 0.2s both');
            $("#a-06-bg-02").css('animation', 'a-06-bg-02 0.8s cubic-bezier(0.4, 0, 1, 1) both');
            $("#a-06-bg-03").css('animation', 'a-06-bg-03 0.5s cubic-bezier(0.4, 0, 1, 1) 0.2s both');
            $("#a-06-bg-04").css('animation', 'a-06-bg-04 1s cubic-bezier(0.4, 0, 1, 1) 0.2s both');
            $("#a-06-bg-05").css('animation', 'a-06-bg-03 0.6s cubic-bezier(0.4, 0, 1, 1) both');
            $("#a-06-bg-05-1").css('animation', 'a-06-bg-05-01 0.4s cubic-bezier(0.4, 0, 1, 1) 0.2s both');
            $("#a-06-bg-06").css('animation', 'a-06-bg-02 0.4s cubic-bezier(0.4, 0, 1, 1) 0.4s both');
            $("#a-06-bg-07").css('animation', 'a-06-bg-03 0.4s cubic-bezier(0.4, 0, 1, 1) 0.5s both');
            $("#a-06-bg-08").css('animation', 'a-06-bg-08 0.6s cubic-bezier(0.6, -0.28, 0.74, 0.05) both');
            $("#a-06-bg-09").css('animation', 'a-06-bg-09 0.6s cubic-bezier(0.4, 0, 1, 1) 0.4s both');
            $("#a-06-bg-10").css('animation', 'a-06-bg-01 0.8s cubic-bezier(0.4, 0, 1, 1) both');
            $("#a-06-bg-11").css('animation', 'a-06-bg-01 0.4s cubic-bezier(0.4, 0, 1, 1) 0.2s both');
            $("#a-06-bg-12").css('animation', 'a-06-bg-05-01 1s cubic-bezier(0.4, 0, 1, 1) both');
            $("#a-06-bg-13").css('animation', 'a-06-bg-04 0.7s cubic-bezier(0.4, 0, 1, 1) 0.2s both');
            $("#a-06-bg-14").css('animation', 'a-06-bg-03 0.5s cubic-bezier(0.4, 0, 1, 1) 0.6s both');
            $("#a-06-bg-15").css('animation', 'a-06-bg-02 0.3s cubic-bezier(0.4, 0, 1, 1) 0.4s both');
        } else {
            $("#a-06-bg-01").css('animation', '0');
            $("#a-06-bg-02").css('animation', '0');
            $("#a-06-bg-03").css('animation', '0');
            $("#a-06-bg-04").css('animation', '0');
            $("#a-06-bg-05").css('animation', '0');
            $("#a-06-bg-05-1").css('animation', '0');
            $("#a-06-bg-06").css('animation', '0');
            $("#a-06-bg-07").css('animation', '0');
            $("#a-06-bg-08").css('animation', '0');
            $("#a-06-bg-09").css('animation', '0');
            $("#a-06-bg-10").css('animation', '0');
            $("#a-06-bg-11").css('animation', '0');
            $("#a-06-bg-12").css('animation', '0');
            $("#a-06-bg-13").css('animation', '0');
            $("#a-06-bg-14").css('animation', '0');
            $("#a-06-bg-15").css('animation', '0');
        }

        if(scroll_pos > (a_08_Y - 500)) {
            $("#a-08-title-01").css('animation', 'a-01-txt 0.7s 0s both'); 
            $("#a-08-title-02").css('animation', 'a-01-txt 0.7s 0.4s both');
            $("#a-08-title-02-m").css('animation', 'a-01-txt 0.7s 0.4s both');
            $("#nav-btn-m").css('display', 'none');  
        } else {
            $("#a-08-title-01").css('animation', '0');
            $("#a-08-title-02").css('animation', '0');
            $("#a-08-title-02-m").css('animation', '0');
            $("#nav-btn-m").css('display', 'inline-block');
        }

    });


$('.a-06-txt-btn').click(function(){
    var $href = $(this).attr('href');
    layer_popup($href);
});

function layer_popup(el){

    var $el = $(el);		//레이어의 id를 $el 변수에 저장
    var isDim = $el.prev().hasClass('dim-bg');	//dimmed 레이어를 감지하기 위한 boolean 변수

    isDim ? $('.a-06-dim').fadeIn( 200 ) : $el.fadeIn();

    var $elWidth = ~~($el.outerWidth()),
        $elHeight = ~~($el.outerHeight()),
        docWidth = $(document).width(),
        docHeight = $(document).height();

    // 화면의 중앙에 레이어를 띄운다.
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight /2,
            marginLeft: -$elWidth/2
        })
    } else {
        $el.css({top: 0, left: 0});
    }

    $el.find('.a-06-popup-btn').click(function(){
        isDim ? $('.a-06-dim').fadeOut( 100 ) : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
        return false;
    });

    $('.dim-bg').click(function(){
        $('.a-06-dim').fadeOut( 100 );
        return false;
    });

}

});
