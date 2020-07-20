// My Contacts Page

// Global Variables
let divEl;
let copyInfo;

// Event Listeners
document.getElementById("showContacts").addEventListener("click", showAllContacts);

// Event Functions
function showAllContacts() {
    for (let i = 0; i < contactNames.length; i++) {
        // Create new div and copy name:
        divEl = document.getElementById("contact-person");
        copyInfo = divEl.cloneNode(true);
        document.body.append(copyInfo);


        displayName("name", "Name", contactNames[i]);
        displayName("phoneNumber", "Phone Number", phoneNumbers[i]);
        displayName("birthday", "Birthday", birthDay[i]);
    }

}


function displayName(id, section, variable) {
    document.getElementById(id).innerHTML = section + ": " + variable;
}

// Load names.txt file
let contactNames;
fetch("names.txt")
    .then((rawNames) => rawNames.text())
    .then((names) => contactNames = names.split("\r\n"));

// Load phone.txt file
let phoneNumbers;
fetch("phone.txt")
    .then((rawPhone) => rawPhone.text())
    .then((phoneNum) => phoneNumbers = phoneNum.split("\r\n"));

// Load birthday.txt file
let birthDay;
fetch("birthday.txt")
    .then((rawDates) => rawDates.text())
    .then((dates) => birthDay = dates.split("\r\n"));