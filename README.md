# 🖥️ Word Search Frontend - React

Este proyecto es una aplicación web desarrollada en React que permite a los usuarios cargar una matriz de sopa de letras (14x14) y una lista de palabras, para luego consultar una API y visualizar cuáles palabras fueron encontradas y cuáles no.

---

## 📌 Descripción del proyecto

Este frontend fue desarrollado como parte de una prueba técnica para complementar una API construida con NestJS. El objetivo es proporcionar una interfaz clara donde el usuario pueda:

- Ingresar una matriz de letras en formato texto (14 filas, separadas por comas).
- Ingresar una lista de palabras separadas por comas o líneas.
- Visualizar las palabras que fueron encontradas en la matriz y las que no.
- Hacerlo todo desde un entorno web intuitivo y rápido.

---

## 🛠 Tecnologías utilizadas

- [React](https://reactjs.org/) - Biblioteca principal para la interfaz
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [React Hook Form](https://react-hook-form.com/) - Manejo de formularios
- [Vite](https://vitejs.dev/) - Empaquetador para desarrollo rápido
- [Css Modules](https://github.com/css-modules/css-modules) - Manejo de estilos CSS modulares
---

## 🚀 Cómo ejecutar el proyecto

### 📦 Requisitos previos

- Node.js (v16 o superior)
- npm o yarn

### ⚙️ Instalación

```bash
# Clona el repositorio
git clone https://github.com/sebastianbarrerah/word-search-front/tree/main
cd word-search-front

# Instala dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```

---

### 🧪 ¿Cómo usar la aplicación?
#### 1. Ingresa la matriz
- Debe ser una matriz de 14 filas, cada una con 14 letras separadas por comas.

- Ejemplo (primeras 2 filas):
```
N,D,E,K,I,C,A,N,G,U,R,O,G,E
D,F,G,M,J,F,L,A,N,G,P,Q,R,S
```

#### 2. Ingresa las palabras a buscar
- Debe ser una lista de palabras separadas por comas o líneas.

- Ejemplo:
```
GATO
PERRO
JAGUAR
LEÓN  
TIGRE
```

#### 3. Haz clic en "Analizar Sopa de Letras"
  - La aplicación realizará una petición POST a la API y mostrará los resultados en la pantalla.
  - Si la matriz y las palabras son correctas, se mostrarán los resultados en la pantalla.
  - Si hay errores, se mostrará un mensaje de error en la pantalla.

### 🧱 Estructura del proyecto
src/
├── api/
│   └── wordsearch.ts      
├── components/
│   └── WordSearchForm.tsx  
├── pages/
│   └── Home.tsx             
├── types/
│   └── wordsearch.d.ts      
├── App.tsx
└── main.tsx

---

## Estructura de la matriz de sopa de letras

```
N,D,E,K,I,C,A,N,G,U,R,O,G,E
S,X,R,Y,K,V,I,I,Q,G,W,Q,O,D
J,A,G,U,A,R,Z,W,B,N,K,O,U,A
M,L,E,L,E,F,A,N,T,E,H,O,G,W
L,O,B,O,N,U,T,R,I,A,O,U,S,U
W,W,O,S,O,G,A,T,O,V,R,T,M,O
H,L,Z,N,C,T,Y,Z,E,O,X,A,U,R
C,E,C,Y,T,I,B,U,R,O,N,S,R,O
C,O,N,E,J,O,Y,U,S,M,R,S,H,T
Y,N,I,F,E,F,P,T,E,Z,O,O,S,F
O,S,S,E,R,P,I,E,N,T,E,F,L,G
P,P,V,D,D,X,U,F,A,L,C,O,N,Y
M,O,N,O,C,U,Q,W,M,A,N,A,T,I
N,N,X,H,E,B,P,M,U,P,E,R,R,O
```
---

### ✍️ Autor
#### Sebastián Herrera
👨‍💻 Desarrollador Web | JavaScript | Node.js | NestJS | React
🌐 https://www.linkedin.com/in/sebastianbarrerah/