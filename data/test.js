const toppings = {
  no: 40,
  yes: 40,
  ntheo: 40,
  noare: 40,
};

const checkEntry = (e) => {
    delete toppings[e]
    console.log({...toppings})
}
checkEntry("no")
// console.log(delete toppings.no, {...toppings})
