var clicked=false;
$(".toggle").on('click', function(){
    if(clicked)
    {
        clicked=false;
		$(".two").css({"z-index":-1});
		$(".toggle").css({'transform': 'rotate(0deg)'});
		$(".one").css({"border-bottom":"solid 1px"});
    }
    else
    {
        clicked=true;
       $(".toggle").css({'transform': 'rotate(180deg)'});
	   $(".two").css({"z-index":1});
	   $(".one").css({"border-bottom":"none "});
		
    }
});
$('#amount').click(function() {
    $('#amount').css('display', 'none');
    $('#amount_entry')
        .val($('#amount').text())
        .css('display', '')
        .focus();
});
$('#amount_entry').blur(function() {
    $('#amount_entry').css('display', 'none');
    $('#amount')
        .text($('#amount_entry').val())
        .css('display', '');
});