const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filterInput',
  initialState: { filter: '' },
  reducers: {
    filterForContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterForContacts } = filterSlice.actions;

export default filterSlice.reducer;
