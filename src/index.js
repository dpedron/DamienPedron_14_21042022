import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import EmployeesList from './pages/EmployeesList';
import CreateEmployee from './pages/CreateEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmployeesProvider } from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EmployeesProvider>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employee-list" element={<EmployeesList />} />
        </Routes>
      </EmployeesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
