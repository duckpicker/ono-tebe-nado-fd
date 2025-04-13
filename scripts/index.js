class Card {
    cardTitle;
    cardDescription;
    cardBackgroundImage;

    constructor(cardTitle, cardDescription, cardBackgroundImage) {
        this.cardTitle = cardTitle;
        this.cardDescription = cardDescription;
        this.cardBackgroundImage = cardBackgroundImage;
    }
}

const Cards = [
    new Card(
        "Фильм режиссёра, который бросил киношколу",
        "Не просто бросил, а ушёл с первой лекции. Какой была бы ваша ставка, если бы вы не знали, что режиссёр — Пол Томас Андерсон?",
        "../images/first-lot.png"
    ),
    new Card(
        "Книга, где описан один скучный день из жизни рекламного агента",
        "Объёмом почти в тысячу страниц. Иногда без знаков препинания и с переходами на древнеанглийский. В ней одновременно рассказывается о 16 июня 1904 года и об истории литературы, начиная с античных времён. И это всё накладывается на эпическую поэму Гомера. Сколько бы вы поставили на «Улисса» Джеймса Джойса?",
        "../images/second-lot.jpg"
    ),
    new Card(
        "Картина, которую повторит даже 5-летний сын маминой подруги",
        "Ну действительно, там линия, тут кружочек, а здесь и вовсе что-то похожее на инфузорию-туфельку. Никаких полей, лесов, котиков... Сколько бы вы на такое поставили, если бы не знали, что это — одна из революционных работ Кандинского?",
        "../images/third-lot.png"
    )
];

function appendCards(cards) {
    const cardList = document.querySelector(".lots__list");

    cards.forEach(card => {
        const newCard = document.createElement("li");
        newCard.classList.add("lots__item");
        newCard.style.backgroundImage = `url(${card.cardBackgroundImage})`;

        const anchor = document.createElement("a");
        anchor.href = "/#";
        newCard.appendChild(anchor);

        const wrapper = document.createElement("article");
        wrapper.classList.add("lots__lot-wrapper");
        anchor.appendChild(wrapper);

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        wrapper.appendChild(overlay);

        const content = document.createElement("div");
        content.classList.add("lots__lot-content", "content");
        wrapper.appendChild(content);

        const title = document.createElement("h3");
        title.classList.add("lots__lot-title");
        title.innerText = card.cardTitle;
        content.appendChild(title);

        const description = document.createElement("p");
        description.classList.add("lots__lot-description");
        description.innerText = card.cardDescription;
        content.appendChild(description);

        cardList.appendChild(newCard);
    });
}

appendCards(Cards);