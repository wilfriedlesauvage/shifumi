/* -------------- Rejouer la partie ! ------------------------ */ 

$('#refresh').on('click', function() {
  location.reload();
});



var pierrej1 = $("#pierrej1").data('id');
var feuillej1 = $("#feuille1").data('id');
var ciseauxj1 = $("#ciseaux1").data('id');
var shifumij1 = $("#shifumij1").data('id');

$( function() {
    $('#pierrej1').draggable({
        revert : 'valid' // sera renvoyé à sa place s'il est déposé dans #drop
    });

    $('#pierrej1').draggable({
        revert : 'invalid' // sera renvoyé à sa place s'il n'est pas déposé dans #drop
    });

    $('#shifumij1').droppable({

        drop : function(){
            $("#pierrej1").data('id');
            alert('pierre');
        } 

        if ()

    });
});







