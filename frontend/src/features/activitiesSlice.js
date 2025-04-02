import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    user_id: 1,
    date: "2022-11-1",
    steps: 4800,
    distance_km: 5.1,
    acitve_minutes: 13.4,
  },
  {
    user_id: 1,
    date: "2022-11-2",
    steps: 10000,
    distance_km: 10,
    active_minutes: 29,
  },
  {
    user_id: 1,
    date: "2022-11-3",
    steps: 1000,
    distance_km: 10,
    active_minutes: 29,
  },
  {
    user_id: 1,
    date: "2022-11-4",
    steps: 5000,
    distance_km: 10,
    active_minutes: 29,
  },
  {
    user_id: 1,
    date: "2022-11-5",
    steps: 3100,
    distance_km: 10,
    active_minutes: 29,
  },
  {
    user_id: 1,
    date: "2022-11-6",
    steps: 8890,
    distance_km: 10,
    active_minutes: 29,
  },
  {
    user_id: 1,
    date: "2022-11-7",
    steps: 900,
    distance_km: 10,
    active_minutes: 29,
  },
  {
    user_id: 1,
    date: "2022-11-8",
    steps: 1500,
    distance_km: 10,
    active_minutes: 29,
  },
  {
    user_id: 1,
    date: "2022-11-9",
    steps: 3023,
    distance_km: 10,
    active_minutes: 29,
  },
  {
    user_id: 1,
    date: "2022-11-10",
    steps: 8900,
    distance_km: 10,
    active_minutes: 29,
  },
  {
    user_id: 1,
    date: "2022-11-11",
    steps: 6700,
    distance_km: 10,
    active_minutes: 29,
  },
  {
    user_id: 1,
    date: "2022-11-12",
    steps: 8902,
    distance_km: 10,
    active_minutes: 29,
  },
  {
    user_id: 1,
    date: "2022-11-13",
    steps: 5000,
    distance_km: 10,
    active_minutes: 29,
  },
  {
    user_id: 1,
    date: "2022-11-14",
    steps: 1300,
    distance_km: 10,
    active_minutes: 29,
  },
];

const activitySlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    activityAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllActivities = (state) => state.activities;

export const { activityAdded } = activitySlice.actions;

export default activitySlice.reducer;
