import shuffle from 'lodash.shuffle';
import CardsDeck from './deckOfCards';

const CARDS_NUMBERS = 8;

export default () => {
  const packOfCards = CardsDeck();
  let cards = [];

  while (cards.length < CARDS_NUMBERS) {
    const index = Math.floor(Math.random() * packOfCards.length); 
    const card = {
      image: packOfCards.splice(index, 1)[0], //extraer la carta que está en el indice
      guessedCard: false //para chequear cuando el usuario ha encontrado la carta
    };

    cards.push(card);
    cards.push({...card}); //se clona la carta pero con otra referencia (se usa express operation)
  }

  return shuffle(cards); //método shuffle para mezclar cartas

}




