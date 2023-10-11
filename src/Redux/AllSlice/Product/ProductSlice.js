import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let api_url = "http://localhost:4000/product";

// Async action to fetch products
export const fetchProduct = createAsyncThunk("product/fetchProducts", async () => {
  const res = await axios.get(api_url);
  return res?.data;
});

// Async action to select a product by ID
export const selectProduct = createAsyncThunk(
  "product/selectProduct",
  async (id) => {
    const res = await axios.get(`${api_url}/${id}`);
    return res?.data;
  }
);

// Async action to add a product to the wishlist
export const addToWishlist = createAsyncThunk(
  "product/addToWishlist",
  async (product) => {
    return product;
  }
);

// Async action to remove a product from the wishlist
export const removeFromWishlist = createAsyncThunk(
  "product/removeFromWishlist",
  async (productId) => {
    return productId;
  }
);

// Async action to add a product to the cart
export const addToCart = createAsyncThunk(
  "product/addToCart",
  async (product) => {
    return product;
  }
);

export const removeToCard= createAsyncThunk(
  "product/removeproduct",
  async(productId)=>{
    
    return productId;
  }
)

//remove all
export const clearCart = createAsyncThunk(
  "product/clearCart",
  async () => {
    return true;
  }
);

// Async action to increment the quantity of a product in the cart
export const incrementCartItem = createAsyncThunk(
  "product/incrementCartItem",
  async (productId) => {
    return productId;
  }
);

// Async action to decrement the quantity of a product in the cart
export const decrementCartItem = createAsyncThunk(
  "product/decrementCartItem",
  async (productId) => {
    return productId;
  }
);
export const fetchUserOrders = createAsyncThunk(
  "orders/fetchUserOrders",
  async () => {
    try {
      const response = await axios.get(api_url);
      return response.data; // Assuming the response contains the user's order data
    } catch (error) {
      throw error;
    }
  }
);


const initialState = {
  isLoading: false,
  products: [],
  selectedProduct: "",
  error: null,
  wishlist: [],
  cart: [],
  orders: [],
  isLoggedIn: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(selectProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(selectProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedProduct = action.payload;
    });
    builder.addCase(selectProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(addToWishlist.fulfilled, (state, action) => {
      state.wishlist.push(action.payload);
    });
    builder.addCase(removeFromWishlist.fulfilled, (state, action) => {
      state.wishlist = state.wishlist.filter(
        (product) => product.id !== action.payload
      );
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart.push(action.payload);
    });
    builder.addCase(removeToCard.fulfilled,(state,action)=>{
      state.cart= state.cart.filter(
        (product) => product.id !== action.payload
      );
    })
    builder.addCase(clearCart.fulfilled, (state) => {
      state.cart = [];
    });
    builder.addCase(incrementCartItem.fulfilled, (state, action) => {
      const productToUpdate = state.cart.find(
        (product) => product.id === action.payload
      );
      if (productToUpdate) {
        productToUpdate.quantity += 1;
      }
    });
    builder.addCase(decrementCartItem.fulfilled, (state, action) => {
      const productToUpdate = state.cart.find(
        (product) => product.id === action.payload
      );
      if (productToUpdate && productToUpdate.quantity > 1) {
        productToUpdate.quantity -= 1;
      } else if (productToUpdate && productToUpdate.quantity === 1) {
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload
        );
      }
    });
    builder.addCase(fetchUserOrders.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUserOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    });
    builder.addCase(fetchUserOrders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
   
  },
});

export default productSlice.reducer;