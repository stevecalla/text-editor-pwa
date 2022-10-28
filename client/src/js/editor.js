// Section: Import methods to save and get data from the indexedDB database in './database.js'
import { getDb, putDb } from "./database";
import { header } from "./header";

export default class {
  constructor() {
    const localData = localStorage.getItem("content");

    // Section: Check if CodeMirror is loaded
    if (typeof CodeMirror === "undefined") {
      throw new Error("CodeMirror is not loaded");
    }

    this.editor = CodeMirror(document.querySelector("#main"), {
      value: "",
      mode: "javascript",
      theme: "monokai",
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // Section: When the editor is ready, set the value to whatever is stored in indexedDB.
    // Fallback to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.
    // Adjusted original code as "data" doesn't seem to be undefined but rather an array
    getDb().then((data) => {
      console.info("Loaded data from IndexedDB, injecting into editor");

      if (data.length !== 0) {
        this.editor.setValue(data[0].jate);
      } else {
        this.editor.setValue(localData || header);
      }
    });

    // Section: On change remove the header from the text string is present
    // Save change to local storage then save local storage value to IndexDB
    // Important because there is no save button / functionality
    this.editor.on("change", () => {
      let rawContent = this.editor.getValue();
      // var removedHeader = rawContent.replace(header, ""); // If necessary to remove the JEST text on the text editor screen
      localStorage.setItem("content", rawContent);
      putDb(localStorage.getItem("content"));
    });

    // Section: Save the content of the editor when the editor itself is loses focus
    // Important for mobile devices as user behavior is to exit apps
    // Important because there is no save button / functionality
    this.editor.on("blur", () => {
      console.log("The editor has lost focus");
      let rawContent = this.editor.getValue();
      // var removedHeader = rawContent.replace(header, ""); // If necessary to remove the JEST text on the text editor screen
      localStorage.setItem("content", rawContent);
      putDb(localStorage.getItem("content"));
    });
  }
}
