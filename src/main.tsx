import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId="928661783676-ajen2rl4j30b97ipakhed5alfsm0kcum.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider >
  ,
)
