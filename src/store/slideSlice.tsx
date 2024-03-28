import { createSlice } from "@reduxjs/toolkit";

const initialImg = [
  { id: 0, png: "pic0.png", isMain: true },
  { id: 1, png: "pic1.png", isMain: false },
  { id: 2, png: "pic2.png", isMain: false },
];

const slideSlice = createSlice({
  name: "slide",
  initialState: {
    thumbnailImg: initialImg,
    mainImg: initialImg[0],
  },
  reducers: {
    changeMain(state, action) {
      state.thumbnailImg.forEach((img) => {
        img.isMain = false;
      });
      state.thumbnailImg[action.payload].isMain = true;
      state.mainImg = state.thumbnailImg[action.payload];
    },
  },
});

export const { changeMain } = slideSlice.actions;
export default slideSlice.reducer;
