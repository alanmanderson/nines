<!DOCTYPE HTML>
<html>
<head>
<style type="text/css">
   @import 'stylesheets/css.php?page=nines';
</style> 
<script type="text/javascript" src="javascript/jquery.js"></script>
<script type="text/javascript" src="javascript/card.js"></script>
<script type="text/javascript" src="javascript/ninesModel.js"></script>
<script type="text/javascript">
   var selectedElt="";

   function SpaceBarHit(event) {
     if (event.which==13 || event.keyCode==13){
       if (selectedElt!=""){
	 controller.action(selectedElt);
       }
     }
   }

   function clickEvent(elt) {
     if (elt.id==selectedElt) {
       selectedElt="";
       $("#"+elt.id).toggleClass("selected");
     } else {
       $("#"+elt.id).toggleClass("selected");
       $("#"+selectedElt).toggleClass("selected");
       selectedElt = elt.id;
     }
   }

</script>
</head>
<body onkeydown="SpaceBarHit(event)">
<div id="container">

  <div id="header">
    <div id="piles">
      <div id="drawPile" onClick="clickEvent(this)">
        <img class="card" id="drawCard" src="images/Back.png"/>
        <h1 class="cardValue" id="drawCardValue"></h1>
        <div id="deckCount"></div>
      </div>
      <div id="discardPile" onClick="clickEvent(this)">
        <img class="card" id="discardCard" src="images/Blank.png"/>
        <h1 class="cardValue" id="discardCardValue">Q</h1>
        <div id="discardCount"></div>
      </div>
    </div>
    <h3 id="stateBanner">testState</h3>
  </div>

  <div id="player1" class="player">
    <h2 id="p1Score"></h2>
    <div id="p1c1" class="card" onClick="clickEvent(this)">
     <img class="card" id="p1c1Img"/>
     <h1 class="cardValue" id="p1c1Val"></h1>
    </div>
    <div id="p1c2" class="card" onClick="clickEvent(this)">
     <img class="card" id="p1c2Img"/>
     <h1 class="cardValue" id="p1c2Val"></h1>
    </div>
    <div id="p1c3" class="card" onClick="clickEvent(this)">
     <img class="card" id="p1c3Img"/>
     <h1 class="cardValue" id="p1c3Val"></h1>
    </div>
    <div id="p1c4" class="card" onClick="clickEvent(this)">
     <img class="card" id="p1c4Img"/>
     <h1 class="cardValue" id="p1c4Val"></h1>
    </div>
    <div id="p1c5" class="card" onClick="clickEvent(this)">
     <img class="card" id="p1c5Img"/>
     <h1 class="cardValue" id="p1c5Val"></h1>
    </div>
    <div id="p1c6" class="card" onClick="clickEvent(this)">
     <img class="card" id="p1c6Img"/>
     <h1 class="cardValue" id="p1c6Val"></h1>
    </div>
    <div id="p1c7" class="card" onClick="clickEvent(this)">
     <img class="card" id="p1c7Img"/>
     <h1 class="cardValue" id="p1c7Val"></h1>
    </div>
    <div id="p1c8" class="card" onClick="clickEvent(this)">
     <img class="card" id="p1c8Img"/>
     <h1 class="cardValue" id="p1c8Val"></h1>
    </div>
    <div id="p1c9" class="card" onClick="clickEvent(this)">
     <img class="card" id="p1c9Img"/>
     <h1 class="cardValue" id="p1c9Val"></h1>
    </div>
  </div>

  <div id="player2" class="player">
    <h2 id="p2Score"></h2>
    <div id="p2c1" class="card" onClick="clickEvent(this)">
     <img class="card" id="p2c1Img"/>
     <h1 class="cardValue" id="p2c1Val"></h1>
    </div>
    <div id="p2c2" class="card" onClick="clickEvent(this)">
     <img class="card" id="p2c2Img"/>
     <h1 class="cardValue" id="p2c2Val"></h1>
    </div>
    <div id="p2c3" class="card" onClick="clickEvent(this)">
     <img class="card" id="p2c3Img"/>
     <h1 class="cardValue" id="p2c3Val"></h1>
    </div>
    <div id="p2c4" class="card" onClick="clickEvent(this)">
     <img class="card" id="p2c4Img"/>
     <h1 class="cardValue" id="p2c4Val"></h1>
    </div>
    <div id="p2c5" class="card" onClick="clickEvent(this)">
     <img class="card" id="p2c5Img"/>
     <h1 class="cardValue" id="p2c5Val"></h1>
    </div>
    <div id="p2c6" class="card" onClick="clickEvent(this)">
     <img class="card" id="p2c6Img"/>
     <h1 class="cardValue" id="p2c6Val"></h1>
    </div>
    <div id="p2c7" class="card" onClick="clickEvent(this)">
     <img class="card" id="p2c7Img"/>
     <h1 class="cardValue" id="p2c7Val"></h1>
    </div>
    <div id="p2c8" class="card" onClick="clickEvent(this)">
     <img class="card" id="p2c8Img"/>
     <h1 class="cardValue" id="p2c8Val"></h1>
    </div>
    <div id="p2c9" class="card" onClick="clickEvent(this)">
     <img class="card" id="p2c9Img"/>
     <h1 class="cardValue" id="p2c9Val"></h1>
    </div>
  </div>
</div>
<script type="text/javascript">
   var controller = new NinesController();
</script>
</body>
</html>