$(document).ready(function() {



    $( '#ajaxcontent' ).load( 'content.html .text' );

    // $( 'button' ).click(function() {
    //     $.get( 'content.html', function(data) {
    //     	// alert (data);
    //     	var content = $(data).find( '#bild' );
    //     	alert ( content );
    //         $( '#ajaxcontent' ).html($(data).find('#bild'));
    //     });
    // });

    $( 'button' ).click(function() {
        $( '#ajaxcontent' ).load( 'content.html #bild' );
    });


});
