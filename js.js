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
        left = (Math.random() * $('#select-select').val() | 0) + 1;
        right = (Math.random() * $('#select-select').val() | 0) + 1;
        $('#div-question').text(left + ' x ' + right);
        $('#show-answer').text('');
        $('#div-result').text('');
    });
    
    left = (Math.random() * $('#select-select').val() | 0) + 1;
    right = (Math.random() * $('#select-select').val() | 0) + 1;
    $('#div-question').text(left + ' x ' + right);
    $('#answer-input input').focus();
 
    
    $('#multi-table td').click(function(){ 
        value = $(this).text();
        intValue = parseInt(value);
        $('#show-answer').text(intValue);	
        if (intValue == (left * right)) {
            $('#div-result').text('Correct');
            $('#show-answer').css($('#panel').css('color'));

        } else {
            $('#div-result').text('Wrong');
            $('#show-answer').css('color', 'red');
        }
    });
    
    
    // either input method
    $('#answer-input input').keyup(function(e) {
      if(e.keyCode == 13) {
 	     text_input_function();
          
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
            $('#show-answer').css($('#panel').css('color'));
        } else {
            $('#div-result').text('Wrong');
            $('#show-answer').css('color', 'red');
        }
        $('#show-answer').text(submitted_answer);
        $('#answer-input input').focus();
    }
    
});
