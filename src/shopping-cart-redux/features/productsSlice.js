const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading"
});
const initialState = {
  data: [],
  status: STATUSES.IDLE
};
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  console.log(res, "this is res");
  const data = await res.json();
  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = STATUSES.LOADING;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      console.log(action);
      state.data = action.payload;
      state.status = STATUSES.IDLE;
    },

    [fetchProducts.rejected]: (state, action) => {
      state.status = STATUSES.ERROR;
    }
  }
});

export default productsSlice.reducer;
