$(function() {

	$('.choose input[type=radio]').on('change', function(){
		let select = $('.choose input[type=radio]:checked').attr('id');
		$('.capschange').not('.'+select).hide()
		$('.'+select).show()
	})
	$('input').focus(function(){
		$(this).siblings('p').css('opacity','1').addClass('focus');
	})
	$('input').blur(function(){
		$(this).siblings('p').css('opacity','0');
	});
	$('.toForm').on('click', function(){
		$('html, body').animate({
        scrollTop: $('.screen9').offset().top
      }, 1000)
	});
	$('form').submit(function(e){
		e.preventDefault();
		$.ajax({
			method: 'POST',
			data: $('form').serialize(),
			url: 'form.php',
			success: function(data){
				$("form")[0].reset();
				$('#thanks').modal('show')
			}
		})
	})

});
