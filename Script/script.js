const text = ["Designer", "Developer", "Freelancer"];
let currentWordIndex = 0;
let i = 0;
const speed = 150; // typing speed in ms
const waitTime = 1500; // time to wait before switching words

const typeWriter = () => {
  if (i < text[currentWordIndex].length) {
    document.getElementById("typewriter").textContent =
      "I'm  a  " + text[currentWordIndex].substring(0, i + 1);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      currentWordIndex = (currentWordIndex + 1) % text.length; // Move to next word
      i = 0; // Reset letter index
      document.getElementById("typewriter").textContent = "I am "; // Clear text
      typeWriter(); // Start typing next word
    }, waitTime);
  }
};

typeWriter();

//animation part ........

//porfolio part..........

const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    portfolioItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
