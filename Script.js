fetch('telefoane.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('telefoane');
    const filtre = document.querySelectorAll('.filtru');

    function afiseazaTelefoane(filtru) {
      container.innerHTML = '';
      const filtrate = data.filter(tel => filtru === 'Toate' || tel.stare === filtru);
      filtrate.forEach(tel => {
        const card = document.createElement('div');
        card.innerHTML = `
          <img src="${tel.poza}" alt="${tel.titlu}" width="150">
          <h3>${tel.titlu}</h3>
          <p>${tel.pret}</p>
          <a href="${tel.link}" target="_blank">Vezi oferta</a>
        `;
        card.style.border = "1px solid #ccc";
        card.style.padding = "10px";
        card.style.margin = "10px";
        container.appendChild(card);
      });
    }

    filtre.forEach(btn => {
      btn.addEventListener('click', () => {
        afiseazaTelefoane(btn.innerText);
      });
    });

    afiseazaTelefoane('Toate');
  });
