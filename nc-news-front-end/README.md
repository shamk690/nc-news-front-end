SUMMARY

NC-NEWS is an online forum where users can post articles on various topics. Uses can also vote and comment on these if they are registered and logged in.

GETTING STARTED

To get started, fork a local copy of the repository

git clone &#39;github repo url&#39;

and install all the required dependencies using NPM as follows:

npm i create-react-app &quot;name of app&quot;

npm i @reach/router

npm i moment

npm i axios

Finally, run the app in development mode using

npm start

Open the local instance of the application using a browser with [http://localhost:3000](http://localhost:3000)

Use &#39;jessjelly&#39; to login and explore the site and read articles.

DEPLOYMENT

When the app is ready to be deployed, use

npm run build

The app can then be deployed via Netlify and is given the following URL:

[https://fe-nc-news.netlify.com](https://fe-nc-news.netlify.com)

FRONT-END

The front-end is built using React and HTML5/CSS. the front-end is deployed on Netlify.

BACK-END

NC-NEWS Backend is based on a fully functional API which includes several end points and error handling. The backend is based on Knex.js, PostgreSQL using MVC patterns. The backend is hosted on Heroku cloud. The following endpoints are available:

GET /api/topics

GET /api/users/:username

GET /api/articles/:article_id

PATCH /api/articles/:article_id

POST /api/articles/:article_id/comments

GET /api/articles/:article_id/comments

GET /api/articles

PATCH /api/comments/:comment_id

DELETE /api/comments/:comment_id

GET /api

The following URL is used by the backend:

[https://github.com/shamk690/NC-News](https://github.com/shamk690/NC-News)

The API for the back-end is available at:

[https://shamila-nc-news.herokuapp.com/api/articles](https://shamila-nc-news.herokuapp.com/api/articles)

AUTHOR

Shamila Asif
