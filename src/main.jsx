
import { createRoot } from 'react-dom/client';


 // Đảm bảo rằng đường dẫn đến tệp Login là chính xác
import Router from './routers/router.jsx';

// Tạo root và render ứng dụng
createRoot(document.getElementById('root')).render(
<Router/>
);
