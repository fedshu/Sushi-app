import { combineReducers } from "redux";
import { filter } from "./filter";
import { sushi } from "./sushi";
import { cart } from "./cart";

export default combineReducers({ filter, sushi, cart });