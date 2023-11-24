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


document.addEventListener("DOMContentLoaded", () => {
  const setupSteps = document.querySelectorAll(".setup-step");

  setupSteps.forEach((step, index) => {
    const setIcon = step.querySelector(".set-icon");
    const setText = step.querySelector(".set-text");
    const setImage = step.querySelector(".set-image");
    const setBtn = step.querySelector(".set-btn");

    setIcon.addEventListener("click", () => {
      toggleStepCompletion(step, index);
      updateStep(getCompletedStepsCount());
    });
  });
});

function toggleStepCompletion(step, index) {
  const setIcon = step.querySelector(".set-icon");
  const setText = step.querySelector(".set-text");
  const setImage = step.querySelector(".set-image");
  const setBtn = step.querySelector(".set-btn");

  // Check if the step is already completed
  const isCompleted = setIcon.classList.contains("completed");

  // Collapse the current step and expand the next one
  collapseStep(index);

  if (!isCompleted) {
    // Mark the step as completed
    setIcon.classList.add("completed");
    setText.classList.add("active");
    setImage.classList.add("active");
    setBtn.classList.add("active");

    // Change background image for completed state
    setIcon.style.backgroundImage =
      "url(https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg)";

    // Expand the next incomplete step
    expandNextIncompleteStep(index + 1);
  } else {
    // Mark the step as incomplete
    setIcon.classList.remove("completed");
    setText.classList.remove("active");
    setImage.classList.remove("active");
    setBtn.classList.remove("active");

    // Change background image for incomplete state
    setIcon.style.backgroundImage =
      "url(https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg)";
  }
}

function collapseStep(index) {
  const currentStep = document.querySelector(`.setup-step:nth-child(${index})`);
  if (currentStep) {
    const setIcon = currentStep.querySelector(".set-icon");
    const setText = currentStep.querySelector(".set-text");
    const setImage = currentStep.querySelector(".set-image");
    const setBtn = currentStep.querySelector(".set-btn");

    // Collapse the current step
    setIcon.classList.remove("completed");
    setText.classList.remove("active");
    setImage.classList.remove("active");
    setBtn.classList.remove("active");
  }
}

function expandNextIncompleteStep(index) {
  const nextStep = document.querySelector(
    `.setup-step:nth-child(n + ${index}):not(.completed)`
  );

  if (nextStep) {
    const setIcon = nextStep.querySelector(".set-icon");
    const setText = nextStep.querySelector(".set-text");
    const setImage = nextStep.querySelector(".set-image");
    const setBtn = nextStep.querySelector(".set-btn");

    // Mark the next incomplete step as active
    setIcon.classList.add("completed");
    setText.classList.add("active");
    setImage.classList.add("active");
    setBtn.classList.add("active");
  }
}

function getCompletedStepsCount() {
  const completedSteps = document.querySelectorAll(".set-icon.completed");
  return completedSteps.length;
}

function updateStep(completedStepsCount) {
  const stepCounter = document.getElementById("step-counter");
  const progressFilled = document.getElementById("progress-filled");
  const totalSteps = 5; // Assuming 5 steps, adjust as needed

  const widthPerStep = 100 / totalSteps;
  const filledWidth = widthPerStep * completedStepsCount;

  stepCounter.innerText = `${completedStepsCount}/${totalSteps} completed`;
  progressFilled.style.width = `${filledWidth}%`;
}

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
