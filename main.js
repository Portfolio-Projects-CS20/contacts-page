// My Contacts Page

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


// Event Listeners
document.getElementById("showContacts").addEventListener("click", showName);

// Event Functions
function showName() {

    for (let i = 0; i < contactNames.length; i++) {
        // Create new div and copy name:
        let divEl = document.getElementById("contact-person");
        let copyInfo = divEl.cloneNode(true);
        document.body.appendChild(copyInfo);

        displayName("name", "Name", contactNames[i]);
        displayName("phoneNumber", "Phone Number", phoneNumbers[i]);
        displayName("birthday", "Birthday", birthDay[i]);
    }
}


function displayName(id, section, variable) {
    document.getElementById(id).innerHTML = section + ": " + variable;
}