# sparespace

https://youtu.be/muemCrLBGHQ

Inspiration
The inspiration for SpareSpace came from the growing need for affordable, accessible, and safe spaces for students who are facing the challenges of finding a place to live, study, sleep or simply hang out. With the increasing cost of housing and the limited availability of on-campus housing, many students are forced to live in their cars or endure overcrowded dorms. SpareSpace aims to solve this problem by connecting students with local businesses that have underutilized spaces available for rent. The platform offers a simple and convenient solution for both students and businesses, providing a win-win solution for all parties involved. With SpareSpace, students can finally have access to affordable and comfortable spaces, and businesses can benefit from additional revenue streams from their underutilized spaces.

What it does
SpareSpace acts similarly to AirBnB. Students enter the page with an ability to search for rental spaces based on the timeframe and purpose of renting the space, budget, as well as zipcode. SpareSpace is able to filter those information by analyzing real estate and property data from the Town of Cary GIS group. After the students request a rental space, owners will receive emails prompting them to approve or request these rental requests. If their request is approved, students will receive an email directing them to a secure and encrypted payment developed by Stripe API. Once that is done, the students will receive reminders via email about using and maintaining their rental space.

How we built it
Our team built the frontend using Google Cloud Map API, AngularJS, Angular Material UI, and Typescript, and the backend using Node.js. We implemented our database and user authentication using Appwrite and Docker, payment functionality using Stripe API, and automatic email delivery system using SendGrid API. Aside from this, we collected our rental space data by scraping real estate data from the Town of Cary GIS Group. This is our first time using most of these technologies, so we are proud we are able to put everything together!

Challenges we ran into
Deciding our tech stack → We initially chose to build our website using Velo by Wix, but after toying around for 3 hours, we recognize that only being able to modify the website one person at a time would dramatically slow down our progress. We decided to use AngularJS and Typescript, as that was the most common framework our members are familiar with. However, implementing the frontend using Angular Material UI also consumed some setup time.
Setting up Appwrite → It is our first time using Appwrite, so we spent 12 hours (specifically 4 hours worth of our mentor Cate) to set up the user authentication and enable team members to get access to the API.
Accomplishments that we're proud of
Despite the many errors we encountered along with way with AppWrite’s API, all team members worked closely together and persevered to solve the many issues that were thrown at us throughout our development journey.

Half of our team members had no prior experience with Angular and were unfamiliar with Typescript. Thus, being able to learn, adapt, and develop an aesthetically pleasing frontend in frameworks and languages we are not familiar with is a feat we are proud of.

Additionally, we aimed to tackle and incorporate real estate data into a community and communications hack, we were creative with ways in which we would use, analyze, and search for real estate and property data.

What we learned
Throughout our journey with this hackathon, we were able to explore, learn, and inquire about AppWrite, Docker, AngularJS, Typescript, and SendGrid. We are continuously humbled by the compile and integration errors we encountered, and are glad we chose to stick to our intended technologies stack. We are now much more confident with backend programming!

What's next for SpareSpace
Integrate Twilio SMS to enable users to call emergency if they feel unsafe around the space they rented
Cross-reference other data from the Town of Cary GIS group to extrapolate data such as the facilities, safety, and community around the rental spaces
Implement a feedback forum and a panel showing which space the user’s friends have previously rented
Implement a feature to split the rental bill for students planning to jointly rent a space

Built With
angular.js, appwrite, docker, mui, node.js, sendgrid, and typescript
