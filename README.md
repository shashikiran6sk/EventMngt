# Event Booking System

This project is an Event Booking System that allows users to create events, book tickets, and manage bookings. The application is built using Node.js, Express, and TypeScript, and it requires Docker and npm for local development.

## Installation

To run this application locally, you need to have Docker and npm installed. Follow these steps to set up and run the application:

1. Clone the repository
 
   git clone https://github.com/your_username/your_repo.git
   cd your_repo

Install dependencies

npm install express mongoose body-parser
npm install typescript ts-node @types/node @types/express @types/body-parser

Compile TypeScript files

npx tsc

Start the application

node dist/index.js

The application will be running on port 3000.
Usage

Use the following API endpoints to interact with the application:
POST /events

Create a new event. The request body should contain the event name, date, and total number of tickets.


POST /bookings

Book tickets for an event. The request body should contain the user ID, quantity, and event ID.


DELETE /bookings/

Cancel a booking by ID.


GET /events

Retrieve a list of events with available tickets.


GET /events/

Retrieve details of a specific event, including booked tickets and remaining tickets.


POST /print-ticket

Generate a printable format of the ticket for a specific booking.


Booking Limit

Each user can book a maximum of 15 tickets per booking request. If a user tries to book more than 15 tickets in a single request, the system will only process up to 15 tickets and reject any additional requests in that transaction.
Availability Check

Before confirming a booking, the system checks if there are enough tickets available for the event. If the event has reached its maximum capacity (i.e., no more tickets are available), the system will prevent further bookings and inform the user that the event is fully booked.
