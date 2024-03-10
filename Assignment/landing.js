
document.addEventListener('DOMContentLoaded', function() {
    // prompt box asking for the user's name
var userName = prompt("Welcome to Windswept Strands! Please enter your name:");

    // Check if the user entered a name
if   (userName != null && userName != "") {
        // Display a greeting message with the user's name
alert("Welcome, " + userName + "! We're thrilled to have you here at Windswept Strands.");
} else {
        // Display a generic greeting message if the user didn't enter a name
alert("Welcome to Windswept Strands! We're thrilled to have you here."); }
});
