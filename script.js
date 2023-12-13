let feat_text = document.querySelector(".feat-text");

let sendEmail=()=>{
    Email.send({
Host : "smtp.elasticemail.com",
Username : "aletishiva218@gmail.com",
Password : "D1DDB543EEA6A2DB16C1093555B7CD401F75",
To : form1.temail.value,
From : "aletishiva218@gmail.com",
Subject : form1.esub.value,
Body : form1.ebody.value
}).then(
(message) => {
    if(message == "OK")
    {
        feat_text.classList.add("success-text");
        feat_text.classList.remove("error-text");
        feat_text.innerHTML = "Email Sent Successfully";
    }
    else
    {
        feat_text.classList.add("error-text");
        feat_text.classList.remove("success-text");
        feat_text.innerHTML = message;
    }
}
);
}