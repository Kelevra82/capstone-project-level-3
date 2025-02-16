function convertCard(cardObject) {
  let cardString = '<div className="card bg-dark text-primary fs-5">';
  cardString += '<img className="card-img-top" src="' + cardObject.src + '"/>';
  cardString += '<div className="card-body text-center">';
  cardString +=
    '<h3 className="card-title text-center">' + cardObject.title + "</h3>";
  cardString += cardObject.description;
  cardString += "</div>";
  cardString += "</div>";
  return cardString;
}
