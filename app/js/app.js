/*	global $:false, document:false	*/

$(document).ready(function() {
// If the user has filled a new duty and presses Enter, then add it.
	$('#duty').keypress(function(event) {
		var code = event.keyCode || event.which;
		if (code === 13 && this.value !== '') {
			fillDutiesArea(this.value);
			this.value = '';
		}
	});

// If the user presses the complete button, move the duty in the doneArea.
	$('#dutiesArea').on('click', '.complete', function() {
		var doneDuty = $(this)
										.closest('li')
										.find('.dutyText');
		$('<li></li>').append(doneDuty).appendTo('#doneArea');
		$(this).closest('li').remove();
	});

	// If the user presses the modify button, move the duty in the text area.
	$('#dutiesArea').on('click', '.modify', function() {
		$('#duty').val($(this).closest('li').find('.dutyText').html());
		$(this).closest('li').remove();
	});

	// If the user presses the delete button, delete the duty.
	$('#dutiesArea').on('click', '.delete', function() {
		$(this).closest('li').remove();
	});
/**
 * This function is used to create the li element in the dutiesArea.
 * @param  {[Object]} duty [the added duty by the username]
*/
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
