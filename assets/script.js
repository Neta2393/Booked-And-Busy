

{
// The next lines of code create a new date element and ensure that the date and time elements change to current when the webpage is opened.
// The current date and time are also console logged. So when you open the console you will see an accurate date and time.
const now = new Date()
const currentDateTime = now.toLocaleString();
console.log(currentDateTime);
// The code below grabs the datetime id and ensures that current date and time populate in the webpage underneath the header of the page.
const datetimeElement= document.getElementById("datetime");
datetimeElement.innerText= currentDateTime;

}
