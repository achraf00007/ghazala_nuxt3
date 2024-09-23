// Quantity buttons
	function qtySum2(){
    var arr2 = document.getElementsByName('qtyInput2');
    var tot2=0;
    for(var i=0;i<arr2.length;i++){
        if(parseInt(arr2[i].value))
            tot2 += parseInt(arr2[i].value);
    }

    var cardQty2 = document.querySelector(".qtyTotal2");
    cardQty2.innerHTML = tot2;
	}
	qtySum2();

	$(function() {

	   $(".qtyButtons2 input").after('<div class="qtyInc2"></div>');
	   $(".qtyButtons2 input").before('<div class="qtyDec2"></div>');
	   $(".qtyDec2, .qtyInc2").on("click", function() {

		  var $button = $(this);
		  var oldValue = $button.parent().find("input").val();

		  if ($button.hasClass('qtyInc2')) {
			 var newVal = parseFloat(oldValue) + 1;
		  } else {
			 // don't allow decrementing below zero
			 if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			 } else {
				newVal = 1;
			 }
		  }

		  $button.parent().find("input").val(newVal);
		  qtySum2();
		  $(".qtyTotal2").addClass("rotate-x");

	   });

	   function removeAnimation() { $(".qtyTotal2").removeClass("rotate-x"); }
	   const counter = document.querySelector(".qtyTotal2");
	   counter.addEventListener("animationend", removeAnimation);

	});
