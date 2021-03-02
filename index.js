$(document).ready(function(){       
    var scroll_pos = 0;
    var a_01_Y = $(".a-01").offset().top;
    var a_04_Y = $(".a-04").offset().top;

    var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    
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
        } else {
            $("#a-01-vision-01").css('animation', '0');
            $("#a-01-vision-02").css('animation', '0');
            $("#a-01-vision-03").css('animation', '0');
            $("#a-01-vision-04").css('animation', '0');

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

    });

   
   

});