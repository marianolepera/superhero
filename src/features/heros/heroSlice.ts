import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Hero from "../../interfaces/heroInterface";
import herosService from "./heroService";

interface HeroState  {
    loading: boolean;
    error: string | null;
    heros: Hero[] | null;
    heroSelected: Hero | null;
  }
  
const initialState: HeroState = {
  loading: false,
  error: null,
  heros: null,
  heroSelected:null
}

export const getHeros = createAsyncThunk(
  "heros/getHeros",
  async (_, thunkApi) => {
    try {
      return await herosService.getHeros()
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getHerobyId = createAsyncThunk(
  'heros/getHeroById',
  async ( heroId:number,thunkApi) => {
    try {
      return await herosService.getHeroById(heroId)
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
)



const heroSlice = createSlice({
  name: "heros",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getHeros.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getHeros.fulfilled, (state, action: PayloadAction<Hero[]>) => {
        state.loading = false;
        state.heros = action.payload;
      })
      .addCase(getHeros.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getHerobyId.pending, (state, action) => {
          state.loading = true;
        })
      .addCase(getHerobyId.fulfilled, (state, action: PayloadAction<Hero>) => {
        state.loading = false;
        state.heroSelected = action.payload;
      })
      .addCase(getHerobyId.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export default heroSlice.reducer;