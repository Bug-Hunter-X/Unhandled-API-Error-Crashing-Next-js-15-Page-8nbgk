# Unhandled API Error in Next.js 15 Page

This repository demonstrates a common error in Next.js 15 applications:  unhandled errors from API calls within page components. When an API request fails, the page crashes, displaying a generic error message instead of a user-friendly fallback.

## Bug Description
The `pages/about.js` component fetches data from an API endpoint (`/api/data`). If the API call fails (simulated 50% of the time), the component crashes, interrupting the user experience.  The error isn't caught and handled gracefully.

## Solution
The `pages/aboutSolution.js` demonstrates a solution using `async/await` and error handling to gracefully manage API failures, providing a better user experience.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Refresh the page multiple times; you'll see the page crash occasionally.
6. Then review the solution file to see how to gracefully handle errors.
