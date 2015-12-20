var myProject = (function () { 

	// Инициализация модуля
	var init = function () {
		_setUpListners(); 
	};

	var _getNameFromPath = function (path) {
		return path.replace(/\\/g, '/').replace(/.*\//, '');
	};

	
	var _setUpListners = function () {
		$('#add-projekt-bg').on('click', _showModal); // open popup window
		$('#form-wrapper').on('submit', _addProject); // add projekt
		$('#fileupload').on('change', _changefileUpload); // upload image
		$('#close-button').on('click', _clearAddForm);
	};

	var _changefileUpload = function () {
		var input = $(this), 
			
		
		name = _getNameFromPath(input.val()); 

		$('.filename')
			.val(name)
			.trigger('hideTooltip')
			.removeClass('error'); 
	};

	// Modal window
	var _showModal = function (ev) { // Show modal function
		
		ev.preventDefault(); 
		var divPopup = $('#popup-window'), // var poup
			form = divPopup.find('.form-wrapper'); // var form
		divPopup.bPopup({
			speed: 10,
			  positionStyle: 'fixed', 
			  // modalClose : true
        onClose : function () { //on close window
				
			 this.find('.form-wrapper').trigger("reset");
			
			}
		});
	};



// Add project
	var _addProject = function (ev) { 
		
		ev.preventDefault();

		
		var form = $(this), // give element in _addProject
			url = $(this).attr('action'),
			url = 'add_project.php', // server check
			ServerAnswer = _ajaxForm(form, url); // 	

		
		if (ServerAnswer) { 
			ServerAnswer.done(function(ans) { 
			

			var successBox = form.find('.success-message'),
				errorBox = form.find('.error-message');

			if(ans.status === 'OK'){
				
				errorBox.hide();
				successBox.text(ans.text).show(); 
			}else{
				
				successBox.hide();
				errorBox.text(ans.text).show(); 
			}
		});
		}
	};

	
	var _ajaxForm = function (form, url) { 

		if (!validation.validateForm(form)) return false;  
		var data = form.serialize(); 

		var result = $.ajax({ 
			url: url, 
			type: 'POST',
			dataType: 'json',
			data: data,
		}).fail( function(ans) {
			
			// form.find('.error-message').text('Happen Error').show();
		});

		return result; 
	};

	var _clearAddForm = function () {
  $('.form-name, .form-url, .filename, .form-message').trigger('hideTooltip'); 
  $('.form-name, .form-url, .filename, .form-message').removeClass('error'); 
	};

	
	return {
		init: init
	};

})();


myProject.init();


