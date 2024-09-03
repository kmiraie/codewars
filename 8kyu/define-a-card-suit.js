// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

//My Solution

function defineSuit(card) {
    let suit = card.slice(-1)
    switch(suit) {
        case '♣':
          return 'clubs';
          break;
        case '♦':
          return 'diamonds';
          break;
        case '♥':
          return 'hearts';
          break;
        case '♠':
          return 'spades';
          break;
        default:
          return 'unknown'
    }   
  }