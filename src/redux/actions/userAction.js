import * as type from '../actions/actionType';

export function userAction(users)
{
    return {
        type:type.GET_USERS_REQUESTED,
        payload:users,
    }
}