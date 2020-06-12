/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  var values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var suits = [
    {
      suit: "♣︎",
      color: "black"
    },
    {
      suit: "♥︎",
      color: "red"
    },
    {
      suit: "♠︎",
      color: "black"
    },
    {
      suit: "♦︎",
      color: "red"
    }
  ];
  var value = values[this.Math.floor(Math.random() * values.length)];
  var suit = suits[this.Math.floor(Math.random() * suits.length)];

  var card = document.createElement("div");
  var suitUpper = document.createElement("div");
  var suitLower = document.createElement("div");
  var valueMiddle = document.createElement("div");

  card.classList.add("card");
  suitUpper.classList.add("suit");
  suitLower.classList.add("suit", "right");
  valueMiddle.classList.add("value");

  valueMiddle.innerHTML = value;
  suitUpper.innerHTML = suit.suit;
  suitUpper.style.color = suit.color;
  suitLower.innerHTML = suit.suit;
  suitLower.style.color = suit.color;

  card.appendChild(suitUpper);
  card.appendChild(valueMiddle);
  card.appendChild(suitLower);

  document.body.appendChild(card);
};
