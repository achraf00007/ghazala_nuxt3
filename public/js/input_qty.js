window.initQty = function($) {
	console.log("abdsamad");
// Quantity buttons
	function qtySum(){
		var arr = document.getElementsByName('qtyInput');
		var tot=0;
		for(var i=0;i<arr.length;i++){
			if(parseInt(arr[i].value))
				tot += parseInt(arr[i].value);
		}

		var cardQty = document.querySelector(".qtyTotal");
		cardQty.innerHTML = tot;
	}
	qtySum();

	$(function() {

	   $(".qtyButtons input").after('<div class="qtyInc"></div>');
	   $(".qtyButtons input").before('<div class="qtyDec"></div>');

	   //$(".qtyButtons input").val();

	   $(".qtyDec, .qtyInc").on("click", function() {

		  var $button = $(this);
		  var oldValue = $button.parent().find("input").val();

		  if ($button.hasClass('qtyInc')) {
			 var newVal = parseFloat(oldValue) + 1;
		  } else {
			 // don't allow decrementing below zero
			 if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			 } else {
				newVal = 1;
			 }
		  }

		  
		  $button.parent().find("input").val(newVal).trigger('input');
		  //$button.parent().find("input").trigger('change');
		  qtySum();
		  $(".qtyTotal").addClass("rotate-x");

	   });

	   function removeAnimation() { $(".qtyTotal").removeClass("rotate-x"); }
	   const counter = document.querySelector(".qtyTotal");
	   counter.addEventListener("animationend", removeAnimation);

	});
}