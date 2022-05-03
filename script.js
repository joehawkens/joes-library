

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


// IMAGE URL FUNCTIONALITY ==================================================================================================================


function upload_image(){

  document.querySelector("#image").src = document.querySelector("#url-image").value

}

document.querySelector("#upload-image-button").addEventListener("click", upload_image)



// Add book functionality ========================================================
// Add book is writing data to the database. (Title, Image, Description)

        // book submit button
        let add_book_submit = document.querySelector("#add-book-submit")

        // Book attributes
        const title = document.querySelector("#title").value
        const image = document.querySelector("#image").getAttribute("src");
        const description = document.querySelector("#description").value


        function write_data(){

            firebase.database().ref("Book").set({

                title: title,
                image: image,
                description: description,

            })

            document.querySelector("#title").value = "";
            document.querySelector("#image").getAttribute("src") = "";
            document.querySelector("#description").value = "";

        }

        add_book_submit.addEventListener("click", writeUserData)








// Added test button to ensure that the DOM is working correctly. ======================================================

const test_button = document.querySelector("#test-button");


function test(){

  console.log(title)
  console.log(image)
  console.log(description)

}

test_button.addEventListener("click", test)
