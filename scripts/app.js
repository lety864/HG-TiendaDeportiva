// Función asíncrona para consumir la API
const URL_FOOTBALL = "http://localhost:3000/Football";
const URL_BASQUETBALL = "http://localhost:3000/Basquetball";
const URL_BASEBALL = "http://localhost:3000/BaseBall";

// const btnFootball = document.getElementById("btnFootball");
// const btnBasquetBall = document.getElementById("btnBasquetBall");
// const btnBaseBall = document.getElementById("btnBaseBall");

async function cargarArticulosFootball() {
      try {
        const res = await fetch(URL_FOOTBALL); // espera la respuesta
        const data = await res.json(); // espera a convertir en JSON

        const container = document.getElementById("articulos");
        container.innerHTML = ""; // limpiar antes de renderizar

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
        const res = await fetch(URL_BASQUETBALL); // espera la respuesta
        const data = await res.json(); // espera a convertir en JSON

        const container = document.getElementById("articulos");
        container.innerHTML = ""; // limpiar antes de renderizar

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
        const res = await fetch(URL_BASEBALL); // espera la respuesta
        const data = await res.json(); // espera a convertir en JSON

        const container = document.getElementById("articulos");
        container.innerHTML = ""; // limpiar antes de renderizar

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
