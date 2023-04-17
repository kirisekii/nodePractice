fetch('http://localhost:3000/')
.then((resp) => resp.json())
.then((response) => {
    const namesList = document.querySelector('ul');
    response.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        namesList.append(li);
    })
}) 


console.log('hello from index file');
const nameButton = document.getElementById('addName');
nameButton.addEventListener('click', () => {
    const name = document.querySelector("input[name='name']").value;
    console.log(name);
   
    fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name}),
      }).then(() => {
        location.reload();
      })
    
});

