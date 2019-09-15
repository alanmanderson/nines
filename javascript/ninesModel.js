var TurnStates = Object.freeze({"START":1, "P1SELECT3":2, "P2SELECT3":3,
				"DRAW":4, "DRAWN":5, "CHECKWINNER":6, "FINISH":7});

function fisherYates ( myArray ) {
    var i = myArray.length;
    while ( i-- ) {
	var j = Math.floor( Math.random() * ( i ) );
	var tempi = myArray[i];
	myArray[i] = myArray[j];
	myArray[j] = tempi;
    }
}

function NinesModel () {
    this.p1Name="Alan";
    this.p2Name="Heather";
    this.p1Cards=new Array();
    this.p2Cards=new Array();
    this.curPlayer=this.p1Name;
    this.State = TurnStates.START;
    this.Deck = new Array();
    this.Discard = new Array();
    this.drawnCard = null;
    this.initialize = function () {
	this.Deck = [
		     new Card(0,"Joker"),
		     new Card(0,"Joker"),
		     new Card(2,"Hearts"),
		     new Card(3,"Hearts"),
		     new Card(4,"Hearts"),
		     new Card(5,"Hearts"),
		     new Card(6,"Hearts"),
		     new Card(7,"Hearts"),
		     new Card(8,"Hearts"),
		     new Card(9,"Hearts"),
		     new Card(10,"Hearts"),
		     new Card(11,"Hearts"),
		     new Card(12,"Hearts"),
		     new Card(13,"Hearts"),
		     new Card(1,"Hearts"),
		     new Card(2,"Spades"),
		     new Card(3,"Spades"),
		     new Card(4,"Spades"),
		     new Card(5,"Spades"),
		     new Card(6,"Spades"),
		     new Card(7,"Spades"),
		     new Card(8,"Spades"),
		     new Card(9,"Spades"),
		     new Card(10,"Spades"),
		     new Card(11,"Spades"),
		     new Card(12,"Spades"),
		     new Card(13,"Spades"),
		     new Card(1,"Spades"),
		     new Card(2,"Diamonds"),
		     new Card(3,"Diamonds"),
		     new Card(4,"Diamonds"),
		     new Card(5,"Diamonds"),
		     new Card(6,"Diamonds"),
		     new Card(7,"Diamonds"),
		     new Card(8,"Diamonds"),
		     new Card(9,"Diamonds"),
		     new Card(10,"Diamonds"),
		     new Card(11,"Diamonds"),
		     new Card(12,"Diamonds"),
		     new Card(13,"Diamonds"),
		     new Card(1,"Diamonds"),
		     new Card(2,"Clubs"),
		     new Card(3,"Clubs"),
		     new Card(4,"Clubs"),
		     new Card(5,"Clubs"),
		     new Card(6,"Clubs"),
		     new Card(7,"Clubs"),
		     new Card(8,"Clubs"),
		     new Card(9,"Clubs"),
		     new Card(10,"Clubs"),
		     new Card(11,"Clubs"),
		     new Card(12,"Clubs"),
		     new Card(13,"Clubs"),
		     new Card(1,"Clubs")
		     ];
	fisherYates(this.Deck);
	for(var i=0;i<9;i++){
	    this.p1Cards.push(this.Deck.pop());
	    this.p2Cards.push(this.Deck.pop());
	}
	this.Discard.push(this.Deck.pop());
	this.Discard[0].isFaceUp=true;
	this.curState=TurnStates.P1SELECT3;
    }
    this.initialize();
    this.switchPlayers = function () {
	this.curPlayer = (this.curPlayer==this.p1Name) ? this.p2Name : this.p1Name;
    }
}

