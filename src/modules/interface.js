require.context(
    "../assets/svg-cards"
)

export const Table = (() => {

    const displayCards = (cards) => {
        const content = document.querySelector("#content");
        const fragment = new DocumentFragment();
        cards.forEach(card => {
            const cardImageSrc = `./images/${card}.svg`;
            const img = document.createElement("img");
            img.src = cardImageSrc;
            img.classList.add("card");
            fragment.appendChild(img);
        });
        content.appendChild(fragment);
    }

    const clearCards = () => {
        const allCards = document.querySelectorAll(".card");
        if (allCards) {
            allCards.forEach(card => card.remove());
        };
        
    }

    return {displayCards, clearCards};

})();