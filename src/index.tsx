import { createRoot } from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react'

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('root not implemented');

const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>);