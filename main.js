//上から下にいき真ん中に戻る

$(function(){
    $('#typo .inner')
    .css('top','-100px')
    .on('click',function(){
        $('#typo .inner').animate({
            top:'100px'
        },
        1500,
        function(){
            $('#typo .inner').animate({top:'0px'},500);
        }
        );
    });
});