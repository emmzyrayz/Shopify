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
  closeProcess.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var accBtns = document.querySelectorAll(".acc-btn");

  accBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.location.href = "https://www.admin.shopify.com";
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

// function updateStep(stepNumber) {
//   const stepCounter = document.getElementById("step-counter");
//   const progressFilled = document.getElementById("progress-filled");

//   const widthPerStep = 100 / 5;
//   // Assuming 5 steps, adjust as needed
//   const filledWidth = widthPerStep * stepNumber;

//   stepCounter.innerText = `${stepNumber}/5 completed`;
//   progressFilled.style.width = `${filledWidth}%`;

//   // Change set-icon background dynamically
//   const allSetIcons = document.querySelectorAll(".set-icon");
//   allSetIcons.forEach((setIcon, index) => {
//     if (index < stepNumber - 1) {
//       setIcon.style.backgroundImage =
//         "url(https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg)";
//     } else {
//       setIcon.style.backgroundImage =
//         "url(https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg)";
//     }
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const setupSteps = document.querySelectorAll(".setup-step");

//   setupSteps.forEach((step, index) => {
//     const setIcon = step.querySelector(".set-icon");
//     const setText = step.querySelector(".set-text");
//     const setImage = step.querySelector(".set-image");
//     const setBtn = step.querySelector(".set-btn");

//     setIcon.addEventListener("click", () => {
//       // Reset all steps to initial state
//       setupSteps.forEach((s) => {
//         s.querySelector(".set-icon").classList.remove("completed");
//         s.querySelector(".set-text").classList.remove("active");
//         s.querySelector(".set-image").classList.remove("active");
//         s.querySelector(".set-btn").classList.remove("active");
//       });

//       // Mark current step as completed
//       setIcon.classList.add("completed");
//       setText.classList.add("active");
//       setImage.classList.add("active");
//       setBtn.classList.add("active");

//       // Update step counter
//       updateStep(index + 1);
//     });
//   });
// });

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

const HIDDEN_CLASS = "hidden";
const MARK_AS_DONE = "checkbox-done";

document.querySelectorAll(".setup-step").forEach((step, index) => {
  const checkboxButton = step.querySelector(".set-icon");
  const notCompletedIcon = step.querySelector(".dotted-circle");
  const completedIcon = step.querySelector(".checked-circle");
  const loaderIcon = step.querySelector(".spinner-circle");
  const checkboxButtonStatus = step.querySelector("#setup-item-check-status");

  checkboxButton.addEventListener("click", () => {
    const markedAsDone = checkboxButton.classList.contains(MARK_AS_DONE);

    if (markedAsDone) {
      handleMarkAsNotDone();
      updateCounter(index, false);
      updateActiveClass(index, false);
    } else {
      handleMarkAsDone();
      updateCounter(index, true);
      updateActiveClass(index, true);
    }
  });

  function handleMarkAsDone() {
    notCompletedIcon.classList.add(HIDDEN_CLASS);
    loaderIcon.classList.remove(HIDDEN_CLASS);
    checkboxButtonStatus.ariaLabel = "Loading, Please wait...";

    setTimeout(() => {
      loaderIcon.classList.add(HIDDEN_CLASS);
      completedIcon.classList.remove(HIDDEN_CLASS);
      checkboxButton.ariaLabel = checkboxButton.ariaLabel.replace("as done", "as not done");
      checkboxButtonStatus.ariaLabel = "Successfully marked as done.";
      checkboxButton.classList.add(MARK_AS_DONE);
    }, 3000);
  }

  function handleMarkAsNotDone() {
    completedIcon.classList.add(HIDDEN_CLASS);
    loaderIcon.classList.remove(HIDDEN_CLASS);
    checkboxButtonStatus.ariaLabel = "Loading, Please wait...";

    setTimeout(() => {
      loaderIcon.classList.add(HIDDEN_CLASS);
      checkboxButton.ariaLabel = checkboxButton.ariaLabel.replace("as not done", "as done");
      checkboxButtonStatus.ariaLabel = "Successfully marked as not done.";
      notCompletedIcon.classList.remove(HIDDEN_CLASS);
      checkboxButton.classList.remove(MARK_AS_DONE);
    }, 3000);
  }
});

function updateCounter(index, increment) {
  const stepCounter = document.getElementById("step-counter");
  const progressFilled = document.getElementById("progress-filled");

  const currentCount = parseInt(stepCounter.textContent.split("/")[0]);

  const newCount = increment ? currentCount + 1 : currentCount - 1;
  stepCounter.textContent = `${newCount}/5 completed`;

  const completionPercentage = (newCount / 5) * 100;
  progressFilled.style.width = `${completionPercentage}%`;
}

function updateActiveClass(index, increment) {
  const steps = document.querySelectorAll(".set-text");
  steps.forEach((step, i) => {
    if (i === index) {
      step.classList.toggle("active", increment);
    } else if (!increment && i === index - 1) {
      step.classList.toggle("active", true);
    } else {
      step.classList.toggle("active", false);
    }
  });
}