// Get reference to the password text input where the generated password will appear
const passwordBox = document.getElementById("password");
// Button to copy the displayed password to the clipboard
const copyBtn = document.querySelector(".copy-btn");
// Button that triggers generation of a new password
const generateBtn = document.querySelector(".generate-btn");

// Desired length of the generated password
const length = 12;
// Character sets used to build the password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~|}{[]></-=";

// Combined pool of all allowed characters
const allChars = upperCase + lowerCase + number + symbol;

// When user clicks the generate button, build a password and show it in the input
generateBtn.addEventListener("click", () => {
    // Start with an empty string
    let password = "";

    // Ensure at least one of each type is included for better entropy
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the remaining length with random characters from the full pool
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Display the generated password in the input field
    passwordBox.value = password;
});

// Copy the password to the clipboard when the copy button is clicked
copyBtn.addEventListener("click", () => {
    // Select the input content
    passwordBox.select();
    // Execute the copy command (works in most browsers)
    document.execCommand("copy");
});
