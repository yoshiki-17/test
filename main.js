
//マウスを乗せた時、外したときに色変わる

$(function(){
    $('#typo').on('mouseover',function(){
        $('#typo').css({
            color:'#ebc000',
            backgroundColor:'#ae5e9b'
        })
    });
});
$(function(){
    $('#typo').on('mouseout',function(){
        $('#typo').css({
            color:'',
            backgroundColor: ''
        });
    });
});