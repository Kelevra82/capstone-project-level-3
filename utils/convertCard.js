function convertCard(cardObject) {
    let cardString = '<div class="card bg-dark text-primary fs-5">';
    cardString += '<img class="card-img-top" src="' + cardObject.src + '"/>';
    cardString += '<div class="card-body text-center">';
    cardString += '<h3 class="card-title text-center">' + cardObject.title + '</h3>';
    cardString += cardObject.description;
    cardString += '</div>';
    cardString += '</div>';
    return cardString;
}