// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const rateButton = document.getElementById("rateButton");
    const resultSection = document.getElementById("resultSection");
    const ratingText = document.getElementById("rating");
  
    // Function to generate a random rating between 1 and 100
    const generateRandomRating = () => Math.floor(Math.random() * 100) + 1;
  
    // Handle button click
    rateButton.addEventListener("click", () => {
      const imageInput = document.getElementById("imageInput");
  
      if (imageInput.files.length === 0) {
        alert("Please upload an image first!");
      } else {
        const rating = generateRandomRating();
        ratingText.textContent = `${rating}/100`;
        resultSection.style.display = "block";
      }
    });
  });
  