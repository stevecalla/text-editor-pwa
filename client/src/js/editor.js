// Import methods to save and get data from the indexedDB database in './database.js'
import { getDb, putDb } from "./database";
import { header } from "./header";

export default class {
  constructor() {
    const localData = localStorage.getItem("content");

    // check if CodeMirror is loaded
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

    // When the editor is ready, set the value to whatever is stored in indexeddb.
    // Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.
    getDb().then((data) => {
      console.info("Loaded data from IndexedDB, injecting into editor");
      // this.editor.setValue(data || localData || header);
      console.log("test 7 = ", data, data.length, { data });
      if (data.length !== 0) {
        console.log("why oh why = ", data, { data });
        console.log("data = ", data.jate, { data }, "help me 7");
        this.editor.setValue(data[0].jate);
      } else {
        console.log("local data = ", localData);
        console.log("header = ", header);

        this.editor.setValue(localData || header);
      }
    });

    // On change remove the header from the text string is present
    // Save change to local storage then save local storage value to IndexDB
    this.editor.on("change", () => {
      let rawText = this.editor.getValue();
      var removedHeader = rawText.replace(header, "");

      localStorage.setItem("content", removedHeader);
      putDb(localStorage.getItem("content"));
    });

    // Save the content of the editor when the editor itself is loses focus
    this.editor.on("blur", () => {
      console.log("The editor has lost focus");
      let rawText = this.editor.getValue();
      var removedHeader = rawText.replace(header, "");

      localStorage.setItem("content", removedHeader);
      putDb(localStorage.getItem("content"));
    });
  }
}
