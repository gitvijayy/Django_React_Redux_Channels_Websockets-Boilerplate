
# Django + React + Redux + Channels + Websockets Boilerplate

## A boilerplate project for anyone interested in making a project that uses Django and React

## Using the boilerplate

First, fork this boilerplate so you get your own copy of it. Once you have done that, you can clone your new repo to your machine, and get started.

## Database 

### Both Postgres and sqlite3 have been configured to work

path - /backend/backend/settings.py

- If using postgres you will have to make changes to the configuration based on your local settings, namely username and password.
- For sqlite3 just uncomment the sqlite configuration in settings and you are good to go

## You need TWO terminals for this

### In one terminal

- pipenv shell
- pipenv update
- python backend/manage.py runserver

### In the other terminal

- cd into frontend
- npm install
- Rename the .env.example file to be called .env
- Then run npm start and go to localhost:3000 in your browser.

You should see a simple chat client in the browser
open a new tab and go to localhost:3000
Test by sending a message in one client it should show up in all.(Channels & Websocket)

## Contact

- Please contact me at 7822vijay@gmail.com if you have any questions or requests, or post an issue to this repo.
