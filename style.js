function Pizza(crust, size) {
    this.crust = crust;
    this.size = size;
    this.toppings = [];
    this.price = 0;
  }
//protoptype

  Pizza.prototype.cost = function() {
    var price = 0;
    if (this.size === "Small") {
      price += 7;
    } else if (this.size === "Medium") {
      price += 9;
    } else if (this.size === "Large") {
      price += 11;
    } else {
      price+= 16;
    }

  
    for (var i = 0; i < this.toppings.length; i++) {
      price += 2;
    }
    if (this.crust === "Cripsy"){
        price += 650;
    }else if (this.crust=== "Stuffed") {
        price += 550;
    }else {
        price += 450;
    }
    this.price = price;
  }
  Pizza.prototype.toppingsList = function() {
    if (this.toppings.length > 0) {
        return this.toppings.join(", ");
    } else {
      return "None";
    }
  }

//UI logic

  $(document).ready(function() {
    var total = 0;
    $(".cartTotal").text(total);
    $("#form").submit(function(event) {
        event.preventDefault();
        var crust = $("#crust").val();
        var size = $("#size").val();
        var newPizza = new Pizza(crust, size);
    
        $("input:checkbox[name=topping]:checked").each(function() {
          var toppingChoice = $(this).val();
          newPizza.toppings.push(toppingChoice);
        });
    
        newPizza.cost();
        total += newPizza.price;
    
        $(".cartTotal").text(total);
        $(".cartWell").show();;
        $("#cartHeader").show();
        $("ol#cart").append("<li><span class='cartItem'>" + newPizza.size + " " + newPizza.crust + " Pizza" + "</span></li>");
    
        $(".cartItem").last().click(function() {
          $("#show-pizza").show();
          $("#pizzaListName").text(newPizza.size + " " + newPizza.crust + " Pizza");
          $(".size").text(newPizza.size);
          $(".crust").text(newPizza.crust);
          $(".toppings").text(newPizza.toppingsList());
          $(".cost").text(newPizza.price);
        });
        $("#form")[0].reset();
      });

      $("button#submitCart").click(function() {
        $(".pizzare").hide();
        $("button#submitCart").hide();
        $(".choiceWell"). show();
      });
    
      $("button#pickup").click(function() {
        $(".choiceWell").hide();
        $(".pickupWell").show();
      });
    
      $("button#delivery").click(function() {
        total += 5;
        $(".cartTotal").text(total);
        $(".choiceWell").hide();
        $(".deliveryWell").show();
      });
    
      $("button#submitPickupForm").click(function() {
        var userName = $("input#pickupName").val();
        $(".nameInput").text(userName);
        $("form#pickupForm").hide();
        $("#pickupEnd").show()
        if((pickUpForm)===""){
            return "Please enter your details"
        }
      });
    
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
    
      $("button.reset").click(function() {
        location.reload();
      });

      //form validation

      $("form#form").submit(function(event){
        // event.preventDefault();
       var name = $("input#name").val();
       var email = $("input#email").val();
       var message = $("textarea#message").val();

       if ($("input#name").val() && $("input#email").val()){
       alert ("Hola  " + name + ", we have received your Message. Thank you for reaching out to Pizzeria Bellissimo, We shall get back to you ASAP!!");
       }
       else {
           alert("Please enter your name and email!");
       }
         
   });


    });