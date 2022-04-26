import { createContext, useState, useEffect } from 'react';

export const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
  const [employeesData, setEmployeesData] = useState(
    JSON.parse(localStorage.getItem('employees')) || [] // If 'employees' is in the local storage, get it, else return an empty array
  );

  // To add a new employee
  const addEmployee = (newEmployee) => {
    setEmployeesData((employeesData) => [...employeesData, newEmployee]);
  };

  // Load employees data from localStorage
  useEffect(() => {
    const employeesDataStorage = JSON.parse(localStorage.getItem('employees'));
    setEmployeesData(employeesDataStorage);
  }, []);

  // Save employees data to localStorage
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employeesData));
  }, [employeesData]);

  return (
    <EmployeesContext.Provider value={{ employeesData, addEmployee }}>
      {children}
    </EmployeesContext.Provider>
  );
};
