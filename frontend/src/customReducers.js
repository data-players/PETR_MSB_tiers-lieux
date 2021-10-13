import { 
  ENABLE_ADMIN_CONTEXT,
  DISABLE_ADMIN_CONTEXT
} from './customActions';
  
const initialState = {
  isAdminContext: false
}

export default (previousState = initialState, { type, payload }) => {
  if (type === ENABLE_ADMIN_CONTEXT) {
      return {
        ...previousState,
        isAdminContext: true
      }
  }
  if (type === DISABLE_ADMIN_CONTEXT) {
    return {
      ...previousState,
      isAdminContext: false
    }
  }
  return previousState;
}