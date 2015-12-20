var validation = (function (){

	var init = function(){
			
			_setUpListners();
		},
		// Validation all form
		validateForm = function (form) { 
	    	var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'), // Don't check this form
	        	valid = true; 

	      	$.each(elements, function(index, val) { 
	        	var element = $(val), 
	            	val = element.val(), 
	            	pos = element.attr('qtip-position'); 

	            
	        	if(val.length === 0){ 
	        		element.addClass('error'); 
	         		_createQtip(element, pos); 
	          		valid = false;
	        	} 

	     	}); 

	    	return valid;
      	},

  _setUpListners = function () {
	    	$('form').on('keydown', '.error', _removeError); 
	    	$('form').on('reset', _clearForm); 
	    	},
	    
    	_removeError = function() {
	      $(this).removeClass('error');
	    },
	    
	    _clearForm = function (form) { 
	      var form = $(this);
	      form.find('.input, .textarea').trigger('hideTooltip'); 
	      form.find('.error').removeClass('error'); 
	      form.find('.error-message, .success-message').text('').hide(); 
	    },
	    
	    _createQtip = function (element, position) {
	     
	    	if (position === 'right') {
	        	position = {
	        		my: 'left center',
	        		at: 'right center'
	        	}
	    	}else{
	        	position = {
	          		my: 'right center',
	          		at: 'left center',
	          		adjust: {
	            		method: 'shift none'
	          		}
	       		}
	      	}
	     element.qtip({
	      	content: {
	        	text: function() {
	            	return $(this).attr('qtip-content');
	         	}
	        },
	        show: {
	        	event: 'show'
	        },
	        hide: {
	        	event: 'keydown click hideTooltip'
	        },
	        position: position,
	        style: {
	        	classes: 'qtip-mystyle qtip-rounded',
	        	tip: {
		            height: 10,
		            width: 16
	          	}
	        }
	      }).trigger('show');
    	};
    
	return {
		init: init,
		validateForm: validateForm
	};

})();
validation.init();