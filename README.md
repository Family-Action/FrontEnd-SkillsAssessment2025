# Front End Developer – Home Task  

#### Project Title:  
“Simple Booking Interface” – Front-End Task Using Next.js + Shadcn UI

#### Objective: 
Build a simple booking interface for a counselling service where users can view available time slots and confirm a booking. Focus on UI clarity, accessibility, and responsiveness.

## Tech Requirements
 
#### Framework
- Next.js (latest stable) / Typescript 
- UI Library: Shadcn UI 
- Styling: Tailwind CSS 
- Optional State Management (bonus): useReducer or any other


#### Functional Requirements: 

1. Display Available Slots 
   * Show a weekly calendar grid (7 days × 8 time slots per day, e.g. 9am–5pm)
   * Hardcoded list of available slots (you can mock this in code) 
1. Select a Slot 
   * User can select a single available slot 
1. Confirm Booking 
   *  Clicking “Confirm Booking” should: 
   *  Show a confirmation modal 
   * “Book” the slot (update state to mark it as unavailable) 
   * Persist to localStorage 
1. Booked Slot Handling 
   *  Booked slots should be visually distinct and disabled for selection 
1. Responsiveness 
   * Works well on both desktop and mobile

#### Bonus Points: 
 * Implement a filter to show only available days 
 * Add Animation ie Framer Motion Animations, Toast Notifications, Slot Status  
 * Indicator, Dark Mode 
 * Use useReducer to manage global state 
 * Unit Tests 

#### Skills Assessed 

 * Component composition and reuse 
 * State handling and data flow 
 * UI/UX best practices 
 * Working with Tailwind and Shadcn UI 
 * Code clarity and modularity 

## Installation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

```bash
 git clone https:xxxx

# once downloaded:
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Getting Started

First, run the development server:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## Submission:

 zip the file

## License

[MIT](https://choosealicense.com/licenses/mit/)