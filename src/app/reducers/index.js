const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_LOCATION': {
      return {...state, userLocation: action.payload};
    }
    case 'SET_STATION_LOCATIONS': {
      return {...state, ...action.payloagitd};
    }
  }
  return state;
};

export default reducer;
