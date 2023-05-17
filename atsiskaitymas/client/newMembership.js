const form = document.querySelector('form');
const submit = document.querySelector('.blue');
const reset = document.querySelector('.white');

submit.addEventListener('click', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('http://localhost:3000/memberships', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData.entries())),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
});

reset.addEventListener('click', (event) => {
  event.preventDefault();
  form.reset();
});
