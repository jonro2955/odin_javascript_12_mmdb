# My Movie Database

## [Live Site](https://mmdb-97518.web.app)

MMDB is a movie entertainment database where users can look up, review, and save custom movie lists from approximately 775,600 titles. These are features which are typical of video streaming sites. The movie information was obtained by consuming the [TMDB API](https://www.developers.themoviedb.org).

This app showcases my skills in developing responsive, interactive and visually engaging web application using HTML, CSS and ReactJS.

Emphasis was placed on implementing back end features for logged in users, including the ability to submit or edit movie reviews and saving custom movie lists using the Firebase SDK. Each review submission affects the total combined score calculated with data obtained from the TMDB API. Each movie review submitted is made public to all visitors to that particular movie page.

A key lesson from this exercise is that, since there are so many ways to structure a document based database, it requires a lot of experience to do it well. For this app, I created separate data collections for each authenticated user and for each reviewed movie, where each collection contains separate copies of the submitted review data. This enables logged in users to edit their own reviews as well as allowing logged out users to view all submitted reviews for a particular movie. In hindsight however, I could have taken a single collection approach that works just as well and results in less code to maintain.

<hr/>

### Focus Areas

- React Context API.
- Firebase SDK for user authentication and database operations.
- Requesting and upacking JSON data from themoviedb.org API.
- Responsive CSS for proper look and feel across all devices.
- User interface design and wireframing.

### Tools

- React: router, context API.
- Firebase: authentication, database, hosting.
- Google and Facebook developer tools, authentication tokens.
- Vanilla CSS.

### Acknowledgements

[The Odin Project](https://www.theodinproject.com/)

### License

[ISC](https://opensource.org/licenses/ISC)
