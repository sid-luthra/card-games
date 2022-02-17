require.context(
  '../assets/svg-cards',
);

const Table = (() => {
  const displayCards = (cards) => {
    const content = document.querySelector('#content');
    const fragment = new DocumentFragment();
    cards.forEach((card) => {
      const cardImageSrc = `./images/${card}.svg`;
      const container = document.createElement('div');
      container.classList.add('card-container');
      container.addEventListener('click', (e) => {
        e.target.classList.add('selected');
      });
      const img = document.createElement('img');
      img.src = cardImageSrc;
      img.classList.add('card');
      container.appendChild(img);
      fragment.appendChild(container);
    });
    content.appendChild(fragment);
  };

  const clearCards = () => {
    const allCards = document.querySelectorAll('.card');
    if (allCards) {
      allCards.forEach((card) => card.remove());
    }
  };

  return { displayCards, clearCards };
})();

export default Table;
