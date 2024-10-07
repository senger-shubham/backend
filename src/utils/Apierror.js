class ApiError extends Error{
    constructor(
        statusCode,
        massage="somthing went wrong",
        errors=[],
        statck =""
    ){
        super(message)
        this.statusCode = statusCode
        this.message = massage
        this.success =false;
        this.errors=errors

        if(statck){
            this.stack=statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}