// // const butInstall = document.getElementById('buttonInstall');
const installBtn = document.getElementById('buttonInstall');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {});
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  console.log('before install')
  installBtn.style.visibility = 'visible';
  // textHeader.textContent = 'Click the button to install!';

  installBtn.addEventListener('click', () => {
    console.log('#1 = ', event);
    console.log('#2 = ', event.prompt);

    event.prompt();

    console.log('#3 = ', event.prompt.userChoice.outcome);

    if (event.userChoice.outcome !== "accepted") {
      location.reload();
    }

    // installBtn.setAttribute('disabled', true);
    // installBtn.textContent = 'Installed!';
  });
});

// // TODO: Implement a click event handler on the `butInstall` element
// // butInstall.addEventListener('click', async () => {});
// installBtn.addEventListener('click', async (event) => {
//   console.log('#1 = ', event);
//   console.log('#2 = ', event.prompt);

//   event.prompt();
      
//   console.log('#2 = ', event.prompt.userChoice.outcome);

//   if (event.prompt.userChoice.outcome !== "accepted") {
//     location.reload();
//   }

//   console.log('install click')
//   // installBtn.setAttribute('disabled', true);
//   // installBtn.textContent = 'Installed!';

// });

// // TODO: Add an handler for the `appinstalled` event
// // window.addEventListener('appinstalled', (event) => {});
window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Successfully installed!';
  console.log('👍', 'appinstalled', event);
});