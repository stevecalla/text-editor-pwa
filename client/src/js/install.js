const installBtn = document.getElementById("installButton");
let promptEvent; 
let isInstalled = false;

// // Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// TODO:Capture event and defer
window.addEventListener('beforeinstallprompt', function (e) {
  e.preventDefault();
  promptEvent = e;
  listenToUserAction();
  console.log('v103');
});

// TODO: Implement a click event handler on the `butInstall` element
// listen to install button click
function listenToUserAction() {
  installBtn.addEventListener("click", presentAddToHome);
  if (isInstalled === false) {
    installBtn.style.display = "block";
    console.log('false');
  }
}

// present install prompt to user
function presentAddToHome() {
  promptEvent.prompt();  // Wait for the user to respond to the prompt
  promptEvent.userChoice
    .then(choice => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted', choice.outcome);
        installBtn.style.display = "none";
        isInstalled = true;
        localStorage.setItem('isInstalled', true);
        } else {
            console.log('User dismissed', choice.outcome);
            isInstalled = false;
            installBtn.style.display = "block";
            localStorage.setItem('isInstalled', false);
        }
    })
};

window.addEventListener('load', () => {
  if (localStorage.getItem('isInstalled')) {
    console.log('load storage = ', localStorage.getItem('isInstalled'))
    isInstalled = localStorage.getItem('isInstalled')
  };

  console.log('isInstalled = ', isInstalled);

  if(isInstalled === true || isInstalled === 'true') {
    installBtn.style.display = "none";
    console.log('a = ', isInstalled, typeof(isInstalled));
  } else {
    installBtn.style.display = "block";
    console.log('b = ', isInstalled, typeof(isInstalled));
  }
})

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {});
// window.addEventListener('appinstalled', (event) => {
//   textHeader.textContent = 'Successfully installed!';
//   console.log('👍', 'appinstalled', event);
// });