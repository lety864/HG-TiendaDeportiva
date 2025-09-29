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