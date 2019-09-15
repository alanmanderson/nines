function Card(value, suit) {
    this.value=value;
    this.suit=suit;
    this.isFaceup=false;
    this.getValue = function (){
	if (this.value==11) {
	    return "J";
	} else if(this.value==12){
	    return "Q";
	} else if(this.value==13){
	    return "K";
	} else if(this.value==1){
	    return "A";
	} else if(this.value==0){
	    return "JE";
	} else {
	    return this.value;
	}
    }
}



drawPileArr=[
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
