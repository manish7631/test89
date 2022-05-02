import { USERID, PROBLEM, STATUS, COST, CLIENTNAME, CHANGESTATUS, ACCEPT } from "./actions";

const init = {
  "id":"",
  "problem":"",
  "status":"",
  "cost":"",
  "clientname":"",
  "changestatus":"",
  "accept":""
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case USERID: return{...store,id:payload};
    case PROBLEM: return{...store,problem:payload};
    case STATUS: return{...store,status:payload};
    case COST: return{...store,cost:payload};
    case CLIENTNAME : return{...store,clientname:payload};
    case CHANGESTATUS: return{...store,changestatus:payload};
    case ACCEPT : return{...store,accept:payload};
    default:
      return {store};
  }
};
