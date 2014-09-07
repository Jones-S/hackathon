$(document).ready(function() {



    $( '#ajaxcontent' ).load( 'content.html .text' );

    $( 'button' ).click(function() {
        $.get( 'content.html', function(data) {
        	// alert (data);
            var html = jQuery.parseHTML(data);
            console.log(html);
        	var content = $(html).find( '#bild' );
        	console.log(content );
            $( '#ajaxcontent' ).html(content);
        });
    });

    // $( 'button' ).click(function() {
    //     $( '#ajaxcontent' ).load( 'content.html #bild' );
    // });


});
