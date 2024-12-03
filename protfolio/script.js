Window.onload = function () {
  alert("Welcome to mahek's Personal Website!");
};

window.onload = function () {
  displayDateTime();
};

function changeAboutMeText() {
  const aboutMeTexts = ["Full Stack Web Developer"];
  const typingSpeed = 100; //milliseconds per character
  const eraseSpeed = 50;
  const pauseTime = 1500;
  const aboutMeElement = document.querySelector(".about-me");

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = aboutMeTexts[textIndex];
    /* Typing stage*/
    if (!isDeleting && charIndex < currentText.length) {
      aboutMeElement.textContent += currentText[charIndex];
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      /Erasing/
      aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, eraseSpeed);
    } else {
      /* Switching the deleting or Typing procees */
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % aboutMeTexts.length;
      }
      setTimeout(type, pauseTime);
    }
  }
  type();
}

//call function to add stunning modification

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const currentMode = body.classList.contains("dark-mode") ? "Dark" : "Light";
    darkModeToggle.querySelector("i").classList.toggle("fa-sun");
    darkModeToggle.querySelector("i").classList.toggle("fa-moon");
    darkModeToggle.querySelector("i").classList.toggle("light-mode");
  });
});
changeAboutMeText();

/* document.addEventListener("DOMContentLoaded", function () {
    const Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector(".progress-bar");
          /*
          const progressBar = progressBar.dataset.progress; 
  
          progressBar.style.setProperty("--progress", "$(progress)%");
          progressBar.classList.add("animated");
          Observer.unobserve(entry.target);
        }
      });
    });
  
    const programmingLanguages = document.querySelectorAll(
      "#programming-languages .skill"
    );
    programmingLanguages.forEach((skill) => {
      Observer.Observe(skill);
    });
  }); */
// Skill percentages
const skills = {
  html: 90,
  css: 80,
  python: 70,
};

// Function to animate each progress bar
function animateProgress(skill, elementId) {
  const elem = document.getElementById(elementId);
  let width = 0;
  const target = skills[skill];

  const interval = setInterval(() => {
    if (width >= target) {
      clearInterval(interval);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.textContent = width + "%";
    }
  }, 15); // Adjust this value for faster/slower animation
}

// Animate each skill
animateProgress("html", "html-progress");
animateProgress("css", "css-progress");
animateProgress("python", "python-progress");