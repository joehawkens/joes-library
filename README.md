# Overview

### This is a simple, cloud database web app created using Google Firebase, HTML, CSS, and JavaScript. The Database holds information about books, hence the name "Joe's Library". Someone using the Database can Create, Read, Update, and Delete book data from the database, which is hosted on Firebase. Most people who develop with Firebase download an npm package that contains an SDK for using the Software. However, because I was having difficulties with the SDK, I decided to import all the functionality through CDN - which provides all the assets and functions of the Database through links you import inside the code. I decided to create this project to see if I could learn something new and increase my problem solving skills in understanding unfamiliar technology.

### Since this database was created using my Firebase account, there is no way for someone to use it unless they used my credentials, however, you can view all the previously mentioned functionality through the video link below:

[Software Demo Video](https://www.youtube.com/watch?v=8KrbQDC9MdY)

# Google Firebase

Google Firebase is a platform for creating software applications, whether it's web apps like the one featured here or an Android/IOS apps. Google Firebase also has NoSQL Cloud Database functionality through their Realtime Database. This is what I used. They structure their data in JSON, instead of the table model of relational databases.

The way data is structured in this project is through JSON. The books begin with their titles, and under each title is a description of the book and an image (in the form of a URL).

# Development Environment

I created this Software with HTML/CSS/JavaScript and Firebase's Realtime Database. I imported the Firebase functionality through CDN.

# Useful Websites Used During Development

* [Google Firebase Official Documentation](https://console.firebase.google.com/)
* [Stack Overflow](https://stackoverflow.com/)

# Future Work (things to improve and add)

* The frontend needs to be able to update the book within the user interface.
* The frontend code needs the ability to show multiple books in the library.
