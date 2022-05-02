// action types
export const USERID = "USERID";
export const PROBLEM= "PROBLEM";
export const CLIENTNAME = "CLIENTNAME";
export const STATUS = "STATUS";
export const COST = "COST";
export const CHANGESTATUS = "CHANGESTATUS";
export const ACCEPT = "ACCEPT";

import axios from "axios";
 


// Action Creators

 

export const UserID = (payload) => ({ type: USERID, payload });
export const Problem = (payload) => ({ type: PROBLEM, payload });
export const  ClientName = (payload) => ({ type: CLIENTNAME, payload });
export const Status = (payload) => ({ type: STATUS, payload });
export const Cost = (payload) => ({ type: COST, payload });
export const  Changestatus = (payload) => ({ type:  CHANGESTATUS, payload });
export const  Accept = (payload) => ({ type:  ACCEPT, payload });
