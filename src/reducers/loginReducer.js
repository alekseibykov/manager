const INITIAL_STATE = { email: null, password: null };

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGE': {
      return {...state, email: action.payload};
    }
    case 'PASSWORD_CHANGE': {
      return {...state, password: action.payload};
    }
    default:
      return state
  }
};

export default loginReducer;
