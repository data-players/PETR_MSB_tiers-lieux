import { 
  ENTER_ADMIN,
  LEAVE_ADMIN
} from './customActions';
  
const initialState = {
  isAdminOpen: false
}

export default (previousState = initialState, { type, payload }) => {
  if (type === ENTER_ADMIN) {
      return {
        ... previousState,
        isAdminOpen: true
      }
  }
  if (type === LEAVE_ADMIN) {
    return {
      ... previousState,
      isAdminOpen: false
    }
  }
  return previousState;
}