import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { Panel } from '../pages/Panel';
import { NotFoundPage } from '../pages/NotFoundPage';
import { TransactionsProvider } from '../hooks/useTransactions';
import { AuthenticationProvider } from '../hooks/useAuthentication';

export const Router = () => {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <TransactionsProvider>
          <Routes>
            <Route path='/' element={< App />} />
            <Route path='/panel' element={ <Panel />} />
            <Route path='*' element={ <NotFoundPage />} />
          </Routes>
        </TransactionsProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  )
}
