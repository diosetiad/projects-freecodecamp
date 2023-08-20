// create an objects and set the value to integers(easier to work with integers than floats) with multiply everything by 100
const currencyUnit = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000,
};

function checkCashRegister(price, cash, cid) {
  // calculate the change (multiplied by 100 to get an integer values)
  let moneyChanges = cash * 100 - price * 100;
  // just save a copy to perform some calculation later
  let moneyChangesCheck = moneyChanges;
  let change = [];
  let status = "";
  let cidSum = 0;
  // sorted in highest to lowest order, as the value of the change key
  let filteredCid = cid.filter((elem) => elem[1] !== 0).reverse();

  filteredCid.forEach((elem) => {
    // set curr as currency
    let curr = elem[0];
    // set currSum as currency values multiplied by 100 to get an integer
    let currSum = elem[1] * 100;
    // have the sum of money in the register
    cidSum += currSum;
    let amount = 0;
    // set a while loop for moneyChages larger than or equal to currency and currSum larger than zer0
    while (moneyChanges >= currencyUnit[curr] && currSum > 0) {
      // increase the amount of currency denomination, e.g returned 200$ change we have to take two 100$ bills
      amount += currencyUnit[curr];
      // decrease the moneyChanges by the value of the denomination we are adding
      moneyChanges -= currencyUnit[curr];
      // the currSum also decreased because taking from the register
      currSum -= currencyUnit[curr];
    }
    // check the amount is different from zero
    if (amount !== 0) {
      //push it into the changes with the currency name and the amount divided by 100(to give know the real value)
      change.push([curr, amount / 100]);
    }
  });

  // different cases

  // check the moneyChanges is larger than zero
  if (moneyChanges > 0) {
    // means couldn't complete the change because don't have enough money in the cash register, e.g need to return 50 cents but have only 100$ bills so can't return it
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } // check the moneyChanges is zero and the moneyChangesCheck is equal to cidSum
  else if (moneyChanges == 0 && moneyChangesCheck == cidSum) {
    // means have the exact same money for change in the cash register it means that after we gave this change we don't have any more money
    status = "CLOSED";
    change = cid;
  } // where moneyChanges is equal to zero
  else {
    // so have paid the change but we still have money in the register
    status = "OPEN";
  }
  return { status: status, change: change };
}

module.exports = checkCashRegister;