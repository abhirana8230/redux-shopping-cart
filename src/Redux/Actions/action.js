export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

//delete item
export const DELETE_ITEM = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id,
  };
};

//remove individual items
export const REMOVE_ITEM_INDIVIDUAL = (item) => {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
};
