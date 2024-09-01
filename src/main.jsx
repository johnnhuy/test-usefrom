
import { createRoot } from 'react-dom/client';
import { BrowserRouter  } from 'react-router-dom';


import Router from './routers/router.jsx';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Router/>

    </BrowserRouter>
);
