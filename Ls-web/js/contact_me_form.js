var contactMe = (function (){

var init = function(){

				_setUpListners();
			},
			
			_setUpListners = function (){
				$('#contact_form').on('submit', _submitForm); 
				$('#contact_form').on('reset', _resetForm); 
			},
		
			_submitForm = function (ev) {
				 ev.preventDefault(); 
				 var form = $(this),    
	          	 url = '/contact_me.php', 
	          	 defObject = _ajaxForm(form, url); 
	          	 },

        _resetForm = function (ev) {
				 // ev.preventDefault(); 
				     $('.form-name, .form-email, .form-message').trigger('hideTooltip');  
	          	 },

	   		_ajaxForm = function (form, url) {
      			
	      		if (!validation.validateForm(form)) return false; 
	      		var data = form.serialize();
	   		 };   

return {
		init: init
	};

})();

contactMe.init();
