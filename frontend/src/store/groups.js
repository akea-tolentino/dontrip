const RECEIVE_GROUP = 'groups/RECEIVE_GROUP';
const RECEIVE_GROUPS = 'groups/RECEIVE_GROUPS';
const REMOVE_GROUP = 'groups/REMOVE_GROUP';

const receiveGroup = (group) => {
    return {
        type: RECEIVE_GROUP,
        group
    }
}

const receiveGroups = (groups) => {
    return {
        type: RECEIVE_GROUPS,
        groups
    }
}

const removeGroup = (groupId) => {
    return {
        type: REMOVE_GROUP,
        groupId
    }
}

const getGroup = (groupId) => (state) => (
    state.groups ? state.groups[groupId] : null
)

const getUserGroups = (userId) => state => createSelector(
    state => state.groups,
    groups => groups ? Object.values(groups).filter(group => group.owner === userId) : []
)

export const fetchGroups = () => async dispatch => {
    try {
      const res = await jwtFetch ('/api/groups');
      const Groups = await res.json();
      dispatch(receiveGroups(Groups));
    } catch (err) {
      const resBody = await err.json();
      if (resBody.statusCode === 400) {
        dispatch(receiveErrors(resBody.errors));
      }
    }
  };

export const fetchGroup = (groupId) => async dispatch => {
    try {
      const res = await jwtFetch (`/api/groups/${groupId}`);
      const group = await res.json();
      dispatch(receiveGroup(group));
    } catch (err) {
      const resBody = await err.json();
      if (resBody.statusCode === 400) {
        dispatch(receiveErrors(resBody.errors));
      }
    }
  };

export const createGroup = data => async dispatch => {
    try {
        const res = await jwtFetch('/api/groups/', {
        method: 'POST',
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

export const updateGroup = data => async dispatch => {
    try {
        const res = await jwtFetch(`/api/groups/${data.id}`, {
        method: 'POST',
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

export default function groupsReducer (state = { all: {}, new: undefined }, action) {
    Object.freeze(state);
    let newState = {...state};
    switch(action.type) {
        case RECEIVE_GROUPS:
            return { ...newState, ...action.groups, new: undefined};
        case RECEIVE_GROUP:
            return { ...newState, ...action.group, new: undefined};
        case REMOVE_GROUP:
            return { ...newState, new: action.group};
        default:
            return state;
    }
};