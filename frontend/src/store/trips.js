import jwtFetch from "./jwt";

const RECEIVE_TRIP = "trips/RECEIVE_TRIP";
const RECEIVE_TRIPS = "trips/RECEIVE_TRIPS";
const RECEIVE_USER_TRIPS = "trips/RECEIVE_USER_TRIPS"
const REMOVE_TRIP = "trips/REMOVE_TRIP";
const RECEIVE_ITINERARY = "trips/RECEIVE_ITINERARY";
const REMOVE_ITINERARY = "trips/REMOVE_ITINERARY";
const RECEIVE_TRIP_ERRORS = "trips/RECEIVE_TRIP_ERRORS"
const CLEAR_TRIP_ERRORS = "trips/CLEAR_TRIP_ERRORS"

const receiveTrips = trips => ({
    type: RECEIVE_TRIPS,
    trips
})

const receiveUserTrips = userId => ({
    type: RECEIVE_USER_TRIPS,
    userId
})

const receiveTrip = trip => ({
    type: RECEIVE_TRIP,
    trip
})

const removeTrip = tripId => ({
    type: REMOVE_TRIP,
    tripId
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
      dispatch(receiveUserTrips(trips));
    } catch (err) {
      const resBody = await err.json();
      if (resBody.statusCode === 400) {
        dispatch(receiveErrors(resBody.errors));
      }
    }
  };

export const createTrip = data => async dispatch => {
  debugger
    try {
        const res = await jwtFetch(`/api/trips/users/${data.owner}`, {
        method: 'POST',
        body: JSON.stringify(data)
        });
        debugger
        const trip = await res.json();
        debugger
        dispatch(receiveTrip(trip));
    } catch(err) {
        debugger
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
        return dispatch(receiveErrors(resBody.errors));
        }
    }
};

export const deleteTrip = tripId => async dispatch => {
    try {
        const res = await jwtFetch(`/api/trips/${tripId}`, {
        method: 'DELETE'
        });
        const trip = await res.json();
        dispatch(removeTrip(trip));
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

const tripsReducer = (state = { all: {}, new: undefined }, action) => {
  debugger
    Object.freeze(state);
    let newState = {...state};
    switch(action.type) {
      case RECEIVE_TRIPS:
        return { ...newState, ...action.trips, new: undefined};
      case RECEIVE_USER_TRIPS:
        return { ...newState, ...action.trips, new: undefined};
      case RECEIVE_TRIP:
        return { ...newState, ...action.trip, new: undefined};
      case REMOVE_TRIP:
        return { ...newState, new: action.trip};
      case RECEIVE_ITINERARY:
        return // ?
      case REMOVE_ITINERARY:
        return  // ?
      default:
        return state;
    }
  };

  export default tripsReducer;