function NinesController() {
    this.model = new NinesModel();
    this.updateView = function() {
	$("#deckCount").html(this.model.Deck.length.toString());
        $("#discardCount").html(this.model.Discard.length.toString());
	$("#discardCard").attr("src","images/"+this.model.Discard[this.model.Discard.length-1].suit+".png");
	if (this.model.drawnCard!=null){
	    setCardProps("drawCard","drawCardValue",this.model.drawnCard);
	} else {
	    $("#drawCardValue").hide();
	    $("#drawCard").attr("src","images/Back.png");
	}
	for(var i=1;i<=9;i++){
	    setCardProps("p1c"+i+"Img","p1c"+i+"Val",this.model.p1Cards[i-1]);
	    setCardProps("p2c"+i+"Img","p2c"+i+"Val",this.model.p2Cards[i-1]);
	}
	setCardProps("discardCard","discardCardValue",
		     this.model.Discard[this.model.Discard.length-1]);
	setStateBanner(this.model.curState,this.model.curPlayer);
	$("#p1Score").html("Current Score: "+getScore(this.model.p1Cards));
	$("#p2Score").html("Current Score: "+getScore(this.model.p2Cards));
    };

    this.updateView();
    this.drawCard = function() {
	this.model.curState=TurnStates.DRAWN;
	this.model.drawnCard = this.model.Deck.pop();
	this.model.drawnCard.isFaceUp=true;
    }

    this.action = function(selectedElt) {
	switch(this.model.curState){
	case TurnStates.START:
	    break;
	case TurnStates.P1SELECT3:
   	    this.selectCard(1,selectedElt);
            break;
	case TurnStates.P2SELECT3:
   	    this.selectCard(2,selectedElt);
            break;
	case TurnStates.DRAW:
	    if (selectedElt=="drawPile"){
	        this.drawCard();
	    } else if (selectedElt=="discardPile"){
		this.model.drawnCard = this.model.Discard.pop();
		this.model.curState=TurnStates.DRAWN;
	    }
	    break;
	case TurnStates.DRAWN:
	    if (selectedElt=="discardPile"){
		this.model.Discard.push(this.model.drawnCard);
		this.changeTurns();
	    } else if (this.model.curPlayer==this.model.p1Name &&
		       getPlayer(selectedElt)==1){
		var index = getIndex(selectedElt);
		var selectedCard = this.model.p1Cards[index];
		selectedCard.isFaceUp=true;
		this.model.p1Cards[index] = this.model.drawnCard;
		this.checkThreeInARow(1);
		this.model.Discard.push(selectedCard);
		this.changeTurns();
	    } else if (this.model.curPlayer==this.model.p2Name &&
		       getPlayer(selectedElt)==2){
		var index = getIndex(selectedElt);
		var selectedCard = this.model.p2Cards[index];
		selectedCard.isFaceUp=true;
		this.model.p2Cards[index] = this.model.drawnCard;
		this.checkThreeInARow(2);
		this.model.Discard.push(selectedCard);
		this.changeTurns();
	    }
	    break;
	case TurnStates.CHECKWINNER:
	    var player = getPlayer(selectedElt);
     	    var index = getIndex(selectedElt);
	    var cards = (player==1)? this.model.p1Cards:this.model.p2Cards;
	    if (!cards[index].isFaceUp){
		cards[index].isFaceUp=true;
		var allUp=true;
		for(var i=0;i<9;i++){
		    if (cards[i]!=null && !cards[i].isFaceUp){
			allUp=false;
			break;
		    }
		}
	    }
	    if (allUp){
		this.model.curState = TurnStates.FINISH;
		this.updateView();
		var p1Score = getScore(this.model.p1Cards);
		var p2Score = getScore(this.model.p2Cards);
		if (p1Score<p2Score){
		    alert(this.model.p1Name+" Wins the game!");
		} else if (p1Score>p2Score){
		    alert(this.model.p2Name+" Wins the game!");
		} else {
		    alert("The game ends in a tie!");
		}
	    }
	    break;
	case TurnStates.FINISH:
	    break;
	default:
      	}
	this.updateView();
    }
    this.changeTurns=function () {
	if (this.checkOver()){
	    this.model.curState=TurnStates.CHECKWINNER;
	} else {
	    this.model.curState=TurnStates.DRAW;
	}
	this.model.drawnCard=null;
	this.model.switchPlayers();
    }

    this.selectCard = function(player, elt){
	if (selectedElt.slice(0,3)=="p"+player+"c"){
	    var index = getIndex(selectedElt);
	    var cards;
	    if (player==1){
		cards = this.model.p1Cards;
	    } else {
		cards = this.model.p2Cards;
	    }
	    cards[index].isFaceUp=true;
	    var faceupCount=0;
	    for(var i=0;i<9;i++){
		if (cards[i].isFaceUp){
		    faceupCount++;
		}
	    }
	    if (faceupCount==3){
		this.model.curState++;
		if (this.model.curState==TurnStates.P2SELECT3){
		    this.model.curPlayer=this.model.p2Name;
		    this.checkThreeInARow(1);
		} else {
		    var p1Sum=0;
		    var p2Sum=0;
		    for (var i =0;i<9;i++){
			if(this.model.p1Cards[i].isFaceUp){
			    p1Sum+=Math.min(this.model.p1Cards[i].value,10);
			}
			if(this.model.p2Cards[i].isFaceUp){
			    p2Sum+=Math.min(this.model.p2Cards[i].value,10);
			}
		    }
		    this.model.curPlayer = (p1Sum>=p2Sum)?this.model.p1Name :
		                                          this.model.p2Name;
		    this.checkThreeInARow(2);
		}
	    }
	}
    }
    this.checkOver = function(){
	var cards = (this.model.curPlayer==this.model.p1Name)?this.model.p2Cards:
	this.model.p1Cards;
	return cards.every(isFaceUp);
    }

    this.checkThreeInARow = function (player){
	var rows = [[0,1,2],
		    [3,4,5],
		    [6,7,8],
		    [0,3,6],
		    [1,4,7],
		    [2,5,8]];
	var cards=(player==1)?this.model.p1Cards : this.model.p2Cards;
	for (var i=0;i<6;i++){
	    var indices=rows[i];
	    if (equalValues(cards[indices[0]],cards[indices[1]],cards[indices[2]])){
		this.model.Discard.push(cards[indices[0]]);
		this.model.Discard.push(cards[indices[1]]);
		this.model.Discard.push(cards[indices[2]]);
		cards[indices[0]] = null;
		cards[indices[1]] = null;
		cards[indices[2]] = null;
	    }
	}
    }
}

