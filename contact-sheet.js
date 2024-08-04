const scriptURL = 'https://script.google.com/macros/s/AKfycbxmYa3Lzp2Mxmkrnpjzmci3LjmHhQK709gU_3Wq2ANFF7LRQbYQo0BomgRJw8dl9WER/exec'



const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {

        
       
      // Reload the page


        
        
        window.confirm('Thank you for your feedback! We will reach out to you shortly', '');



        window.location.reload();
      } else {
        throw new Error('Network response was not OK');
      }
    })
    .catch(error => console.error('Error!', error.message))
})

