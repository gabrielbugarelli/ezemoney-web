import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { Panel } from '../pages/Panel';
import { TransactionsProvider } from '../hooks/useTransactions';
import { AuthenticationProvider } from '../hooks/useAuthentication';

export const Router = () => {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <TransactionsProvider>
          <Routes>
            <Route path='/' element={< SignIn />} />
            <Route path='/panel' element={ <Panel />} />
          </Routes>
        </TransactionsProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  )
}
