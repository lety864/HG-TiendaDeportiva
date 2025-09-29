// Función asíncrona para consumir la API
const URL_FOOTBALL = "http://localhost:3000/Football";
const URL_BASQUETBALL = "http://localhost:3000/Basquetball";
const URL_BASEBALL = "http://localhost:3000/BaseBall";

async function cargarArticulosFootball() {
      try {
        const res = await fetch(URL_FOOTBALL);
        const data = await res.json();

        const container = document.getElementById("articulos");
        container.innerHTML = "";

        data.forEach(item => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <h2>${item.nombre}</h2>
            <img src="${item.imagen}" alt="${item.nombre}">
            <p>${item.precio}</p>
            <p>${item.stock}</p>
          `;
          container.appendChild(card);
        });

      } catch (error) {
        console.error("Error cargando artículos:", error);
      }
}


async function cargarArticulosBasquetBall() {
      try {
        const res = await fetch(URL_BASQUETBALL);
        const data = await res.json();

        const container = document.getElementById("articulos");
        container.innerHTML = "";

        data.forEach(item => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <h2>${item.nombre}</h2>
            <img src="${item.imagen}" alt="${item.nombre}">
            <p>${item.precio}</p>
            <p>${item.stock}</p>
          `;
          container.appendChild(card);
        });

      } catch (error) {
        console.error("Error cargando artículos:", error);
      }
}

async function cargarArticulosBaseball() {
      try {
        const res = await fetch(URL_BASEBALL);
        const data = await res.json();

        const container = document.getElementById("articulos");
        container.innerHTML = "";

        data.forEach(item => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <h2>${item.nombre}</h2>
            <img src="${item.imagen}" alt="${item.nombre}">
            <p>${item.precio}</p>
            <p>${item.stock}</p>
          `;
          container.appendChild(card);
        });

      } catch (error) {
        console.error("Error cargando artículos:", error);
      }
}
