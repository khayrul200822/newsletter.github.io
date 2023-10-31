
//get elements
const singinPage = document.querySelector(".container");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submitButton");
const alertMsg = document.querySelector(".email_labels span");
//alert page element
const alertPage = document.querySelector(".alert_page");
//dismiss button
const dismissBtn = document.getElementById("dismiss_btn");

// add addEventListener
submitBtn.addEventListener("click", emailHandler);

dismissBtn.addEventListener("click", () =>{
    singinPage.style.display = "unset";
    alertPage.style.display = "none";
})

//function for email validation
function emailHandler() {
    let emailValue = emailInput.textContent;
    emailValue = emailInput.value;
    if (emailValue.includes("@gmail.com")) {
        singinPage.style.display = "none";
        alertPage.style.display = "flex";
        alertMsg.style.display = "none";
        emailInput.style.border = "1px solid #999"
    }
    else {

        emailInput.style.background = "#FFE8E6";
        emailInput.style.border = "1px solid #ff000059"
        alertMsg.style.display = "unset";
    }
   
}