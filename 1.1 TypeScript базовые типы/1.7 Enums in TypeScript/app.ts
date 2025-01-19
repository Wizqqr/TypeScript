enum StatusCode{
    SUCCESS = 's',
    IN_PROCESS = 'p',
    FAILED = 'f',
}

const resultMoney = {
    message: "Платеж успешен",
    statusCode: StatusCode.SUCCESS
};

if(resultMoney.statusCode === StatusCode.SUCCESS){

}

function action(status: StatusCode){

}

action(StatusCode.SUCCESS)
