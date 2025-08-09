# Proyecto Fullstack: Vite + Node.js + MongoDB + Docker

## Despliegue en Render (Backend)
1. Ve a [Render](https://render.com/), crea un nuevo servicio web.
2. Selecciona tu repositorio y elige `/backend` como directorio raíz.
3. Render detectará el `Dockerfile` automáticamente.
4. Agrega la variable de entorno `MONGO_URI` con la URL de tu base de datos MongoDB.
5. El comando de inicio debe ser: `npm start` (Render lo detecta por defecto).

## Despliegue en Vercel (Frontend)
1. Ve a [Vercel](https://vercel.com/), crea un nuevo proyecto y selecciona `/frontend` como directorio raíz.
2. Vercel detectará automáticamente Vite y React.
3. En la configuración de variables de entorno, agrega:
	- `VITE_API_URL=https://<tu-backend-en-render>.onrender.com/api/clicks`
4. Despliega el proyecto.

## Uso local con Docker Compose
1. Ejecuta en la raíz del proyecto:
	```sh
	docker-compose up --build
	```
2. El frontend estará en `http://localhost:5173` y el backend en `http://localhost:3001`.

---

## Estructura del proyecto
- `/backend`: Node.js + Express + MongoDB
- `/frontend`: Vite + React
- `/nginx`: Configuración de NGINX para desarrollo local
- `docker-compose.yml`: Orquestación local

---

## Notas
- Recuerda configurar correctamente las variables de entorno en cada plataforma.
- El frontend usa la variable `VITE_API_URL` para comunicarse con el backend.
