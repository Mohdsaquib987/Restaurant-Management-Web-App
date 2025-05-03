// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// --------------------------------------------------------

import React from  "react";
import ReactDOM from 'react-dom/client';

import "./index.css"
import App from './App';
import { StrictMode } from "react";
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,
//     port: 5173, // optional, keeps your port fixed
//   },
// })

const root=ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
