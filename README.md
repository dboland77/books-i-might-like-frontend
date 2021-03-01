# "Books you might like" grid component

Built with react - connects to the perlego-backend (Express API).
Bootstrap used to style login components
CSS grid used for responsive layout
Axios used for API communication
Cypress used for end to end testing (performed after prototyping)

# Approach

1. Create protototype components
1. Bootstrap them
1. Load data
1. Create Gallery components
1. Style with css
1. Manually test along the way
1. When happy - Set up Cypress
1. Test
1. Refactor
1. Retest until all working

# To run
1. Please make sure the [backend](https://github.com/dboland77/perlego-backend) is open and running
1. Please make sure the users table given in the backend repo has been created in the test database.
1. The app uses two .env variables - REACT_APP_API_URL and REACT_APP_PREFIX the latter being the first part of the book cover URL. 
1. Please clone this repo and run npm install 
1. To run the app type npm run start
1. To open the Cypress test runner type npm run cypress
1. There are three integrated test scripts. 
    1.The first is to check cypress is ok and the app is running
    1. The second tests the Register route for the app
    1. The third tests the authenticated Login route
1. These tests are configured to run in order in Cypress.json so hitting run all tests should be fine. 
