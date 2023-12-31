import jwtFetch from "./jwt";

const RECEIVE_TRIP = "trips/RECEIVE_TRIP";
const RECEIVE_TRIPS = "trips/RECEIVE_TRIPS";
const RECEIVE_USER_TRIPS = "trips/RECEIVE_USER_TRIPS"
const REMOVE_TRIP = "trips/REMOVE_TRIP";
const RECEIVE_ITINERARY = "trips/RECEIVE_ITINERARY";
const REMOVE_ITINERARY = "trips/REMOVE_ITINERARY";
const RECEIVE_TRIP_ERRORS = "trips/RECEIVE_TRIP_ERRORS"
const CLEAR_TRIP_ERRORS = "trips/CLEAR_TRIP_ERRORS"
const UPDATE_TRIP = "UPDATE_TRIP"

const updateTrip = trips => ({
  type: UPDATE_TRIP,
  trips
})

const receiveTrips = trips => ({
    type: RECEIVE_TRIPS,
    trips
})

const receiveUserTrips = (trips, userId) => ({
    type: RECEIVE_USER_TRIPS,
    trips,
    userId
})

const receiveTrip = trip => ({
    type: RECEIVE_TRIP,
    trip
})

const removeTrip = trips => ({
    type: REMOVE_TRIP,
    trips
})


const receiveErrors = errors => ({
    type: RECEIVE_TRIP_ERRORS,
    errors
  });

export const clearTripErrors = errors => ({
    type: CLEAR_TRIP_ERRORS,
    errors
});


// jwtfetch calls ---------------------------------------

export const patchTrip = (body) => async dispatch => {

  try {
    const res = await jwtFetch(`/api/trips/${body.tripId}/users/${body.owner}`, {
    method: 'PATCH',
    body: JSON.stringify(body)
    });

    const trip = await res.json();

    dispatch(updateTrip(trip));
} catch(err) {

    const resBody = await err.json();
    if (resBody.statusCode === 400) {
    return dispatch(receiveErrors(resBody.errors));
    }
}
}

export const fetchTrips = () => async dispatch => {
  try {
    const res = await jwtFetch ('/api/trips');
    const trips = await res.json();
    dispatch(receiveTrips(trips));
  } catch (err) {
    const resBody = await err.json();
    if (resBody.statusCode === 400) {
      dispatch(receiveErrors(resBody.errors));
    }
  }
};

  export const fetchUserTrips = (userId) => async dispatch => {

    try {
      const res = await jwtFetch (`/api/trips/users/${userId}`);
      const trips = await res.json();

      dispatch(receiveUserTrips(trips, userId));
    } catch (err) {
      const resBody = await err.json();
  
      if (resBody.statusCode === 400) {
        dispatch(receiveErrors(resBody.errors));
      }
    }
  };

export const createTrip = data => async dispatch => {

    try {
        const res = await jwtFetch(`/api/trips/users/${data.owner}`, {
        method: 'POST',
        body: JSON.stringify(data)
        });

        const trip = await res.json();
        dispatch(receiveTrip(trip));
        return trip
    } catch(err) {
    
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
        return dispatch(receiveErrors(resBody.errors));
        }
    }
};

export const deleteTrip = (tripId, userId) => async dispatch => {
    try {
        const res = await jwtFetch(`/api/trips/${tripId}/users/${userId}`, {
        method: 'DELETE'
        });
        const trips = await res.json();
        dispatch(removeTrip(trips));
    } catch(err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
        return dispatch(receiveErrors(resBody.errors));
        }
    }
};



// reducers -----------------------------------------------

const nullErrors = null;

export const tripErrorsReducer = (state = nullErrors, action) => {
  switch(action.type) {
    case RECEIVE_TRIP_ERRORS:
      return action.errors;
    case CLEAR_TRIP_ERRORS:
      return nullErrors;
    default:
      return state;
  }
};

const tripsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {...state};
    switch(action.type) {
      case RECEIVE_TRIPS:
          return state
      case RECEIVE_USER_TRIPS:
        return action.trips;
      case RECEIVE_TRIP:
        return state
      case REMOVE_TRIP:
        return  action.trips;
      case UPDATE_TRIP:
        return action.trips
      case RECEIVE_ITINERARY:
        return // ?
      case REMOVE_ITINERARY:
        return  // ?
      default:
        return state;
    }
  };

  export default tripsReducer;
