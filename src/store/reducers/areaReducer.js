const initState = {
  areaError: null,
  style: null
};

const AreaReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADDAREA_SUCCESS":
      console.log("added success");
      return {
        ...state,
        areaError: "Complete",
        style: "green-text center"
      };
    case "ADDAREA_ERROR":
      console.log("added error");
      console.log(action.err.message);
      return {
        ...state,
        areaError: action.err.message,
        style: "red-text center"
      };
    case 'DELETEAREA_SUCCESS':
      console.log('delete area success')
      return state
    case 'DELETEAREA_ERROR':
      console.log('delete area error')
      console.log(action.err.message);
      return state
    default:
      return state;
  }
};

export default AreaReducer