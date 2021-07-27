export function managePresents(state = {numberOfPresents: 0}, action) {
  // your code here
  console.log(state)
  let presents = state.numberOfPresents;

  switch(action.type) {
    case "presents/increase": 
      presents = presents + 1;
      return { numberOfPresents: presents }
    default:
      return state;
  }
}
