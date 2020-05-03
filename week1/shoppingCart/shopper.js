var shopper = {
    location: "TP 'R Us",
    age : 28,
    isShopping : true,
    groceryCart : ["Charmin", "Angel Soft", "Always Save"],
    shopperStats : function() {
      return "Items in cart: " + this.groceryCart;
    }
  };
  
  console.log(shopper.shopperStats())