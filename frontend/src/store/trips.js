
const RECEIVE_TRIP = "trips/RECEIVE_TRIP";
const RECEIVE_TRIPS = "trips/RECEIVE_TRIPS";
const REMOVE_TRIP = "trips/REMOVE_TRIP";
const RECEIVE_ITINERARY = "trips/RECEIVE_ITINERARY";
const REMOVE_ITINERARY = "trips/REMOVE_ITINERARY";

const receiveTrips = trips => ({
    type: RECEIVE_TRIPS,
    trips
})

const receiveTrip = trip => ({
    type: RECEIVE_TRIP,
    trip
})

const removeTrip = tripId => ({
    type: REMOVE_TRIP,
    tripId
})

const receiveItinerary = itinerary => ({
    type: RECEIVE_ITINERARY,
    itinerary
})

const removeItinerary = itineraryId => ({
    type: REMOVE_ITINERARY,
    itineraryId
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

export const createTrip = data => async dispatch => {
    try {
        const res = await jwtFetch('/api/trips/', {
        method: 'POST',
        body: JSON.stringify(data)
        });

        const trip = await res.json();
        dispatch(receiveTrip(trip));
    } catch(err) {
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

export const fetchItinerary = itineraryId => async dispatch => {
    try {
        const res = await jwtFetch(`/api/trips/${itineraryId}`, {
        method: 'GET'
        });

        const trip = await res.json();
        dispatch(receiveItinerary(trip));
    } catch(err) {
        const resBody = await err.json();
        if (resBody.statusCode === 400) {
        return dispatch(receiveErrors(resBody.errors));
        }
    }
};

export const deleteItinerary = itineraryId => async dispatch => {
    try {
        const res = await jwtFetch(`/api/trips/${itineraryId}`, {
        method: 'DELETE'
        });
        const trip = await res.json();
        dispatch(removeItinerary(trip));
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
    Object.freeze(state);
    let newState = {...state};
    switch(action.type) {
      case RECEIVE_TRIPS:
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