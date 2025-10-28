// Función asíncrona para consumir la API
const URL_FOOTBALL = "http://localhost:3000/Football";
const URL_BASQUETBALL = "http://localhost:3000/Basquetball";
const URL_BASEBALL = "http://localhost:3000/BaseBall";

// ========== FUNCIÓN PARA TOGGLE DE BOTONES ==========
function toggleButton(clickedButton) {
  const container = document.getElementById("articulos");
  const isActive = clickedButton.classList.contains('active');
  
  // Si el botón ya está activo, desactívalo y limpia los artículos
  if (isActive) {
    clickedButton.classList.remove('active');
    container.innerHTML = "";
    return true; // Indica que se cerró la sección
  }
  
  // Si no está activo, desactiva todos los demás y activa este
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  clickedButton.classList.add('active');
  return false; // Indica que se abrió la sección
}

async function cargarArticulosFootball() {
      // Toggle del botón - si retorna true, la sección se cerró
      if (toggleButton(event.currentTarget)) {
        return; // Salir sin cargar artículos
      }
      
      try {
        const res = await fetch(URL_FOOTBALL);
        const data = await res.json();

        const container = document.getElementById("articulos");
        container.innerHTML = "";

        data.forEach(item => {
          const card = document.createElement("div");
          card.className = "col-sm-6 col-md-4 col-lg-3 mb-4";
          card.innerHTML = `
            <div class="card h-100">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
              <div class="card-body">
                <h5 class="card-title text-center">${item.nombre}</h5>
                <p class="card-text text-center">Stock: ${item.stock}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fw-bold">$ ${item.precio}</span>
                  <a href="#" 
                        class="btn btn-primary agregar-carrito" 
                        data-id="${item.id}" data-nombre="${item.nombre}"  data-precio="${item.precio}"  data-img="${item.imagen}"
                    >Agregar a carrito</a>
                </div>              
              </div>
            </div>
          `;
          container.appendChild(card);
        });

      } catch (error) {
        console.error("Error cargando artículos:", error);
      }
}


async function cargarArticulosBasquetBall() {
      // Toggle del botón - si retorna true, la sección se cerró
      if (toggleButton(event.currentTarget)) {
        return; // Salir sin cargar artículos
      }
      
      try {
        const res = await fetch(URL_BASQUETBALL);
        const data = await res.json();

        const container = document.getElementById("articulos");
        container.innerHTML = "";

        data.forEach(item => {
          const card = document.createElement("div");
          card.className = "col-sm-6 col-md-4 col-lg-3 mb-4";
          card.innerHTML = `
            <div class="card h-100">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
              <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text text-center">Stock: ${item.stock}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fw-bold">$ ${item.precio}</span>
                  <a href="#" 
                        class="btn btn-primary agregar-carrito" 
                        data-id="${item.id}" data-nombre="${item.nombre}"  data-precio="${item.precio}"  data-img="${item.imagen}"
                    >Agregar a carrito</a>
                </div>              
              </div>
            </div>
          `;
          container.appendChild(card);
        });

      } catch (error) {
        console.error("Error cargando artículos:", error);
      }
}

async function cargarArticulosBaseball() {
      // Toggle del botón - si retorna true, la sección se cerró
      if (toggleButton(event.currentTarget)) {
        return; // Salir sin cargar artículos
      }
      
      try {
        const res = await fetch(URL_BASEBALL);
        const data = await res.json();

        const container = document.getElementById("articulos");
        container.innerHTML = "";

        data.forEach(item => {
          const card = document.createElement("div");
          card.className = "col-sm-6 col-md-4 col-lg-3 mb-4";
          card.innerHTML = `
            <div class="card h-100">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
              <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text text-center">Stock: ${item.stock}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fw-bold">$ ${item.precio}</span>
                  <a href="#" 
                        class="btn btn-primary agregar-carrito" 
                        data-id="${item.id}" data-nombre="${item.nombre}"  data-precio="${item.precio}"  data-img="${item.imagen}"
                    >Agregar a carrito</a>
                </div>              
              </div>
            </div>
          `;
          container.appendChild(card);
        });

      } catch (error) {
        console.error("Error cargando artículos:", error);
      }
}