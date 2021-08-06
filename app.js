/*Alert Banner*/

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
`
    <div class="alert-banner">
    <span><strong>Alert:</strong> You have <strong>7</strong> overdue tasks</span>
    <span class="alert-banner-close">x</span>
    </div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});

/*Messaging Section*/

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    if(user.value === "" & message.value === "" ) {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out message field befire sending");
    } else {
        alert("Message successfuly sent to: ${user.value}");
    }
});