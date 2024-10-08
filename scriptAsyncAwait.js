//  I have copied the data from sciprtPromise.js and and  pasted it here.

// This is for week 8 lesson 1.

async function coinFlip() {
  const flipResult = Math.random() < 0.5 ? "heads" : "tails";

  if (flipResult === "heads") {
    return "Coin landed on heads! You win!";
  } else {
    throw "Coin landed on tails. You lose.";
  }
}

async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const data = await response.json();
    return data.slip.advice;
  } catch (error) {
    console.error("Error fetching advice:", error);
    return "Couldn't fetch advice.";
  }
}

async function flipAndFetchAdvice() {
  const resultDiv = document.getElementById("result");

  try {
    const result = await coinFlip();
    resultDiv.innerHTML = `<p>${result}</p>`;

    const advice = await fetchAdvice();
    resultDiv.innerHTML += `<p>Random Advice: ${advice}</p>`;
  } catch (error) {
    resultDiv.innerHTML = `<p>${error}</p>`;
  }
}

document
  .getElementById("flipBtn")
  .addEventListener("click", flipAndFetchAdvice);
