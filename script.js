<<<<<<< HEAD
// Datos del equipo del proyecto
const teamMembers = [
  {
    name: "TU NOMBRE REAL",
    role: "Tu Rol Real",
    linkedin: "https://www.linkedin.com/in/TU-PERFIL-REAL",
    email: "tu@email.com",
    github: "tugithub"
  },
  {
    name: "TU NOMBRE REAL",
    role: "Tu Rol Real",
    linkedin: "https://www.linkedin.com/in/TU-PERFIL-REAL",
    email: "tu@email.com",
    github: "tugithub"
  },
  {
    name: "TU NOMBRE REAL",
    role: "Tu Rol Real",
    linkedin: "https://www.linkedin.com/in/TU-PERFIL-REAL",
    email: "tu@email.com",
    github: "tugithub"
  },
  {
    name: "TU NOMBRE REAL",
    role: "Tu Rol Real",
    linkedin: "https://www.linkedin.com/in/TU-PERFIL-REAL",
    email: "tu@email.com",
    github: "tugithub"
  },
  {
    name: "TU NOMBRE REAL",
    role: "Tu Rol Real",
    linkedin: "https://www.linkedin.com/in/TU-PERFIL-REAL",
    email: "tu@email.com",
    github: "tugithub"
  },
  {
    name: "TU NOMBRE REAL",
    role: "Tu Rol Real",
    linkedin: "https://www.linkedin.com/in/TU-PERFIL-REAL",
    email: "tu@email.com",
    github: "tugithub"
  },
  {
    name: "TU NOMBRE REAL",
    role: "Tu Rol Real",
    linkedin: "https://www.linkedin.com/in/TU-PERFIL-REAL",
    email: "tu@email.com",
    github: "tugithub"
  },
  {
    name: "TU NOMBRE REAL",
    role: "Tu Rol Real",
    linkedin: "https://www.linkedin.com/in/TU-PERFIL-REAL",
    email: "tu@email.com",
    github: "tugithub"
  },
];

