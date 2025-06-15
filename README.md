# 📚 Front Biblioteca Personal

Aplicación web moderna para gestionar una colección de libros y sus reseñas. Desarrollada con React + Vite y diseñada para ofrecer una experiencia fluida al usuario, incorpora autenticación segura con Auth0, estilos con TailwindCSS y funcionalidades CRUD completas.

---

## 🚀 Tecnologías utilizadas

| Categoría       | Tecnología                            |
|-----------------|----------------------------------------|
| Framework       | [React](https://reactjs.org/)          |
| Bundler         | [Vite](https://vitejs.dev/)            |
| Autenticación   | [Auth0](https://auth0.com/)            |
| Estilos         | [TailwindCSS](https://tailwindcss.com/) |
| Íconos UI       | Heroicons, React Icons                 |
| UI Components   | [Flowbite](https://flowbite.com/)      |
| Routing         | [React Router](https://reactrouter.com/) |
| Peticiones HTTP | [Axios](https://axios-http.com/)       |

---

## 🧩 Funcionalidades principales

- 🔐 Autenticación de usuarios con Auth0
- 🗃️ Panel administrativo para gestión de libros
- 📖 CRUD completo para libros y sus reseñas
- 🎨 UI responsiva y moderna con Tailwind y Flowbite
- ⚡ Rutas protegidas y navegación con React Router

---

## 📷 Capturas de pantalla

---

![image](https://github.com/user-attachments/assets/ec8e40d9-e06f-4983-81f5-dbae33bc4e20)


---

![image](https://github.com/user-attachments/assets/7a6be804-6a7d-4c23-a9d8-b4df46038ad1)


---

## 🛠 Instalación y ejecución en local

1. Clona este repositorio:

```bash
git clone https://github.com/MrFabiioo/biblioteca-personal.git
cd biblioteca-personal
```

2. Instala las dependencias:
   
```bash
npm install
```

3. Configura tus variables de entorno en .env.local:

```bash
VITE_AUTH0_DOMAIN=tu-dominio.auth0.com
VITE_AUTH0_CLIENT_ID=tu-client-id
VITE_AUTH0_CALLBACK_URL=http://localhost:3000
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 📁 Estructura del proyecto

```text
📁 biblioteca-personal/
├── public/
├── src/
│   ├── components/         # Componentes reutilizables
│   ├── pages/              # Páginas de la app
│   ├── routes/             # Definición de rutas y navegación
│   ├── services/           # Servicios/API helpers
│   └── App.jsx             # Componente raíz
├── .env.local              # Variables de entorno locales
├── tailwind.config.js      # Configuración de Tailwind
├── vite.config.js          # Configuración de Vite
└── package.json            # Dependencias y scripts
```



🥑 Scripts disponibles

```bash
npm run dev       # Inicia servidor de desarrollo
npm run build     # Compila el proyecto para producción
npm run preview   # Previsualiza la build
npm run lint      # Ejecuta linter

```

 Estado del proyecto
✅ Funcional
🛠️ En desarrollo — mejoras futuras incluyen:

* Paginación

* Soporte para múltiples usuarios y roles

🤝 Contribuciones

Este es un proyecto personal. ¡Toda sugerencia, fork o pull request es bienvenido!

📄 Licencia
MIT © 2025 Jose Fabio Ortega Estrada

