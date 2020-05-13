$( function() {
    $( "#pierrej1" ).draggable();
    $( "shifumij1" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });











});


