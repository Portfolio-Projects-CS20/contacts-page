// My Contacts Page

// Global Variables
let divEl;

// Arrays
let contactInfo = [{
    name: "Alexandra",
    birthday: "March 31, 2003",
    phone: "780-555-3029"
}, {
    name: "Martin",
    birthday: "June 11, 2001",
    phone: "461-353-9923"
}];

// Event Listeners
document.getElementById("showContacts").addEventListener("click", showAllContacts);
document.getElementById("deleteContact").addEventListener("click", deleteContact);
document.getElementById("addContact").addEventListener("click", addContact);


// Event Functions
function showAllContacts() {
    for (let i = 0; i < contactInfo.length; i++) {
        // Create new div and copy name:
        divEl = document.createElement("div");
        divEl.innerHTML = "<p> Name: " + contactInfo[i].name + "</p> <p> Phone: " + contactInfo[i].phone + "</p> <p>Birthday: " + contactInfo[i].birthday + "</p>";
        document.body.append(divEl);
    }
}

function deleteContact() { 
    divEl.remove();
}

function addContact() {
    let name = prompt("Enter name: ");
    let birthday = prompt("Enter birth date: ");
    let phone = prompt("Enter phone number: ");

    contactInfo.push({
        name,
        birthday,
        phone
    });

    // Create new div and copy name:
    divEl = document.createElement("div");
    divEl.innerHTML = "<p> Name: " + name + "</p> <p> Phone: " + phone + "</p> <p>Birthday: " + birthday + "</p>";
    document.body.append(divEl);
}