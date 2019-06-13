const INITIAL_STATE = { email: null, password: null, email: null };

const regReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REG_EMAIL_CHANGE': {
      return {...state, email: action.payload};
    }
    case 'REG_PASSWORD_CHANGE': {
      return {...state, password: action.payload};
    }
    case 'REG_NAME_CHANGE': {
      return {...state, name: action.payload};
    }
    default:
      return state
  }
};

export default regReducer;
