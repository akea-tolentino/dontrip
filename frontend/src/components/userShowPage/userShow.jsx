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
        <div>
            Hello Trips
        </div>
    )
}
