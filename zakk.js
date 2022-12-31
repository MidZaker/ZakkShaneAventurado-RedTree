//form //
function sendEmail(){
     Email.send({

      Host :  "smtp.gmail.com",
      Username: "midzaker017@gmail.com",
      Password: "zakkyshane123",
      To : 'midzaker017@gmail.com',
      From: document.getElementById("email").value,
      Subject : "New Contact Form Enquiry",
      Body: "And this is the body"

     }).then(
        message =>alert("Succesfuly Submitted")
     )



}


//change background//

function background1(){
    document.querySelector('.sect1').style.background = "url('Section1yellow.jpg') center center / cover";
    document.getElementById('mainword').textContent ="Yellow Season"
  
}
function background2(){
    document.querySelector('.sect1').style.background = "url('Section1.jpg') center center / cover";
    document.getElementById('mainword').textContent ="Red Season"
  

    

}
function background3(){
    document.querySelector('.sect1').style.background = "url(Section1Snow.jpg') center center / cover";
    document.getElementById('mainword').textContent ="White Season"

}


//button for overlay//

function openSidebar() {
    var div = document.getElementById("overlay");

    if(div.style.display === "none"){
        div.style.display = "block";
    }
    else{
        div.style.display = "none";
    }
}

//scroll reveal

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i <reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
    }
}
