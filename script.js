
const scriptURL='https://script.google.com/macros/s/AKfycbyjDqdf1CAQjWTHP96ov-WKujkLwnn_3dIKEidhVe-5HrOvyOEMZcL_LYmTIwV2z3N7RA/exec'

const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
             form.reset();
             alert("Thanks for contacting us..! We Will Contact You Soon...");
            // form.reset();
            localStorage.setItem('formSubmitted', 'true');
        })
        .catch(error => console.error('Error!', error.message));
});

document.querySelector(".hamburger").addEventListener("click", () => {
    let a=document.querySelector(".navlist");
    if(a.style.display == "none"){
        a.style.display = "block";
        
    }
    else{
        a.style.display = "none";
        a.style.right="3%"
    }
  })

  function openFullScreen() {
    var imgSrc = event.target.src;
    var fullscreenImg = document.getElementsByClassName("fullscreen-image")[0];
    fullscreenImg.src = imgSrc;
   fullscreenImg.style.width="70vw";

    var fullscreenContainer = document.getElementsByClassName("fullscreen-container")[0];
    fullscreenContainer.style.display = "flex";
  
}

function closeFullScreen() {
    var fullscreenContainer = document.getElementsByClassName("fullscreen-container")[0];
    fullscreenContainer.style.display = "none";
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms['google-sheet1'];   
    const overlay = document.getElementById('overlay');
    const formSubmitted = localStorage.getItem('formSubmitted');
    if (!formSubmitted) {
        setTimeout(function() {
            overlay.style.display = 'block';
        }, 5000); 
        // overlay.style.display = 'block';

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(form)
                })
                .then(response => {
                    form.reset();
                    localStorage.setItem('formSubmitted', 'true');
                })
                .catch(error => console.error('Error!', error.message));
            document.getElementById('overlay').style.display = 'none';
        });
    }else{
        document.getElementById('overlay').style.display = 'none';
    }

});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});


function showPopup(element) {
    const overlay = document.getElementById('overlay');
    const image = element.querySelector('img');
    image.setAttribute('draggable', 'false');

    const formSubmitted = localStorage.getItem('formSubmitted');
    if (!formSubmitted) {
        overlay.style.display = 'block';
    }else{
        element.querySelector('img').style.filter = 'blur(3px)';
    }
}

function hidePopup() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.blur-img'); 
    const formSubmitted = localStorage.getItem('formSubmitted');
        setInterval(function() {
            images.forEach(function(image) {
                if(formSubmitted){
                    image.style.filter = 'blur(0)';
                }else{
                    image.style.filter = 'blur(10px)';
                }
            });
        }, 0);
});
