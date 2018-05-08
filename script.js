	var span = $('span'),
	    paragraphs = $('p'),
	    button = '<button class="btn" data-tmp="' + index + '">Click me</button>';

    span.each(function(index, element) {
        if(index % 2 === 0) {
            $(element).css('color', 'red');
        };
    });

    paragraphs.each(function(index, element) {
        $(element).append(button);
    });

    $('button').click(function() {
        alert($(this).attr('data-tmp'));
    });