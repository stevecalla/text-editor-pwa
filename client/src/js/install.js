const installBtn = document.getElementById("installButton");
let promptEvent;
let isInstalled = false;

installBtn.style.display = "none";
installBtn.style.disabled = true;

// Section: Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
// Capture event and defer
window.addEventListener("beforeinstallprompt", function (e) {
  e.preventDefault();
  promptEvent = e;
  listenToUserAction();
});

// Section: Implement a click event handler on the `butInstall` element
// Listen to install button click
function listenToUserAction() {
  installBtn.addEventListener("click", presentAddToHome);
  if (isInstalled === false) {
    installBtn.style.display = "block";
  }
}

// Section: Present install prompt to user
function presentAddToHome() {
  promptEvent.prompt(); // Wait for the user to respond to the prompt
  promptEvent.userChoice.then((choice) => {
    if (choice.outcome === "accepted") {
      installBtn.style.display = "none";
      installBtn.style.disabled = true;
      isInstalled = true;
      localStorage.setItem("isInstalled", true);
    } else {
      isInstalled = false;
      installBtn.style.display = "block";
      installBtn.style.disabled = false;
      localStorage.setItem("isInstalled", false);
    }
  });
}

window.addEventListener("load", () => {
  installBtn.style.display = "none";
  installBtn.style.disabled = true;

  if (localStorage.getItem("isInstalled")) {
    isInstalled = localStorage.getItem("isInstalled");
  }

  if (isInstalled === true || isInstalled === "true") {
    installBtn.style.display = "none";
    installBtn.style.disabled = true;
  } else {
    installBtn.style.display = "block";
    installBtn.style.disabled = false;
  }
});

// Section: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
});
