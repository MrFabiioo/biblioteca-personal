import { Auth0Provider  } from '@auth0/auth0-react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/App'
import './index.css'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider 
    domain="https://dev-ams4gbusekbvzp1e.us.auth0.com"
    clientId="nVm5cOyae1UoMGpMEpEk73ceNGo57TtU"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://api.librery.co",
      scope: "openid profile email read:endpoints"
    }}
    cacheLocation="localstorage"
    >
    <App />
    </Auth0Provider >
  </StrictMode>,
)
