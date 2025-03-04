import { Auth0Provider  } from '@auth0/auth0-react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/App'
import './index.css'


const config ={
    domain: import.meta.env.VITE_AUTH0_ISSUER_BASE_URL,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    authorizationParams:{
      redirect_uri: window.location.origin,
      audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      scope: import.meta.env.VITE_AUTH0_SCOPE,
    },
    cacheLocation:"localstorage"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider {...config} >
    <App />
    </Auth0Provider >
  </StrictMode>,
)
