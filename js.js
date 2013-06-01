jQuery(document).ready(function($) {
  // Code using $ as usual goes here.
    
    $('#select-color').change(function() {
        switch($('#select-color').val()) 
        {
            case 'Blue':
                $('#panel').css('color', 'White');
                break;
            case 'Green':
                $('#panel').css('color', 'White');
                break;
            case 'Purple':
                $('#panel').css('color', 'White');
                break;        
            case 'Red':
                $('#panel').css('color', 'White');
                break;   
            default:
                $('#panel').css('color', 'black');
                break; 
        }
        $('#panel').css('background-color', $('#select-color').val());
    });


    $('#next-button').click(function() {
            next_problem(); 
    });
    
    function next_problem() {
        left = (Math.random() * $('#select-select').val() | 0) + 1;
        right = (Math.random() * $('#select-select').val() | 0) + 1;
        $('#div-question').text(left + ' x ' + right);
        $('#show-answer').text('');
        $('#div-result').text('');
        $('#show-answer').css($('#panel').css('color'));
        $('#answer-input input').focus();
    }
    
    left = (Math.random() * $('#select-select').val() | 0) + 1;
    right = (Math.random() * $('#select-select').val() | 0) + 1;
    $('#div-question').text(left + ' x ' + right);
    $('#answer-input input').focus();
 
    
    $('#multi-table td').click(function(){ 
        value = $(this).text();
        intValue = parseInt(value);
        	
        if (intValue == (left * right)) {
            $('#div-result').text('Correct');
            $('#show-answer').css('color', $('#panel').css('color'));

        } else {
            $('#div-result').text('Try again.');
            $('#show-answer').css('color', 'red');
        }
        $('#answer-input input').focus();
        $('#show-answer').text(intValue);
    });
    
    
    // either input method
    $('#answer-input input').keyup(function(e) {
      if(e.keyCode == 13) {

        if($('#answer-input input').val().length == 0) {
            next_problem();
        }  else {   	  
            text_input_function();
        } 
      }
});
    $('#answer-input button').click(function() {
            text_input_function();
    });

    
    function text_input_function() {
        submitted_answer = $('#answer-input input').val();
        $('#answer-input input').val('');
        if (submitted_answer == (left * right)) {
            $('#div-result').text('Correct');
            $('#show-answer').css('color', $('#panel').css('color'));
        } else {
            $('#div-result').text('Try again.');
            $('#show-answer').css('color', 'red');
        }
        $('#show-answer').text(submitted_answer);
        $('#answer-input input').focus();
    }
    
});
