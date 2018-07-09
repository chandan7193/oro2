const userReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return state.concat([action.data]);
    case "DELETE_USER":
      return state.filter(user => user.id !== action.id);
    case "EDIT_USER":
      return state.map(
        user =>
          user.id === action.id ? { ...user, editing: !user.editing } : user
      );
    case "UPDATE":
      return state.map(user => {
        if (user.id === action.id) {
          return {
            ...user,
            name: action.data.newName,
            email: action.data.newEmail,
            facebook: action.data.newFacebook,
            twitter: action.data.newTwitter,
            linkedin: action.data.newLinkedIn,
            editing: !user.editing
          };
        } else return user;
      });
    default:
      return state;
  }
};
export default userReducer;
