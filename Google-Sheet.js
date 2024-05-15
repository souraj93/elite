const scriptURL = 'https://script.google.com/macros/s/AKfycbz2lx9oXRrhYe-CedPd4Ev7TBc6BemXu2lzuYDb8eXaTeicbJBHCuGjrkHTSWLY8Suk/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    if (response.ok) {
      window.confirm('Thank you! Your form is submitted successfully.', '');
      window.location.reload();
    } else {
      throw new Error('Network response was not OK');
    }
  })
  .catch(error => console.error('Error!', error.message))
})