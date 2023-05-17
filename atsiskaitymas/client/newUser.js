const form = document.querySelector('form');
const submit = document.querySelector('.blue');
const reset = document.querySelector('.white');
const membershipSelect = document.getElementById('service_id');

fetch('http://localhost:3000/memberships')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((membership) => {
      const option = document.createElement('option');
      option.value = membership._id;
      option.text = membership.name;
      membershipSelect.appendChild(option);
    });
  })
  .catch((error) => console.error(error));

submit.addEventListener('click', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const membershipId = membershipSelect.value;

  const requestBody = {
    ...Object.fromEntries(formData.entries()),
    service_id: membershipId,
  };

  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
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
