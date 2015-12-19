var contactMe = (function (){

var init = function(){

				_setUpListners();
			},
			
			_setUpListners = function (){
				$('#contact_form').on('submit', _submitForm); 
			},
		
			_submitForm = function (ev) {
				 ev.preventDefault(); 
				 var form = $(this),    
	          	 url = '/contact_me.php', 
	          	 defObject = _ajaxForm(form, url); 
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
