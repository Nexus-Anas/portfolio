let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function showTab(tab) {
    for (item of tablinks) {
        item.classList.remove('active-link');
    }

    for (item of tabcontents) {
        item.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tab).classList.add('active-tab');
}



var sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = '0';
}

function closemenu() {
    sidemenu.style.right = '-200px';
}





//Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyg4KrP-A9lZ44zX5zkt_TxhbINZfviSMcF5fq_vFntUv03b-L-cjU3iMVKZwX2q42yUA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg-popup');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(() => {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
})