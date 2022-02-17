const values = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];

const Deck = (() => {
  let cards = [];

  const reset = () => {
    cards = [];
    suits.forEach((suit) => {
      values.forEach((value) => {
        const card = `${value}_of_${suit}`;
        cards.push(card);
      });
    });
  };

  const shuffle = () => {
    cards.sort((a, b) => {
      const aRandom = Math.random();
      const bRandom = Math.random();
      return aRandom - bRandom;
    });
  };

  const dealFrom = (count) => {
    const dealtCards = [];
    const remaining = countRemaining();
    if (remaining >= count) {
      for (let i = 0; i < count; i++) {
        const newCard = cards.pop();
        dealtCards.push(newCard);
      }
      return dealtCards;
    }
  };

  const countRemaining = () => cards.length;

  return {
    cards, reset, shuffle, dealFrom,
  };
})();

export default Deck;
