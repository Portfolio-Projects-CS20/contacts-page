// My Contacts Page

// Event Listeners
document.getElementById("showContacts").addEventListener("click", showContacts);

// Event Functions
function showContacts(){
    displayName("Navika", "565-565-434", "June 45");
    
}

function displayName(name, phoneNumber, birthday){
    document.getElementById("name").innerHTML = "Name: " + name;
    document.getElementById("phone-number").innerHTML = "Phone Number: " + phoneNumber;
    document.getElementById("birthday").innerHTML = "Birthday: " + birthday;
}