import { createRoot } from 'react-dom/client'
import Landing from './frontend/components/App.tsx'

const app: HTMLElement | null = document.getElementById('root')

if (app) createRoot(app).render(<Landing />)
