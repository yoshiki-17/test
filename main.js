//徐々に色が変わる
$(function(){
    $('#typo').on('click',function(){
        $('#typo .inner').animate({
            color:'#ebd000'
        }
        ,1500);
    });
});