const cards = document.querySelector('.cards');
const sortSelect = document.getElementById('sort');

sortSelect.addEventListener('change', () => {
  const sortBy = sortSelect.value;

  fetch(`http://localhost:3000/users?sort=${sortBy}`)
    .then((response) => response.json())
    .then((data) => outputData(data))
    .catch((error) => console.error(error));
});

const fetchData = () => {
  fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((data) => outputData(data))
    .catch((error) => console.error(error));

  function outputData(data) {
    cards.innerHTML = '';

    data.forEach((user) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const h3 = document.createElement('h3');
      h3.textContent = `${user.fname} ${user.lname}`;

      const email = document.createElement('div');
      email.textContent = `Email: ${user.email}`;

      const membership = document.createElement('div');
      membership.textContent = `Membership: ${user.service_id}`;

      card.append(h3, email, membership);
      cards.appendChild(card);
    });
  }
};

fetchData();
