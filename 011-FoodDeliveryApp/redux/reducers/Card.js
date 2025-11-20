import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
}

export const CardSlice = createSlice({
  name: "card",
  initialState: initialState,
  reducers: {
    addToCard: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromCard: (state, action) => {
      let newCard = [...state.items]
      let itemIndex = state.items.findIndex(item => item.id == action.payload.id)
      if(itemIndex => 0) {
        newCard.splice(itemIndex, 1); //seçilen id ye ait değeri sildim.
      } else {
        console.log("can't remove the item that is not added to card")
      }
    },
    emptyCard: (state, action) => {
      state.items = []
    }
  }
})

export const { addToCard, removeFromCard, emptyCard } = CardSlice.actions

export const selectCardItems = (state) => state.card.items
export const selectCardItemsById = (state, id) => state.card.items.filter(item => item.id == id)
export const selectCardTotal = state => state.card.item.reduce((total, item) => total + item.price, 0)

export default CardSlice.reducer;