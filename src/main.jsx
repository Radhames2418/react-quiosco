import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from "./router.jsx";
import { RouterProvider } from 'react-router-dom';
import {QuioscoProvider} from "./context/QuioscoProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QuioscoProvider>
        <RouterProvider router={router} />
      </QuioscoProvider>
  </React.StrictMode>,
)
