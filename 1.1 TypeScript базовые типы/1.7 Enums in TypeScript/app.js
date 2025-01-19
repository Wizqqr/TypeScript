"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode["SUCCESS"] = "s";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
const resultMoney = {
    message: "Платеж успешен",
    statusCode: StatusCode.SUCCESS
};
if (resultMoney.statusCode === StatusCode.SUCCESS) {
}
function action(status) {
}
action(StatusCode.SUCCESS);
