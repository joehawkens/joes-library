// INITIALIZE THE FIREBASE APP (CDN) =============================================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getDatabase, ref, onValue, set, remove} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAir0XTYP_PzUeUgVIcu9CY9dYibFqV3qo",
  authDomain: "book-a18af.firebaseapp.com",
  projectId: "book-a18af",
  storageBucket: "book-a18af.appspot.com",
  messagingSenderId: "1008032848344",
  appId: "1:1008032848344:web:c0a00e8a4fb2e16a7f7aad"
};

// Initialize Firebase ===================================================================================================
const app = initializeApp(firebaseConfig);

const database = getDatabase(app)
console.log(database)






//  CREATE =======================================================================================================================

function writeBookData() {

  

  const db = getDatabase();

  const title = document.querySelector("#title").value;
  const image = document.querySelector("#image").getAttribute("src");
  const description = document.querySelector("#description").value;


  set(ref(db, title), {
    image: image,
    description: description,

  });

  document.querySelector("#title").value = "";
  document.querySelector("#image").src = "images/download.png";
  document.querySelector("#url-image").value = "";
  document.querySelector("#description").value = "";


}



// book submit button

let add_book_submit = document.querySelector("#add-book-submit")
add_book_submit.addEventListener("click", writeBookData)




// READ =======================================================================================================================

function readBookData() {

  const db = getDatabase();
  const bookRef = ref(db, 'Lord of the Rings');
  onValue(bookRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data)
  console.log(bookRef)


  // Take read data and insert into HTML...

  const title = bookRef.key
  const description = data.description
  const image = data.image

  document.querySelector("#section-title").innerHTML = title
  document.querySelector("#section-description").innerHTML = description
  document.querySelector("#section-image").src = image


});
}

document.querySelector("#refresh-button").addEventListener("click", readBookData)


// UPDATE (Not shown on website)=======================================================================================================================

function updateBookData(){

  const db = getDatabase();
  const bookRef = ref(db, 'Lord of the Rings');

  set(ref(db, 'Lord of the Rings'), {
    description: "This is about Hobbits.",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"
  })
  .then(() => {
    console.log('Updated succesfully.')
  })
  .catch((error) => {
    console.log('Update failed')
  });



}


document.querySelector("#update-button").addEventListener("click", updateBookData)






// DELETE =======================================================================================================================


function deleteBookData(){

  const database = getDatabase()
  const bookRef = ref(database, 'Lord of the Rings');

  remove(bookRef)

  // Remove the HTML...

  let section = document.querySelector("#book");
  section.parentNode.removeChild(section);

}

document.querySelector("#delete-button").addEventListener("click", deleteBookData)

































// Add book and view library toggle functionality ==========================================================================================

const add_book_button = document.querySelector("#add-button");
const add_book_section = document.querySelector("#add-book");

const library_button = document.querySelector("#library-button");
const library = document.querySelector("#library");

add_book_button.addEventListener("click", function() {
    add_book_section.style.display = (add_book_section.dataset.toggled ^= 1) ? "block" : "none";
  });

library_button.addEventListener("click", function() {
    library.style.display = (library.dataset.toggled ^= 1) ? "flex" : "none";
  });

// ========================================================================================================================================




// IMAGE URL FUNCTIONALITY ==================================================================================================================


function upload_image(){

  document.querySelector("#image").src = document.querySelector("#url-image").value

}

document.querySelector("#upload-image-button").addEventListener("click", upload_image)

// ==========================================================================================================================================



// Added test button to ensure that the DOM is working correctly. ======================================================

const test_button = document.querySelector("#test-button");


function test(){

  console.log(title)
  console.log(image)
  console.log(description)

  document.querySelector("#title").value = "";
  document.querySelector("#image").src = "images/download.png";
  document.querySelector("#url-image").value = "";
  document.querySelector("#description").value = "";

  

}

test_button.addEventListener("click", deleteBookData)
