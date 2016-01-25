/*	global $:false, document:false	*/

$(document).ready(function() {
	$('#duty').keypress(function(event) {
//		debugger;
		var code = event.keyCode || event.which;
		if (code === 13 && this.value !== '') {
			fillDutiesArea(this.value);
			this.value = '';
		}
	});

	$('#dutiesArea').on('click', '.complete', function() {
		var doneDuty = $(this)
										.closest('li')
										.find('.dutyText');
		$('<li></li>').append(doneDuty).appendTo('#doneArea');
		$(this).closest('li').empty();
	});

	$('#dutiesArea').on('click', '.modify', function() {
		$('#duty').val($(this).closest('li').find('.dutyText').html());
		$(this).closest('li').empty();
	});

	$('#dutiesArea').on('click', '.delete', function() {
		$(this).closest('li').empty();
	});

	function fillDutiesArea(duty) {
		var spanCheck = $('<span></span>')
										.append($('<img></img>')
										.attr({
											src: '../media/check.svg',
											height: 18,
											width: 18,
											alt: 'check'
										})
											.css({
												cursor: 'pointer'
											})
											.addClass('complete')
		);
		var spanModify = $('<span></span>')
										.append($('<img></img>')
										.attr({
											src: '../media/modify.svg',
											height: 18,
											width: 18,
											alt: 'modify'
										})
										.css({
											cursor: 'pointer'
										})
											.addClass('modify')
		);
		var spanDelete = $('<span></span>')
										.append($('<img></img>')
										.attr({
											src: '../media/delete.png',
											height: 15,
											width: 15,
											alt: 'delete'
										})
										.css({
											cursor: 'pointer'
										})
											.addClass('delete')
		);
		var spanText = $('<span>' + duty + '</span>')
										.addClass('dutyText');
		var newDuty = $('<li></li>')
									.append(spanCheck)
									.append(spanModify)
									.append(spanDelete)
									.append(spanText);
		$(newDuty).appendTo('#dutiesArea');
	}
});
