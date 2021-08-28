import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => [
  { id: 1, name: "Алексей", surname: "Данчин" },
  { id: 2, name: "Сергей", surname: "Олло" },
  { id: 3, name: "Дмитрий", surname: "Верх" }
];

export const usersSlice = createSlice({
  name: "users",

  initialState: getInitialState(),

  reducers: {
    create(users, action) {
      const user = {
        ...action.data,
        id: 1 + Math.max(0, ...users.map((user) => user.id))
      };

      users.push(user);
    },

    edit(users, action) {
      const user = users.find((x) => x.id === action.payload.id);

      if (user) {
        Object.assign(user, action.payload);
      }
    },

    remove(users, action) {
      const index = users.findIndex((user) => user.id === action.id);
      if (index !== -1) {
        users.splice(index, 1);
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { create, edit, remove } = usersSlice.actions;

export default usersSlice.reducer;
