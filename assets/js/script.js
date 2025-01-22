var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");

function submitToPage()
        {
            window.location = "https://owenliangco.github.io/F6/login.html"
        }

function validatePassword()
{
    if (password.value != confirm_password.value)
    {
        confirm_password.setCustomValidity("Passwords Don't Match");
    }
}


password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

document.getElementById("form").addEventListener("submit", handleSubmit);