function isFaceUp(card, index, array1){
    return (card==null || card.isFaceUp);
}

function equalValues(card1,card2,card3){
    if (card1==null || card2==null || card3==null) return false;
    return card1.value==card2.value && card1.value==card3.value && 
	   card1.isFaceUp && card2.isFaceUp && card3.isFaceUp; 
}

function setCardProps(imgElt,valueElt,card) {
    if (card==null){
	$("#"+imgElt).attr("src","images/Blank.png");
	$("#"+valueElt).hide();
    }else if (card.isFaceUp){
	$("#"+imgElt).attr("src","images/"+card.suit+".png");
	$("#"+valueElt).show();
	$("#"+valueElt).html(card.getValue());
    } else {
	$("#"+imgElt).attr("src","images/Back.png");
	$("#"+valueElt).hide();
    }
}

function setStateBanner(state,curPlayer){
    $("#stateBanner").html("It is " + curPlayer+"'s turn.");
}

function getScore(cards){
    var score = 0;
    for(var i=0;i<9;i++) {
	var card=cards[i];
	if (card!=null && card.isFaceUp){
	    if (card.value==0){
		score -= 10;
	    } else if (card.value>=10){
		score +=10;
	    } else if (card.value==1){
	    } else {
		score += card.value;
	    }
	}
    }
    return score;
}

function getIndex(selectedElt){
    return parseInt(selectedElt.slice(3,4))-1;
}

function getPlayer(selectedElt){
    return parseInt(selectedElt.slice(1,2));
}