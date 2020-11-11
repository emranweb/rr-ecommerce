const userReducer = (state = null, action) => {
  if (action.type === "set_current_user") {
    return action.payload;
  }
  return state;
};

export default userReducer;
