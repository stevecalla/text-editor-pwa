import { Workbox } from "workbox-window";
import Editor from "./editor";
import "./database";
import "../css/style.css";
import "../css/codeMirror.css";
import { registerSW } from "./register-sw";
import "../assets/images/favicon-shark.jpeg";
import "../assets/images/favicon-shark.jpeg";
import "../assets/images/favicon.ico";

const main = document.querySelector("#main");
main.innerHTML = "";

const loadSpinner = () => {
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = 
    `
      <div class="loading-container">
      <div class="loading-spinner" />
      </div>
    `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === "undefined") {
  loadSpinner();
}

// Call registerSW method
registerSW();
