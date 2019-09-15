<?php
header('content-type:text/css');
header("Expires: ".gmdate("D, d M Y H:i:s", (time()+900)) . " GMT"); 

if ($_GET["page"]=="nines"){

} else {
}
/* Company Colours */ 
$blue='#369';
$green='#363';
$lgreen='#cfc';
$color1='#ddeef6';		/* Light blue-green*/
$color2='#27b';				/* Deep Blue */
$color3='#88bbd4';		/* Light blue ocean */
$color4='#666';				/* Greyish bluish*/
$color5='#789';				/* Grey */
$color6='#6AC';				/* Lightish Blue*/
$color7='#39d';				/* Solid blue*/
$white='#fff';				/* White*/
$black='#000';
print <<< ENDCSS

body, html {
  background: $white;
  text-align: center;
}

body {
  color:$black;
}

#container{
  margin-left: auto;
  margin-right: auto;
  width:1000px;
  text-align: left;
/*border:3px solid blue;*/
  overflow: auto;
}

#board{
  width:950px;
  margin-left: auto;
  margin-right: auto;
/*border: 3px solid yellow;*/
}

div#piles{
  width: 400px;
  margin-left:auto;
  margin-right:auto;
/*  border: 5px solid green;*/
  overflow: auto;
}

#drawPile, #discardPile {
  width:48%;
  position: relative;
  float:left;
  text-align:center;
  border:3px solid green;
}


#drawPile {
/*background-color: blue;*/
}

#discardPile{
/*  background-color: red;*/
}

#drawCardValue {

}

#deckCount, #discardCount{
  text-align:center;
  font-size:30px;
  width:100%;
  clear:both;
}

h3#stateBanner {
text-align:center;
}

.player {
width:50%;
float:left;
overflow: auto;
}

#player1 {
/*background-color: #FFD700;*/
}

#player2 {
/*background-color: #EEEEEE;*/
}

h1.cardValue{
 top: -30px;
 left: 10px;
 position: absolute;
 font-size: 56px;
  /*visibility: hidden;*/
}


img.card {
  width: 98%;
  /*  width: 170px;
  height: 290px;
  border: 3px solid black;
  border-radius: 15px;*/
}

div.card {
  float:left;
  width: 30%;
  border:3px solid green;
  margin:4px 4px 4px 4px;
  position: relative;
}

.selected {
  border: 3px solid blue !important;
}

.filler {
clear:both;
width:100%;
}

ENDCSS;

?>