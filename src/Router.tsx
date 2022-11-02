import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/defaultLayout/default';
import { CompletOrder } from './pages/CompletOrder';
import { HomePage } from './pages/Homepage';
import { OrderConfirmatedPage } from './pages/OrderConfirmated';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completOrder" element={<CompletOrder />} />
        <Route path="/orderConfirmated" element={<OrderConfirmatedPage />} />
      </Route>
    </Routes>
  )
}
