# **don'trip**

### **don'Trip**

**don'trip** is an AI assisted trip planning website that allows you to create and save a travel itinerary.

## Background and Overview

Going on vacation is something that most people look forward to all year long. However, everybody isn't interested in planning the trip themselves- that's where don'trip comes in. This web application eliminates the stress of doing research for planning your trip. 

## Functionality and MVP

- User Authorization: sign up and log in  
- Trip: users can select a desired trip type and time of year from pre-set options
- Location: users can choose a trip location from an AI generated list of locations to enjoy the desired trip at the desired time of year
- Itinerary: users can create, update, destroy and save itineraries to their Google Calendar
- Event/Stay: users can choose events and resorts to add to itinerary from an AI generated list of events

### Bonus Features

- Weather API integration for locations
- Expanded Groups functionality: add users to a trip

## Technologies

**don'trip** is a web application built on the **MERN* stack. MongoDB and Express comprises the backend, while React/Node.js comprise the frontend. Using a NoSQL database such as MongoDB allows us more freedom in how we express the relationships between data objects. React and Node.js let us create an interactive and dynamic webpage.

### API usage:

- ChatGPT API
- Google Maps API
- Google Places API
- Google Geocoder API
- Google Calendar API
- AWS

## Technical challenges:

- Formatting ChatGPT queries to return responses in a usable format that can be passed back into our code

## Group Members & Work Breakdown

Akea Tolentino, Anthony Wong, Thomas Ly, Rocco Lattanzio

#### Accomplished over the weekend

- All members of team read and completed MERN tutorials
- Designed project layout with wireframes
- Investigate ChatGPT API

### July 3rd

- Build skeloten project, set up AWS and MongoDB - Akea
- Test ChatGPT request/response formats, create sign in/up form modals - Thomas
- Build skeloten React site, create navbar functional component - Anthony
- Build User Auth