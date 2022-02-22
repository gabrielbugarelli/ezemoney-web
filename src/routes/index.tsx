import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { Panel } from '../pages/Panel';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< SignIn />} />
        <Route path='/panel' element={ <Panel />} />
      </Routes>
    </BrowserRouter>
  )
}
