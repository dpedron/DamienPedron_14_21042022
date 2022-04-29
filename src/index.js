import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmployeesProvider } from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

const CreateEmployee = lazy(() => import('./pages/CreateEmployee'));
const EmployeesList = lazy(() => import('./pages/EmployeesList'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EmployeesProvider>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/employee-list" element={<EmployeesList />} />
          </Routes>
        </Suspense>
      </EmployeesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
