// onclick function for arrow
function arrowBtn() {
  var cancelBtn = document.getElementById("cancel-btn");
  var setupProcess = document.getElementById("setup-process");
  cancelBtn.classList.toggle("active");
  if (setupProcess.style.display === "none") {
    setupProcess.style.display = "block";
  } else {
    setupProcess.style.display = "none";
  }
}

// onclick function for arrow
function closeBtn() {
  var closeProcess = document.getElementById("top-section");
  closeProcess.style.display= "none";
}

document.addEventListener('DOMContentLoaded', function() {
  var accBtns = document.querySelectorAll('.acc-btn');
  
  accBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      window.location.href = 'https://www.admin.shopify.com';
    });
  });
});

function animateCircle() {
  // Assuming you have logic for handling the circle animation
  // You can add code here if needed
  const setIcon = document.querySelector(".set-icon.completed");

  if (setIcon) {
    setIcon.classList.add("pulse-animation");
    setTimeout(() => {
      setIcon.classList.remove("pulse-animation");
    }, 1000); // Adjust the duration of the animation in milliseconds
  }
}

function updateStep(stepNumber) {
  const stepCounter = document.getElementById("step-counter");
  const progressFilled = document.getElementById("progress-filled");

  const widthPerStep = 100 / 5;
  // Assuming 5 steps, adjust as needed
  const filledWidth = widthPerStep * stepNumber;

  stepCounter.innerText = `${stepNumber}/5 completed`;
  progressFilled.style.width = `${filledWidth}%`;

  // Change set-icon background dynamically
  const allSetIcons = document.querySelectorAll(".set-icon");
  allSetIcons.forEach((setIcon, index) => {
    if (index < stepNumber - 1) {
      setIcon.style.backgroundImage =
        "url(https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg)";
    } else {
      setIcon.style.backgroundImage =
        "url(https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg)";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const setupSteps = document.querySelectorAll(".setup-step");

  setupSteps.forEach((step, index) => {
    const setIcon = step.querySelector(".set-icon");
    const setText = step.querySelector(".set-text");
    const setImage = step.querySelector(".set-image");
    const setBtn = step.querySelector(".set-btn");

    setIcon.addEventListener("click", () => {
      // Reset all steps to initial state
      setupSteps.forEach((s) => {
        s.querySelector(".set-icon").classList.remove("completed");
        s.querySelector(".set-text").classList.remove("active");
        s.querySelector(".set-image").classList.remove("active");
        s.querySelector(".set-btn").classList.remove("active");
      });

      // Mark current step as completed
      setIcon.classList.add("completed");
      setText.classList.add("active");
      setImage.classList.add("active");
      setBtn.classList.add("active");

      // Update step counter
      updateStep(index + 1);
    });
  });
});

// nav btn
// Toggle "active" class for the notification menu
function toggleNotificationMenu() {
  var notificationMenu = document.getElementById("not-menu");
  var accountMenu = document.getElementById("acc-menu");

  notificationMenu.classList.toggle("active");
  accountMenu.classList.remove("active"); // Close the account menu
}

// Toggle "active" class for the account menu
function toggleAccountMenu() {
  var accountMenu = document.getElementById("acc-menu");
  var notificationMenu = document.getElementById("not-menu");

  accountMenu.classList.toggle("active");
  notificationMenu.classList.remove("active"); // Close the notification menu
}

document.addEventListener("click", function (event) {
  var menus = document.querySelectorAll(".menus > div");
  var clickedInsideMenu = false;

  menus.forEach(function (menu) {
    if (menu.contains(event.target) || menu.classList.contains("active")) {
      clickedInsideMenu = true;
    } else {
      menu.classList.remove("active");
    }
  });

  if (!clickedInsideMenu) {
    // Close both menus if clicked outside
    var notificationMenu = document.getElementById("not-menu");
    var accountMenu = document.getElementById("acc-menu");

    notificationMenu.classList.remove("active");
    accountMenu.classList.remove("active");
  }
});
