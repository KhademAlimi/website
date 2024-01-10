const spans = document.querySelectorAll('.progress-bar span');
spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;

});




const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");


function sentEmail()  {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.vaule}<br> message: ${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "khademalemi.999@gmail.com",
        Password : "DCEB1DCA9C3F55478EA4A8869F38E1150C4A",
        To : 'khademalemi.999@gmail.com',
        From : "khademalemi.999@gmail.com",
        Subject : "This is the subject",
        Body : bodyMessage    
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                  });
            }
        }
    ); 
};

function checkInputs() {
    const items = document.querySelectorAll(".item");
   
    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        })
        
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error"); 
            }
        })
    }
};

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-x]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
         else {
            errorTxtEmail.innterText = "Email Address can't be blank";
         }
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error"); 
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !mess.classList.contains("error")) {
        sentEmail();
        form.reset();
        return false;
    }
    //sentEmail();
    //checkInputs(); 
});


bur = document.querySelector('.bur')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

bur.addEventListener('click', () => {
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    rightNav.classList.toggle('v-class-resp');  
}) 

