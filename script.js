"use striict";

const overlay = document.querySelector(".overlay");

// ADVICE
const displayAdvice = document.querySelector("#advice-screen");
const getAdviceButton = document.querySelector(".get-advice");
const adviceButton = document.querySelector(".advice-button");
const adviceModale = document.querySelector("#advice-modale");
const adviceCloseButton = document.querySelector(".close-advise-modale");

const getAdvice = async function () {
  const data1 = await fetch("https://api.adviceslip.com/advice");
  const data2 = await data1.json();
  const {
    slip: { advice },
  } = data2;
  displayAdvice.textContent = advice;
};

const openAdviceModale = () => {
  adviceModale.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeAdviceModale = () => {
  adviceModale.classList.add("hidden");
  overlay.classList.add("hidden");
};

adviceButton.addEventListener("click", () => openAdviceModale());
adviceCloseButton.addEventListener("click", () => closeAdviceModale());
overlay.addEventListener("click", () => closeAdviceModale());
getAdviceButton.addEventListener("click", getAdvice);

// QUOTE
const displayQuote = document.querySelector("#quote-screen");
const getQuoteButton = document.querySelector(".get-quote");
const quoteButton = document.querySelector(".quote-button");
const quoteModale = document.querySelector("#quote-modale");
const quoteCloseButton = document.querySelector(".close-quote-modale");
const quoteAuthorScreen = document.querySelector("#quote-author");

const getQuote = async function () {
  const data1 = await fetch("https://api.goprogram.ai/inspiration");
  const data2 = await data1.json();
  console.log(data2);
  const { quote, author } = data2;
  displayQuote.textContent = `"${quote}"`;
  quoteAuthorScreen.textContent = `-${author}`;
};

const openQuoteModale = () => {
  quoteModale.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeQuoteModale = () => {
  quoteModale.classList.add("hidden");
  overlay.classList.add("hidden");
};

quoteButton.addEventListener("click", () => openQuoteModale());
quoteCloseButton.addEventListener("click", () => closeQuoteModale());
overlay.addEventListener("click", () => closeQuoteModale());
getQuoteButton.addEventListener("click", getQuote);
