# 🌐 Nexus Forum

Nexus Forum es una Single Page Application (SPA) dinámica desarrollada para explorar los fundamentos modernos de **React**. El proyecto simula una plataforma de comunidad y blogging, consumiendo datos en tiempo real desde la API pública de [JSONPlaceholder](https://jsonplaceholder.typicode.com/). 

Este proyecto fue construido con un enfoque en la modularidad de componentes, el manejo avanzado de estados, y una experiencia de usuario fluida mediante enrutamiento del lado del cliente.

## 🚀 Características Principales (Features)

El proyecto va más allá de un simple consumo de API, incorporando una arquitectura multicapa:

* **Landing Page Interactiva (`/`):** Presentación del proyecto y visión general de la plataforma.
* **Feed de Publicaciones (`/posts`):** Renderizado dinámico del listado global de posts utilizando `useState` y `useEffect`.
* **Directorio de Autores (`/users`):** Interfaz en formato de grilla (Cards) para explorar a todos los miembros de la comunidad.
* **Perfiles Dinámicos (`/users/:userId`):** Rutas anidadas que capturan parámetros de la URL para mostrar la información detallada de un autor específico y filtrar exclusivamente sus publicaciones.
* **Diseño Responsivo:** UI construida íntegramente con **Bootstrap** para garantizar adaptabilidad en dispositivos móviles y de escritorio.

## 🛠️ Tecnologías Utilizadas (Tech Stack)

* **Frontend:** React.js (Componentes Funcionales y Hooks)
* **Build Tool:** Vite (Para un entorno de desarrollo ultrarrápido)
* **Enrutamiento:** React Router Dom v6
* **Estilos:** Bootstrap 5
* **Consumo de Datos:** Fetch API nativo

## ⚙️ Instalación y Ejecución Local

Si deseas correr este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/nexus-forum.git](https://github.com/tu-usuario/nexus-forum.git)