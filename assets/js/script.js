const emailForm = document.querySelector("form input");
var errorLabel = document.querySelector(".error-text");
var errorImage = document.querySelector(".error-icon");
const sendBtn = document.querySelector(".send-btn");
sendBtn.addEventListener("click", function () {
    if (emailForm.value == "" || !emailForm.validity.valid) {
        errorLabel.textContent = "Please provide a valid email.";
        errorImage.style.visibility = "visible";

        errorLabel.animate([
            { transform: "translateX(0)" },
            { transform: "translateX(-20px)" },
            { transform: "translateX(20px)" },
            { transform: "translateX(0)" }
        ], 300);
        errorImage.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.3)" },
            { transform: "scale(1)" }
        ], 300);
    }
    else {
        errorLabel.textContent = "Email Sent :)";
        errorLabel.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.5, 1.3)" },
            { transform: "scale(1)" }
        ], 200);
        errorImage.style.visibility = "hidden";
    }
});