import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  favorites: [],
  filter: {
    language: "",
    level: "",
    price: "",
  },
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    addTeachers: (state, action) => {
      state.items = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.lessons_done !== action.payload.lessons_done
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    removeFilter(state) {
      state.filter.language = "";
      state.filter.level = "";
      state.filter.price = "";
    },
  },
});

export const teachersReducer = teachersSlice.reducer;

export const {
  addTeachers,
  addFavorite,
  removeFavorite,
  setFilter,
  removeFilter,
} = teachersSlice.actions;
