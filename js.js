jQuery(document).ready(function($) {
  // Code using $ as usual goes here.

    
    $('#multi-table td').click(function(){ 
        value = $(this).text();
        intValue = parseInt(value);
        $('#show-answer').text(intValue);	
        if (intValue == (left * right)) {
            $('#div-result').text('Correct');    
        } else {
            $('#div-result').text('Wrong');
        }
    });

    $('#next-button').click(function() {
        left = (Math.random() * 12 | 0) + 1;
        right = (Math.random() * 12 | 0) + 1;
        $('#div-question').text(left + ' x ' + right);
        $('#show-answer').text('');
        $('#div-result').text('');
    });
    
    left = (Math.random() * 12 | 0) + 1;
    right = (Math.random() * 12 | 0) + 1;
    $('#div-question').text(left + ' x ' + right);
});
