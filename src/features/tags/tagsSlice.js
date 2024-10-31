import { toast } from "react-toastify";
import { v4 } from "uuid";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tagsList: [
    { tag: "learning", id: v4() },
    { tag: "project", id: v4() },
    { tag: "task", id: v4() },
    { tag: "quotes", id: v4() },
  ],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTags: (state, { payload }) => {
      if (state.tagsList.find(({ tag }) => tag === payload.tag)) {
        toast.error("The tag already exists!");
      } else {
        state.tagsList.push(payload);
        toast.info("New tag has been created.");
      }
    },
    deleteTags: (state, { payload }) => {
      state.tagsList = state.tagsList.filter(({ id }) => id !== payload);
      toast.error("The tag has been deleted!");
    },
  },
});

export const { addTags, deleteTags } = tagsSlice.actions;
export default tagsSlice.reducer;
