import {alertConstants} from '../_constants';

export const alertActions = {
    sucess,
    error, 
    Clear,
};

function success(message) {
    return {type: alertConstants.SUCCESS, message};
}

function error (message){
    return {type: alertConstants.ERROR, message };
}

function Clear() {
    return {type: alertConstants.CLEAR};
}