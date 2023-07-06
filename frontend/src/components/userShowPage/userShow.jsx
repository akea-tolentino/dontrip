import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserTrips } from "../../store/trips";


export default function UserShowPage () {
    const dispatch = useDispatch();
    const { userId } = useParams();
    // const userTrips = useSelector(state => Object.values(state.user.trips));

    useEffect(() => {
        dispatch(fetchUserTrips(userId))
    }, [dispatch, userId])

    return (
        <div className="user-trips-wrapper">
            <h1 className="user-trips-title">My Trips</h1>
            {userTrips.map(userTrip => {
                return (
                    <div className="user-trip-container">
                        <div className="trip-experience">
                            <p>{userTrip.experience}</p>
                        </div>
                        <div className="trip-month">
                            <p>{userTrip.month}</p>
                        </div>
                        <div className="trip-location">
                            <p>{userTrip.location}</p>
                        </div>
                        <div className="trip-itinerary-container">
                            <label className="trip-itinerary-title">Trip Itinerary
                                <div className="trip-itinerary">
                                    <div className="trip-itinerary-events">
                                        <label>Itinerary Events
                                            {userTrip.itinerary.events.map(event => {
                                                return(
                                                    <div className="itinerary-event-details">
                                                        <p>{userTrip.itinerary.events.description}</p>
                                                        <p>{userTrip.itinerary.events.date}</p>
                                                        <p>{userTrip.itinerary.events.address}</p>
                                                        <p>{userTrip.itinerary.events.cost}</p>
                                                    </div>
                                                )
                                            })}
                                        </label>
                                    </div>
                                    <div className="trip-itinerary-stays">
                                        <label>Itinerary Events
                                            {userTrip.itinerary.stays.map(event => {
                                                return(
                                                    <div className="itinerary-stay-details">
                                                        <p>{userTrip.itinerary.events.description}</p>
                                                        <p>{userTrip.itinerary.events.check_in_date}</p>
                                                        <p>{userTrip.itinerary.events.check_out_date}</p>
                                                        <p>{userTrip.itinerary.events.address}</p>
                                                        <p>{userTrip.itinerary.events.cost}</p>
                                                    </div>
                                                )
                                            })}
                                        </label>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="trip-group-container">
                            <label className="trip-group-title">{userTrip.group.name}
                                <div className="trip-group-details">
                                    <p>{userTrip.group.owner}</p>
                                    <p>{userTrip.group.members}</p>
                                    <p>{userTrip.group.budget}</p>
                                </div>
                            </label>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
