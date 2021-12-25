const initialState = {
  cat: 'default'
}

const reducer = (state = initialState,action) => {
  switch(action.type){
    case 'CATEGORY':
        state = {
                ...state,
                cat: action.payload
            }
  }
  return state;
}

export default reducer;
