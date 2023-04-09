import { REGISTER_USER, LOGIN_USER } from "../types";
import { User } from "../../utils/interfaces";

interface Action {
  type: string;
  payload: any;
}

const reducer = (state: any = {}, action: Action) => {
  switch (action.type) {
    case REGISTER_USER:
      let users: User[] = [...state?.users];
      users.push({ ...action.payload, id: users.length + 1 });
      return { ...state, users: users };
    default: {
      return state;
    }
  }
};

export default reducer;
