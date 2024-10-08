const menu = {
    _meal: ' ',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number' && priceToCheck % 1 === 0) {
        this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Todays Special is ${this._meal} for ${this._price}`;
      }
      else {
        return 'Meal or price was not set correctly!';
      }
    }
  }
  
  menu.meal = 'Pasta';
  menu.price = 132;
  
  console.log(menu.todaysSpecial);