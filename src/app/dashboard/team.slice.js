import { createSlice } from '@reduxjs/toolkit';


const INITIAL_STATE = {
  teams: [],
};

export const teamSlice = createSlice({
  name: 'team',
  initialState: INITIAL_STATE,
  reducers: {
    cleanTeam(state, action) {
      state.teams = [];
    },
    addTeam(state, action) {
      state.teams = [...state.teams, action.payload];
    },
    editTeam(state, action) {
      const index = state.teams.map(e => e.id).indexOf(action.payload.id)
      const teams = [...state.teams]
      teams.splice(index, 1, action.payload);
      state.teams = teams 
    },
    deleteTeam(state, action) {
      const index = state.teams.map(e => e.id).indexOf(action.payload.id)
      const teams = [...state.teams]
      teams.splice(index, 1);
      state.teams = teams 
    },
  },
});

export const { cleanTeam, addTeam, editTeam, deleteTeam } = teamSlice.actions;

export default teamSlice;
