jQuery(document).ready(function($) {
  // Code using $ as usual goes here.



  $('#multi-table td').click(function(){ 
	value = $(this).text();
	intValue = parseInt(value);
	if (intValue == 20) {
	  $('#show-answer').text(intValue);	
  	} else {

	  $('#show-answer').text('Not 20');	
	}
  });

	
});
