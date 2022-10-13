import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { AuthWrapper} from './pages'

// domain -> dev-wt74bt00.us.auth0.com
// client-id > 9kXO5ruVfNme8OnL68GAEwwRPYzE7Wrw

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<BrowserRouter>
<Auth0Provider
    domain='dev-wt74bt00.us.auth0.com'
    clientId='9kXO5ruVfNme8OnL68GAEwwRPYzE7Wrw'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
    <ProductsProvider>
    <FilterProvider>
        <CartProvider>
          
          <App />
         
        
        </CartProvider>
    </FilterProvider>
</ProductsProvider> 
    </UserProvider>
  
  </Auth0Provider>,

</BrowserRouter>
)
