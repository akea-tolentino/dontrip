import { createSelector } from '@reduxjs/toolkit'
import jwtFetch from './jwt';

export const RECEIVE_GROUP = 'groups/RECEIVE_GROUP';
export const RECEIVE_GROUPS = 'groups/RECEIVE_GROUPS';
export const REMOVE_GROUP = 'groups/REMOVE_GROUP';
export const RECEIVE_ERRORS = "session/RECEIVE_ERRORS";
export const CREATE_GROUP = "session/CREATE_GROUP";

export const receiveGroup = (group) => {
    return {
        type: RECEIVE_GROUP,
        group,
    }
}

export const postGroup = (group) => {
    return {
        type: CREATE_GROUP,
        group,
    }
}

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveGroups = (payload, userId) => {
    return {
        type: RECEIVE_GROUPS,
        payload,
        userId
    }
}

export const removeGroup = (groupId) => {
    return {
        type: REMOVE_GROUP,
        groupId
    }
}

export const getGroup = (groupId) => (state) => (
    state.groups ? state.groups[groupId] : null
)

export const fetchGroups = (userId) => async dispatch => {
    const res = await fetch(`/api/groups/users/${userId}`);

    const data = await res.json()
    dispatch(receiveGroups(data, userId))
    return data

};

export const fetchGroup = (groupId, userId) => async dispatch => {
    debugger
    try {
        const res = await jwtFetch (`/api/groups/${groupId}/users/${userId}`);
        const group = await res.json();
      dispatch(receiveGroup(group));
    } catch (err) {
        debugger
      return ("Group not found")
    }
  };

export const createGroup = data => async dispatch => {

    try {
        const res = await jwtFetch(`/api/groups/users/${data.owner}`, {
        method: 'POST',
        body: JSON.stringify(data)
        });

        const group = await res.json();

        dispatch(postGroup(group));
    } catch(err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
        return dispatch(receiveErrors(resBody.errors));
        }
    }
};

export const updateGroup = data => async dispatch => {
    try {
        const res = await jwtFetch(`/api/groups/${data._id}`, {
        method: 'PATCH',
        body: JSON.stringify(data)
        });
        const group = await res.json();
        dispatch(receiveGroup(group));
    } catch(err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
        return dispatch(receiveErrors(resBody.errors));
        }
    }
};

export const deleteGroup = groupId => async dispatch => {
    try {
        const res = await jwtFetch(`/api/groups/${groupId}`, {
        method: 'DELETE'
        });
        const group = await res.json();
        dispatch(removeGroup(group));
    } catch(err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
        return dispatch(receiveErrors(resBody.errors));
        }
    }
};

// Reducer

export default function groupsReducer (state = {}, action) {
    Object.freeze(state);
    let newState = {...state};
    switch(action.type) {
        case RECEIVE_GROUPS:
            newState[action.userId] = action.payload
            return newState
        case RECEIVE_GROUP:
            newState[action.group._id] = action.group
            // return { ...newState, ...action.group, new: undefined};
            return newState;
        case CREATE_GROUP:

            return {...newState, ...action.group}
        case REMOVE_GROUP:
            delete newState[action.groupId];
            return { ...newState, new: action.group};
        default:
            return state;
    }
};
