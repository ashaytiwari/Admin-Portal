const initialState = {
  greet: "Hello"
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    //   case ADD_UPDATE_DATA:
    //     return {
    //       ...state,
    //       dataSet: payload
    //     };
    default:
      return state;
  }
};
