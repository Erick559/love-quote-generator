const adviceCounter = document.querySelector('.advice-counter');
const displayedAdvice  = document.querySelector('.advice');
const randomizerButton = document.querySelector('.randomizer')
const svg = document.querySelector('img');

document.addEventListener("DOMContentLoaded", getRandomAdvice());
randomizerButton.addEventListener("click", () => {
    getRandomAdvice();
});

async function getRandomAdvice() {
    try {
      // Simulating fetching data from a local JSON file
      const response = await fetch('./quotes.json');
      const data = await response.json();
  
      // Select a random advice slip from the array
      const randomIndex = Math.floor(Math.random() * data.slip.length);
      const advice = data.slip[randomIndex];
  
      adviceCounter.textContent = `ADVICE #${advice.id}`;
      displayedAdvice.textContent = `"${advice.advice}"`;
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
}