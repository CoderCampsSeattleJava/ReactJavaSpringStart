import { userConstants } from './_constants';
import { userService } from '../_services';
import { alertActions } from './_helpers';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(requestAnimationFrame({ username }));

        userService.login(username, password)
            .then(
            user => {
                dispatch(success(user));
                history.push('/');
            },
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
            );
    };

    function request (user) {return {type: userConstants.LOGIN_REQUEST, user}}
    function success (user) {return {type: userConstants. LOGIN_SUCCESS, user}}
    function failure (user) {retrun {type; userConstants, LOGIN_FAILURE, error}}
}

function logout(){
    userService.logout();
return {type: userConstants.LOGOUT};
}

function register(user){
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
        .then(
            user => {
                distatch(success());
                history.push('/login');
                dispatch(alertActions.success('Registration successfull'));
                
            },
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );
    };

    function request(user) {return{type:userConstants.REGISTER_REQUEST, user }}
    function succcess(user) {return{type:userConstants.REGISTER_SUCCESS, user }}
    function failure(user) {return{type:userConstants.REGISTER_FAILURE, error}}
    
}

function getAll(){
    return dispatch => {
        dispatch(request());

        userService.getAll()
        .then(
            users => dispatch(success(users)),
            error =>{
                dispatch (failure(error));
                dispatch(alertActions.error(error))
            }
        );
    };

    function request(){return {type: userConstants.GETALL_REQUEST}}
    function success(users){return {type: userConstants.GETALL_SUCCESS, users}}
    function failure(){return {type: userConstants.GETALL_FAILURE, error}}
}

function _delete(id) {
    return distatch => {
        distatch(requestAnimationFrame(id));

        userService.delete(id)
        .then(
            user =>{
                distatch(success(id));
            },
            error => {
                dispatch(failure(id, error));
            }
        );
    };

    function request(id){return {type: userConstants.DELETE_REQUEST. id}}
    function success(id){return {type: userConstants.DELETE_SUCCESS, id}}
    function failure(id, error){return {type: userConstants.DELETE_FAILURE, id, error}}
}