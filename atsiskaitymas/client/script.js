const card = document.querySelector('.cards');

const fetchData = () => {
  fetch('http://localhost:3000/memberships')
    .then((resp) => {
      if (!resp.ok) {
        throw new Error('Network response was not OK');
      }
      return resp.json();
    })
    .then((data) => outputData(data))
    .catch((error) => console.error(error));

  function outputData(data) {
    data.forEach((membership) => {
      const newCard = document.createElement('div');
      const h1 = document.createElement('h1');
      const div = document.createElement('div');
      const deleteBtn = document.createElement('button');

      h1.textContent = `${membership.price} ${membership.name}`;
      div.textContent = membership.descripcion;
      deleteBtn.textContent = 'Delete';

      deleteBtn.addEventListener('click', () => {
        const id = membership.id;
        fetch(`http://localhost:3000/memberships/${id}`, { method: 'DELETE' })
          .then((resp) => {
            if (!resp.ok) {
              throw new Error('Network response was not OK');
            }
            return resp.json();
          })
          .then(() => newCard.remove())
          .catch((error) => console.error(error));
      });

      newCard.append(h1, div, deleteBtn);
      card.append(newCard);

      newCard.style.backgroundColor = 'white';
      newCard.style.height = '150px';
      newCard.style.width = '300';
      newCard.style.marginTop = '20px';
      newCard.style.marginLeft = '20px';
      newCard.style.paddingTop = '40px';
      newCard.style.textAlign = 'center';
    });
  }
};

fetchData();
