/* -------------- Rejouer la partie ! ------------------------ */ 
$( function() {
  $('#refresh').on('click', function() {
    location.reload();
  });

/* -------------- PARTIE JOUEUR1 ------------------------ */ 


      var arrayOrdi = ['Pierre', 'Feuille', 'Ciseaux'];
      var gamerChoice = null;
      var counterGames = 0;
      var score = 0;



      $('.choice').draggable({
        revert : true,//Renvoie l'élément toujours à sa place
        snap : '#shifumij1',//Elles sont attirées par le bloc droppable
        snapMode: 'inner' // Permet le magnétisme sur l'interieur du block
      });

      // J'ajoute un évènement mouseup à mes éléments
      // En fonction de l'image choisi j'attribue une valeur au choix du joueur
      $('#pierrej1').mouseup(function(){
        gamerChoice = 0;
        // Je vérifie dans ma console ce qui est stocker dans la variable gamerChoice
        console.log('Choix du joueur' + gamerChoice);
      });
      $('#feuillej1').mouseup(function(){
        gamerChoice = 1;
        console.log('Choix du joueur' + gamerChoice);
      });
      $('#ciseauxj1').mouseup(function(){
        gamerChoice = 2;
        console.log('Choix du joueur' + gamerChoice);
      });

      // Je rend ma div droppable
      $( "#shifumij1" ).droppable({
      // Elle n'accepte que les éléments qui ont la classe answer
      accept: '.answer',
      // Je lui ajoute l'évènement jqueryUI drop.
      drop : function(event, ui){ // Au moment de l'évènement droppable
      counterGames++;

      // L'ordinateur choisi aléatoirement un choix dans le tableau définis précédemment
      var computerChoice = Math.floor(Math.random() * arrayOrdi.length);
      console.log('Choix de l\'ordinateur' + computerChoice);
          if (computerChoice == gamerChoice){
            alert("égalité ! l\'ordinateur à selectionné : " + computerChoice);
          } else if ((gamerChoice == 0 && computerChoice == 2) || 
          (gamerChoice == 1 && computerChoice == 0) || 
          (gamerChoice == 2 && computerChoice == 1)){
            alert('Gagné !');
          } else {
            alert("perdu ! l\'ordinateur à selectionné : " + computerChoice);
          }

      } 

      });

});