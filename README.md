# **don'trip**

### **don'Trip**

**don'trip** is an AI assisted trip planning website that allows you to create and save a travel itinerary.

## Background and Overview

Going on vacation is something that most people look forward to all year long. However, everybody isn't interested in planning the trip themselves- that's where don'trip comes in. This web application eliminates the stress of doing research for planning your trip. 

## Functionality and MVP

- User Authorization: sign up and log in  
![Alt Text](./signin.png)
<br/>

- Trip: users can select a desired trip type and time of year from pre-set options
![Alt Text](/trips.png)
<br/>

- Location: users can choose a trip location from an AI generated list of locations to enjoy the desired trip at the desired time of year

&nbsp; &nbsp; &nbsp; ![Alt Text](/globe.gif)
<br/>

- Itinerary: users can create, update, destroy and save itineraries
![Alt Text](/itinerary.png)
<br/>

- Event/Stay: users can choose events and resorts to add to itinerary from an AI generated list of events

### Bonus Features

- Weather API integration for locations
- Expanded Groups functionality: add users to a trip

## Technologies

**don'trip** is a web application built on the **MERN* stack. MongoDB and Express comprises the backend, while React/Node.js comprise the frontend. Using a NoSQL database such as MongoDB allows us more freedom in how we express the relationships between data objects. React and Node.js let us create an interactive and dynamic webpage.

### API usage:

- AWS
- ChatGPT API
```
   const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [{
                "role": "user",
                "content": `return only a string of 5 ${experience} destinations in ${category}, located in North America, South America, Europe, or Asia, formatted in city, country, and coordinates using the World Geodetic System WGS84 standard", split by a |, on a single line, Don’t justify your answers. `
            }],
            "temperature": 0,
            "max_tokens": 1000
        };
```

## Technical challenges:

- Formatting ChatGPT queries to return responses in a usable format that can be passed back into our code

## Group Members

Akea Tolentino, Anthony Wong, Thomas Ly, Rocco Lattanzio