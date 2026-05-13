# 📦 MERN Posts App

Aplicación web full stack construida con el stack **MERN (MongoDB, Express, React, Node.js)**.

Permite crear publicaciones (posts), guardarlas en una base de datos MongoDB y subir imágenes que se almacenan localmente en el servidor.

---

## 🚀 Funcionalidades

- Crear posts con texto e imagen
- Guardar posts en MongoDB local
- Subida de imágenes al servidor (almacenamiento local)
- Visualización de posts desde el frontend
- API REST entre cliente y servidor

---

## 🧱 Estructura del proyecto

```bash
MERN/
│
├── client/ # Frontend React
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── tailwind.config.js
│
├── server/ # Backend Node + Express
│ ├── models/ # Modelos de MongoDB
│ ├── routes/ # Rutas API
│ ├── upload/ # Imágenes subidas
│ ├── db.js # Conexión a MongoDB
│ ├── config.js
│ ├── index.js
│ └── app.js
│
└── README.md
```

---

## ⚙️ Requisitos

- Node.js instalado
- npm instalado
- MongoDB Community Server instalado localmente

---

## 🛠️ Instalación de MongoDB (IMPORTANTE)

Este proyecto funciona con **MongoDB local**.

### 1. Instalar MongoDB
Descarga MongoDB Community Server:
https://www.mongodb.com/try/download/community

---

### 2. Configurar PATH (OBLIGATORIO)

Debes añadir MongoDB al PATH del sistema:


### Pasos:
1. Buscar: “Editar variables de entorno del sistema”
2. Abrir “Variables de entorno”
3. Seleccionar `Path`
4. Añadir la ruta anterior
5. Guardar y reiniciar terminal

---

### 3. Verificar instalación

```bash
mongod --version

▶️### Ejecución del proyecto

1. Iniciar MongoDB
mongod
2. Backend
cd server
npm install
npm run dev
3. Frontend
cd client
npm install
npm start
🌐 Variables de entorno

Crear archivo .env en /server:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern-posts
📸 Subida de imágenes

Las imágenes se guardan localmente en:

server/upload/
🧠 Tecnologías usadas
MongoDB
Express
React
Node.js
Multer
Axios
TailwindCSS
📌 Notas importantes
MongoDB debe estar ejecutándose antes de iniciar el backend
Si mongod no funciona, revisa el PATH del sistema
Las imágenes NO se guardan en la nube, solo localmente
👨‍💻 Autor

Proyecto MERN personal para práctica de desarrollo full stack.


---

Si quieres, puedo ayudarte a siguiente nivel:
- hacerlo “portfolio ready” con badges, screenshots y demo GIF
- o subirte una versión con endpoints documentados estilo API profesional