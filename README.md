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

![image](https://github.com/user-attachments/assets/9c3ffb7a-9e77-48b0-8b75-c1d4dc2b5a34)
POST /bookings

Book tickets for an event. The request body should contain the user ID, quantity, and event ID.
![image](https://github.com/user-attachments/assets/214c5da5-e31d-4b6f-b469-a3f55d98c11a)

DELETE /bookings/

Cancel a booking by ID.
![image](https://github.com/user-attachments/assets/801f53ba-cf2f-4384-a55b-52e0d8fb00d9)

GET /events

Retrieve a list of events with available tickets.
![image](https://github.com/user-attachments/assets/b3918dd8-6e0a-4912-89b2-5f3231694d52)

GET /events/:id

Retrieve details of a specific event, including booked tickets and remaining tickets.

![image](https://github.com/user-attachments/assets/bcd87f03-235f-4210-a3b9-c848f683def5)
POST /print-ticket

Generate a printable format of the ticket for a specific booking.
![image](https://github.com/user-attachments/assets/36516c8f-1e61-4a1b-a225-841a23f3826f)

Booking Limit

Each user can book a maximum of 15 tickets per booking request. If a user tries to book more than 15 tickets in a single request, the system will only process up to 15 tickets and reject any additional requests in that transaction.
Availability Check

Before confirming a booking, the system checks if there are enough tickets available for the event. If the event has reached its maximum capacity (i.e., no more tickets are available), the system will prevent further bookings and inform the user that the event is fully booked.
