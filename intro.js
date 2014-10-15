$(document).ready(function(){
    $('#navi ul li a').addClass('mouseout');
    $('#navi ul li a:nth(0)').hover(function(){
        $(this).addClass('mouseover');
    },function() {
        $(this).removeClass('mouseover');
  }).bind('click',function(){
        $('#first').show();
        $('#second,#third').hide();
    })
    $('#navi ul li a:nth(1)').hover(function(){
        $(this).addClass('mouseover');
    },function() {
        $(this).removeClass('mouseover');
  }).bind('click',function(){
        $('#second').show();
        $('#first,#third').hide();
    })
    $('#navi ul li a:nth(2)').hover(function(){
        $(this).addClass('mouseover');
    },function() {
        $(this).removeClass('mouseover');
  }).bind('click',function(){
        $('#third').show();
        $('#second,#first').hide();
    })
});

$(document).ready(function(){
   $('#intro > img').hover(function(){
       $(this).addClass('border');
   },function(){
       $(this).removeClass('border');
   })
   $('ul > li').addClass('font');
});