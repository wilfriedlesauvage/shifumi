/* -------------- Rejouer la partie ! ------------------------ */ 
$( function() {
      $('#refresh').on('click', function() {
        location.reload();
      });

/* -------------- PARTIE JOUEUR1 ------------------------ */ 


    var arrayJ1 = ['Pierre', 'Feuille', 'Ciseaux'];
    var arrayOrdi = ['Pierre', 'Feuille', 'Ciseaux'];
    var gamerChoice = null;
    var computerChoice = null;
    
    


    $('.choice').draggable({
      revert : true,//Renvoie l'élément toujours à sa place
      snap : '#shifumij1',//Elles sont attirées par le bloc droppable
      snapMode: 'inner' // Permet le magnétisme sur l'interieur du block
    });

    // J'ajoute un évènement mouseup à mes éléments
    // En fonction de l'image choisi j'attribue une valeur au choix du joueur
    $('#pierrej1').mouseup(function(){
      arrayJ1 = 0;
      // Je vérifie dans ma console ce qui est stocker dans la variable gamerChoice
      console.log('Choix du joueur' + gamerChoice);
    });
    $('#feuillej1').mouseup(function(){
      arrayJ1 = 1;
      console.log('Choix du joueur' + gamerChoice);
    });
    $('#ciseauxj1').mouseup(function(){
      arrayJ1 = 2;
      console.log('Choix du joueur' + gamerChoice);
    });
  
    // Je rend ma div droppable
    $( "#shifumij1" ).droppable({
    // Elle n'accepte que les éléments qui ont la classe answer
    accept: '.answer',
    // Je lui ajoute l'évènement jqueryUI drop.
    drop : function(event, ui){ // Au moment de l'évènement droppable
    // L'ordinateur choisi aléatoirement un choix dans le tableau définis précédemment
    var arrayOrdi = Math.floor(Math.random() * arrayOrdi.length);
    console.log('Choix de l\'ordinateur' + computerChoice);
    }

    


  });
});
