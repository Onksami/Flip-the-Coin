//  I will create a new js folder to change the scopes only.

// This is for week 7 lesson 2.

function coinFlip() {
  return new Promise((resolve, reject) => {
    const flipResult = Math.random() < 0.5 ? "heads" : "tails";

    if (flipResult === "heads") {
      resolve("Coin landed on heads! You win!");
    } else {
      reject("Coin landed on tails. You lose.");
    }
  });
}

function fetchAdvice() {
  return fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => data.slip.advice)
    .catch((error) => {
      console.error("Error fetching advice:", error);
      return "Couldn't fetch advice.";
    });
}

function flipAndFetchAdvice() {
  const resultDiv = document.getElementById("result");

  coinFlip()
    .then((result) => {
      resultDiv.innerHTML = `<p>${result}</p>`;
      return fetchAdvice();
    })
    .then((advice) => {
      resultDiv.innerHTML += `<p>Random Advice: ${advice}</p>`;
    })
    .catch((error) => {
      resultDiv.innerHTML = `<p>${error}</p>`;
    });
}

document
  .getElementById("flipBtn")
  .addEventListener("click", flipAndFetchAdvice);
