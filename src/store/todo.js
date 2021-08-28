import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => [
  { id: 1, content: "Выполнить ДЗ", done: false },
  { id: 2, content: "Подписаться на канал ConstCode", done: false },
  { id: 3, content: "Поставить лайк этому видео", done: false },
  { id: 4, content: "Зайти на сайт constcode.ru", done: false }
];

const todoSlice = createSlice({
  name: "todo",

  initialState: getInitialState(),

  reducers: {
    add(items, action) {
      const item = {
        id: 1 + Math.max(0, ...items.map((item) => item.id)),
        content: action.payload,
        done: false
      };

      // return [...items, item];
      items.push(item);
    },

    remove(items, action) {
      return items.filter((x) => x.id !== action.id);
    },

    doneToggle(items, action) {
      const item = items.find((item) => item.id === action.payload);

      if (item) {
        item.done = !item.done;
      }
    }
  }
});

export const { add, remove, doneToggle } = todoSlice.actions;

export default todoSlice.reducer;
