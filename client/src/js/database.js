import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error('putDb not implemented');

// export const postDb = async (content) => {
//   console.log('Post to the database = ', content);

//   try {
//     const jateDb = await openDB('jate', 1);
//     const tx = jateDb.transaction('jate', 'readwrite');
//     const store = tx.objectStore('jate');
//     const request = store.add({ jate: content });
//     const result = await request;
//     console.log('🚀 - data saved to the database', result);
//   } catch(error) {
//     console.error('postDb not implemented')
//   };
// };

export const putDb = async (content) => {
  console.log("Put to the database = ", content);

  try {
    console.log("PUT to the database");
    const jateDb = await openDB("jate", 1);
    const tx = jateDb.transaction("jate", "readwrite");
    const store = tx.objectStore("jate");
    const request = store.put({ id: 1, jate: content });
    const result = await request;
    console.log("🚀 - data saved to the database", result);
  } catch (error) {
    console.error("putDb not implemented");
  }
};

// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error('getDb not implemented');
// export const getAllDb = async () => {

export const getDb = async () => {
  console.log("Get from the database = ");

  try {
    console.log("GET all from the database");
    const jateDb = await openDB("jate", 1);
    const tx = jateDb.transaction("jate", "readonly");
    const store = tx.objectStore("jate");
    const request = store.getAll();
    // const request = store.get(id);
    const result = await request;
    console.log(
      "result.value",
      result,
      result.toString(),
      typeof result,
      result,
      { result }
    );
    return result;
  } catch (error) {
    console.error("getDb not implemented");
  }
};

initdb();
