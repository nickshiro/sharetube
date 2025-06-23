import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';

const wrapper = document.getElementById('root');

if (!wrapper) {
    throw new Error("Root element is not found");
}

createRoot(wrapper).render(<App />);
