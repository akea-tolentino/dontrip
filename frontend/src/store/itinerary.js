import Itinerary from '../components/Itinerary/Itinerary';
import jwtFetch from './jwt';

const CREATE_ITINERARY = "CREATE_ITINERARY";

const createItinerary = payload => ({
  type: CREATE_ITINERARY,
  payload
});


export const postItinerary = (itineraryInfo, userId) => async dispatch => {
    //post request to create an itinerary
    const res = await jwtFetch(`/api/itineraries/users/${userId}`, {
      method: "POST",
      body: JSON.stringify(itineraryInfo)
    });

    const data = await res.json()
    dispatch(createItinerary(data))
    return data
}

export const itineraryReducer = (state = {}, action) => {
  debugger
  Object.freeze(state);
  const nextState = {...state};

  switch (action.type) {
    case CREATE_ITINERARY:
      return { ...action.payload};
    default:
      return nextState;
  }
};