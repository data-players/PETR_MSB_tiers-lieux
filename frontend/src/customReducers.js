import { 
  ENABLE_ADMIN_CONTEXT,
  DISABLE_ADMIN_CONTEXT,
  SHOW_ORGANIZATION_DETAIL
} from './customActions';
  
const initialState = {
  isAdminContext: false,
  organization : {
    id: null,
  }
}

export default (previousState = initialState, { type, payload }) => {
  if (type === ENABLE_ADMIN_CONTEXT) {
      return {
        ...previousState,
        isAdminContext: true,
        organization : null
      }
  }
  if (type === DISABLE_ADMIN_CONTEXT) {
    return {
      ...previousState,
      isAdminContext: false,
      organization : null
    }
  }
  if (type === SHOW_ORGANIZATION_DETAIL) {
    return {
      ...previousState,
      organization : payload
    }
  }
  return previousState;
}