function renderTeam() {
  const container = document.getElementById('team-container');
  
  // Verificar que existe el contenedor
  if (!container) {
    console.error('❌ No se encontró el contenedor del equipo');
    return;
  }

  container.innerHTML = '';
  
  // Renderizar cada miembro del equipo
  teamMembers.forEach(member => {
    const teamCard = `
      <div class="col-lg-3 col-md-6">
        <div class="team-card">
          <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="team-member-name">
            ${member.name}
            <i class="bi bi-linkedin linkedin-icon"></i>
          </a>
          <p class="team-role mt-2">${member.role}</p>
          <div class="contact-info mt-3">
            <p class="mb-2">
              <i class="bi bi-envelope-fill"></i>
              ${member.email}
            </p>
            <p class="mb-0">
              <i class="bi bi-github"></i>
              @${member.github}
            </p>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += teamCard;
  });

  console.log(`✅ Equipo renderizado: ${teamMembers.length} miembros`);
}

// EJECUTAR AL CARGAR LA PÁGINA

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Iniciando LEGENDZONE...');
  renderTeam();
});
=======
// ======= FUNCIONES DE LOCALSTORAGE =======

function obtenerCarrito() {
  const carrito = localStorage.getItem('legendzoneCarrito');
  return carrito ? JSON.parse(carrito) : [];
}

function guardarCarrito(carrito) {
  localStorage.setItem('legendzoneCarrito', JSON.stringify(carrito));
}

// ======= AGREGAR PRODUCTO =======

function agregarAlCarrito(producto) {
  let carrito = obtenerCarrito();
  const productoExistente = carrito.find(item => item.id === producto.id);
  
  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: parseFloat(producto.precio),
      img: producto.img,
      categoria: producto.categoria,
      cantidad: 1
    });
  }
  
  guardarCarrito(carrito);
  actualizarBadgeCarrito();
  mostrarNotificacion('Producto agregado al carrito');
}

// ======= ACTUALIZAR BADGE =======

function actualizarBadgeCarrito() {
  const carrito = obtenerCarrito();
  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
  const badge = document.getElementById('cartBadge');
  
  if (badge) {
    if (totalItems > 0) {
      badge.textContent = totalItems;
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }
  }
}

// ======= NOTIFICACIONES =======

function mostrarNotificacion(mensaje) {
  const notif = document.createElement('div');
  notif.className = 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3';
  notif.style.zIndex = '9999';
  notif.textContent = mensaje;
  
  document.body.appendChild(notif);
  
  setTimeout(() => {
    notif.remove();
  }, 2000);
}

// ======= AGREGAR PRODUCTOS - DELEGACIÓN DE EVENTOS =======

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('agregar-carrito')) {
    e.preventDefault();
    
    const producto = {
      id: e.target.getAttribute('data-id'),
      nombre: e.target.getAttribute('data-nombre'),
      precio: e.target.getAttribute('data-precio'),
      img: e.target.getAttribute('data-img'),
      categoria: e.target.getAttribute('data-categoria')
    };
    
    agregarAlCarrito(producto);
  }
});

// ======= RENDERIZAR CARRITO =======

function renderizarCarrito() {
  const carrito = obtenerCarrito();
  const contenedor = document.getElementById('cartItemsContainer');
  
  if (!contenedor) return;
  
  if (carrito.length === 0) {
    contenedor.innerHTML = `
      <div class="text-center py-5">
        <i class="bi bi-cart-x" style="font-size: 5rem; color: #ccc;"></i>
        <h3 class="mt-3">Tu carrito está vacío</h3>
        <a href="index.html" class="btn btn-primary mt-3">Ir a comprar</a>
      </div>
    `;
    actualizarTotales();
    return;
  }
  
  contenedor.innerHTML = carrito.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="item-image">
        <img src="${item.img}" alt="${item.nombre}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
      </div>
      <div class="item-details">
        <div>
          <div class="item-brand">${item.categoria}</div>
          <h3 class="item-name">${item.nombre}</h3>
        </div>
        <div class="item-actions">
          <div class="quantity-control">
            <button class="qty-btn" onclick="actualizarCantidad('${item.id}', -1)">−</button>
            <span class="qty-number">${item.cantidad}</span>
            <button class="qty-btn" onclick="actualizarCantidad('${item.id}', 1)">+</button>
          </div>
          <button class="remove-btn" onclick="eliminarProducto('${item.id}')">Eliminar</button>
        </div>
      </div>
      <div class="item-price-section">
        <div class="item-price">$${(item.precio * item.cantidad).toFixed(2)}</div>
      </div>
    </div>
  `).join('');
  
  actualizarTotales();
}

// ======= ACTUALIZAR CANTIDAD =======

function actualizarCantidad(id, cambio) {
  let carrito = obtenerCarrito();
  const producto = carrito.find(item => item.id === id);
  
  if (producto) {
    producto.cantidad += cambio;
    
    if (producto.cantidad <= 0) {
      carrito = carrito.filter(item => item.id !== id);
    }
    
    guardarCarrito(carrito);
    renderizarCarrito();
    actualizarBadgeCarrito();
  }
}

// ======= ELIMINAR PRODUCTO =======

function eliminarProducto(id) {
  let carrito = obtenerCarrito();
  carrito = carrito.filter(item => item.id !== id);
  
  guardarCarrito(carrito);
  renderizarCarrito();
  actualizarBadgeCarrito();
}

// ======= ACTUALIZAR TOTALES =======

function actualizarTotales() {
  const carrito = obtenerCarrito();
  
  const subtotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  const impuestos = subtotal * 0.08;
  const total = subtotal + impuestos;
  
  const subtotalEl = document.getElementById('subtotal');
  const taxesEl = document.getElementById('taxes');
  const totalEl = document.getElementById('total');
  const itemCountEl = document.getElementById('itemCount');
  
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (taxesEl) taxesEl.textContent = `$${impuestos.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  
  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
  if (itemCountEl) itemCountEl.textContent = totalItems;
}

// ======= CHECKOUT =======

function checkout() {
  const carrito = obtenerCarrito();
  
  if (carrito.length === 0) {
    alert('Tu carrito está vacío');
    return;
  }
  
  alert('Gracias por tu compra. Total de productos: ' + carrito.length);
  
  localStorage.removeItem('legendzoneCarrito');
  renderizarCarrito();
  actualizarBadgeCarrito();
}

// ======= RENDERIZAR SOLO EN carrito.html =======

if (window.location.pathname.includes('carrito.html')) {
  document.addEventListener('DOMContentLoaded', renderizarCarrito);
}

// ======= ACTUALIZAR BADGE AL CARGAR index.html =======

document.addEventListener('DOMContentLoaded', actualizarBadgeCarrito);
>>>>>>> 8aeb3f2 (Actualizaciones de index, script y estilos)
