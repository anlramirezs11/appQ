const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_LOCATION': {
      const newState = {...state, userLocation: action.payload};
      return newState;
    }
  }
  return state;
};

export default reducer;
