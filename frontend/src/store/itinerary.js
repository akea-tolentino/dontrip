import Itinerary from '../components/Itinerary/Itinerary';
import jwtFetch from './jwt';

const CREATE_ITINERARY = "CREATE_ITINERARY";
const RECEIVE_ITINERARY = "RECEIVE_ITINERARY";
const UPDATE_ITINERARY = "UPDATE_ITINERARY";

const createItinerary = payload => ({
  type: CREATE_ITINERARY,
  payload
});

const receiveItinerary = payload => ({
  type: RECEIVE_ITINERARY,
  payload
})

const updateItinerary = payload => ({
  type: UPDATE_ITINERARY,
  payload
})


export const patchItinerary = (itineraryInfo, itineraryId) => async dispatch => {
  debugger
  const res = await jwtFetch(`/api/itineraries/${itineraryId}`, {
    method: "PATCH",
    body: JSON.stringify(itineraryInfo)
  });
  const data = await res.json();
  debugger
}


export const postItinerary = (itineraryInfo, userId) => async dispatch => {
    //post request to create an itinerary
    const res = await jwtFetch(`/api/itineraries/users/${userId}`, {
      method: "POST",
      body: JSON.stringify(itineraryInfo)
    });
    const data = await res.json();
    dispatch(createItinerary(data));
    return data
}

export const getItinerary = (itineraryId) => async dispatch => {
  const res = await fetch(`/api/itineraries/${itineraryId}`)

  const data = await res.json();

  dispatch(receiveItinerary(data))

}

export const itineraryReducer = (state = {}, action) => {

  Object.freeze(state);
  const nextState = {...state};
  switch (action.type) {
    case CREATE_ITINERARY:
      return { ...action.payload};
    case RECEIVE_ITINERARY:
      return {...action.payload};
    default:
      return nextState;
  }
};