import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

let intialEmployees = [
  {
    id: 'C0118',
    firstName: 'Anil',
    lastName: 'Khadka',
    dob: '2023-04-04T03:05:57.224Z',
    gender: 'OTHERS',
    address: 'Kapurdhara, Samakhusi, Mahepi marg',
    phone: '9868224411',
    email: 'anil.khadka3777@gmail.com',
    startsAt: '2023-04-27T23:45:00.979Z',
    endsIn: '2023-04-27T23:45:00.819Z',
    jobPosition: 'Fabricator',
    billableHours: 123
  }
]

const INITIAL_STATE = {
  employees: intialEmployees,
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: INITIAL_STATE,
  reducers: {
    cleanEmployee(state, action) {
      state.employees = [];
    },
    addEmployee(state, action) {
      state.employees = [...state.employees, action.payload];
    },
    editEmployee(state, action) {
      const index = state.employees.map(e => e.id).indexOf(action.payload.id)
      const employees = [...state.employees]
      employees.splice(index, 1, action.payload);
      state.employees = employees 
    },
    deleteEmployee(state, action) {
      const index = state.employees.map(e => e.id).indexOf(action.payload.id)
      const employees = [...state.employees]
      employees.splice(index, 1);
      state.employees = employees 
    },
  },
});

export const { cleanEmployee, addEmployee, editEmployee, deleteEmployee } = employeeSlice.actions;

export default employeeSlice;
