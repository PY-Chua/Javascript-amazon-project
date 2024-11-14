const xhr = new XMLHttpRequest();

// set-up first then run action
xhr.addEventListener('load', () => {
    console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();