var storage = 0;
var input = 0;
var lastOp = "";
var lastButton = "";

$(".operator").on("click", function () {
    input = parseFloat($(".nums").val(), 10);
    switch (true) {
    case (lastOp === "+"):
        storage += input;
        break;
    case (lastOp === "-"):
        storage -= input;
        break;
    case (lastOp === "*"):
        storage *= input;
        break;
    case (lastOp === "/"):
        storage /= input;
        break;
    default:
        storage = input;
        break;
    }
    lastOp = $(this).attr("id");
    lastButton = lastOp;
    if (storage >= 9999999999) {
        $('.nums').val("E");
    }
    else {
        $('.nums').val(storage);
    }
});


$(".number").on("click", function () {
    if (lastButton !== "number") {
        $(".nums").val("");
    }
    $(".nums").val($(".nums").val() + $(this).attr("id"));
    lastButton = "number";
});

$(".dec").on("click", function () {
    if (lastButton !== "number") {
        $(".nums").val("");
    }
    if (($(".nums").val().length) < 1) {
        $(".nums").val("0" + $(this).attr("id"));
    }
    else {
        $(".nums").val($(".nums").val() + $(this).attr("id"));
        }
        lastButton = "number";
});

$(".clear").on("click", function () {
    input = 0;
    storage = 0;
    lastOp = "";
    $(".nums").val(0);
    lastButton = "clear";
});