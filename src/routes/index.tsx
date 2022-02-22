import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Authentication } from '../pages/Authentication';
import { App } from '../pages/Panel/App';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Authentication />} />
        <Route path='/panel' element={ <App />} />
      </Routes>
    </BrowserRouter>
  )
}
