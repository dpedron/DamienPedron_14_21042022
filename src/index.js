import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmployeesProvider } from './utils/context';
import { Spinner } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));

const CreateEmployee = lazy(() => import('./pages/CreateEmployee'));
const EmployeesList = lazy(() => import('./pages/EmployeesList'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EmployeesProvider>
        <Suspense fallback={<Spinner animation="border" />}>
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/employee-list" element={<EmployeesList />} />
          </Routes>
        </Suspense>
      </EmployeesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
