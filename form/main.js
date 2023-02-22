

function Mail() {
    let Name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let Message = document.getElementById("message").value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "stjohnpublicschoolmahuja@gmail.com",
        Password: "88C920FA5CB38EA94B61148B00FD46993D92",
        To: 'stjohnpublicschoolmahuja@gmail.com',
        From: "stjohnpublicschoolmahuja@gmail.com",
        Subject: "Mail from contact from",
        Body: "Name :" + Name + "<br> User Email :" + email + "<br/> Message :" + Message
    }).then(
        message => alert(message)
    );
}
