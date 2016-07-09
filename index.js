var storage = 0;
var input = 0
var lastOp = ""
var lastButton = ""

$(".operator").on("click", function(){
  input = parseFloat($("#nums").val(), 10);
  console.log(lastOp);
  console.log(input);
  console.log(storage);
  switch (true){
    case (lastOp == "+"):
    storage += input;
      break;
    case (lastOp == "-"):
      storage -= input;
      break;
    case (lastOp == "*"):
      storage *= input; 
      break;
    case (lastOp == "/"):
      storage /= input; 
      break;
    default:
      storage = input;
      break;
  }
  lastOp = $(this).attr("id");
  lastButton = lastOp
  $("#nums").val(storage);
  console.log(lastOp);
})

$(".number").on("click", function(){
if (lastButton != "number" ){
$("#nums").val("")
};
$("#nums").val($("#nums").val()+$(this).attr("id"))
lastButton = "number";
})

$(".dec").on("click", function(){
if (lastButton != "number" ){
$("#nums").val("");
};
console.log($("#nums").val().length)  
if (($("#nums").val().length) < 2){
$("#nums").val("0"+$(this).attr("id"))
} else {
$("#nums").val($("#nums").val()+$(this).attr("id"))}
lastButton = "number";
})

$("#clear").on("click", function(){
  input = 0;
  storage = 0; 
  lastOp = "";
  $("#nums").val(0);
  console.log(input);
  console.log(storage);
  lastButton = "clear"
})