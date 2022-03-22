class Pizza {
    constructor(type, size, crust, toppings, quantity, delivery){
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
    this.delivery = delivery;
    this.basePrice = 0;
    }
  
    typePrice(){
      if (this.type == "CHICKEN SUPREME"){
        this.price = 700;
        return this.price;
      } else {
        return this.price;
      }
    }
  
    priceBySize(){
      if (this.size == "Large"){
        return 1050;
      } else if (this.size == "Medium"){
        return 750;
      } else {
        return 450;
      }
    }
  
    crustPrice(){
      if (this.crust == "Tripple Cheese Crust"){
        return 400;
      } else if (this.crust == "Double Cheese Crust"){
        return 300;
      } else if (this.crust == "Puff Pastry"){
        return 200;
      } else if (this.crust == "Cheesy Crust"){
        return 150;
      } else {
        return 0;
      }
    }
  
    toppingsPrice(){
      if (this.toppings == "Extra Chicken"){
        return 200;
      } else {
        return 0;
      }
    }
  
    deliveryPrice(){
      if (this.delivery == true){
        return 200;
      } else {
        return 0;
      }
    }
  
    totalPriceNoDelivery(){
      let priceAtPointA = this.typePrice();
      let priceAtPointB = this.priceBySize();
      let priceAtPointC = this.toppingsPrice();
      let priceAtPointD = this.crustPrice();
  
      return priceAtPointA + priceAtPointB + priceAtPointC + priceAtPointD;
    }
  
    pricePerQuantity(){
      let grossPrice = this.totalPriceNoDelivery();
      return grossPrice * this.quantity;
    }
  
    totalPlusDelivery(){
      let withoutDelivery = this.pricePerQuantity();
      let deliveryFee = this.deliveryPrice();
  
      return withoutDelivery + deliveryFee;
    }
  
  }
  $("button#submitDeliveryForm").click(function() {
    var userName = $("input#deliveryName").val();
    var address = $("input#address").val();
    var city = $("input#city").val();
    var county = $("input#county").val();
    $(".nameInput").text(userName);
    $(".addressInput").text(address + ", " + city + " " + county);
    $("form#deliveryForm").hide();
    $("#deliveryEnd").show();
  });
  
  
  $(document).ready(()=>{
    $("#pizza-one-form").submit((event)=>{
      event.preventDefault();
      let pizzaName = $("#pizza-one-label").text();
      let pizzaSize = $("#size-selector").val();
      let toppingType = $("#topping-selector").val();
      let crustType = $("#crust-selector").val();
      let pizzaQuantity = Number($("#pizza-quantity").val());
      // let delivery = $("#to-be-delivered").is(":checked");
      // let pickUp = $("#to-be-picked").is(":checked");
    let chickenSupreme = new Pizza(pizzaName, pizzaSize, crustType, toppingType, pizzaQuantity, false);
    $("#size-price").text(chickenSupreme.size + " " + chickenSupreme.type + ": " + "Ksh. " + chickenSupreme.priceBySize());
    $("#crust-price").text(chickenSupreme.crust + ": " +  "Ksh. " + chickenSupreme.crustPrice());
    $("#toppings-price").text(chickenSupreme.toppings + " Toppings" + ": " + "Ksh. " + chickenSupreme.toppingsPrice());
    $("#delivery-price").text("Delivery: " + chickenSupreme.deliveryPrice());
    $("#total").text("Total: " + "Ksh. " + chickenSupreme.totalPlusDelivery());
    });
  });
  
//   $(document).ready(function(){
//       var name=$("input#username").val()
//     $("#checkOut").onclick(function(event){
//         alert (name + ", We have received your message. Thank you for reaching out to us.");
//     });    
    $("form#feedbackform").submit(function(event){
        event.preventDefault(event);
       var name = $("input#username").val();
       var email = $("input#inputemail").val();
       var message = $("textarea#usermessage").val();

       if ($("input#username").val() && $("input#inputemail").val()){
       alert ("Hello  " + name + ", we have received your Message. Thank you for reaching out to us, We shall get back to you!!");
       }
       else {
           alert("Please enter your name and email!");
       }
    });