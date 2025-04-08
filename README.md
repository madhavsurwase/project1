# Airbnb Clone
This is a clone of the popular vacation rental marketplace Airbnb, built with Next.js 13.4, Prisma, MongoDB, Next-Auth, Tailwind CSS, TypeScript, and Zustand for learning new NextJS structure and using other new packages. The project aims to replicate key features of Airbnb, allowing users to search for accommodations, view listings, make bookings, and manage their own listings as hosts.

## Live Demo

A live demo of the Airbnb Clone can be found at https://jealous-airbnb-clone.vercel.app. Feel free to explore the application and test its features.

## Getting Started

To get started with the Airbnb Clone, follow the steps below:

1. Clone the repository: git clone https://github.com/JealousGx/airbnb-clone.git
2. Install dependencies: npm install
3. Set up the environment variables:
  - Create a .env.local file in the root directory. 
  - Define the required environment variables (e.g., MongoDB connection string, authentication secrets, etc.) in the .env.local file.
5. Set up the database: 
  - Ensure you have a running MongoDB instance.
  - Update the Prisma connection configuration in the prisma/schema.prisma file with your MongoDB connection details.
  - Migrate the database schema: npx prisma migrate dev
6. Start the development server: npm run dev
7. Open your browser and visit: http://localhost:3000

## Features

- User Authentication: Utilizes Next-Auth for user authentication, enabling users to sign up, log in, and log out securely.
- Accommodation Search: Users can search for accommodations based on location, dates, and other criteria.
- Listing Management: Hosts can manage their listings by creating, editing, and deleting their accommodations.
- Booking System: Users can book accommodations and view their booking history.
- Responsive Design: The application is built with a mobile-first approach using Tailwind CSS, ensuring a seamless experience on different devices.
- State Management: Zustand is used for efficient state management, providing a simple and intuitive way to manage application state.

## Technologies used

- Next.js 13.4: A React framework for building server-side rendered and static web applications.
- Prisma: A modern database toolkit for TypeScript and Node.js, used for database management and ORM.
- MongoDB: A flexible and scalable NoSQL database used to store application data.
- Next-Auth: A complete authentication solution for Next.js applications.
- Tailwind CSS: A highly customizable CSS framework for building modern user interfaces.
- TypeScript: A typed superset of JavaScript that enhances developer productivity and code quality.
- Zustand: A small, fast state management library for React.
And many other libraries.

##### A clone of [Airbnb](https://www.airbnb.com/) for learning purpose.
