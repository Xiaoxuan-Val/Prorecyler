# INFO30005-F4 Prorecycler Deliverable 4
We are group F4, and our project is "prorecycler".

## Features
### Core Functions

1. User

    a.user can click the login botton and this would directly link to the google login page and if the user have google account, user could login the website using google account

    b.user could search the trash by name and this would come out the details about the trash

2.All trashes

click the magnifier and this would link to all trash page which show all trashes information

3.Map

there is a map when user click find nearest bins button it would show where the user is and the bins around
the users

4.Tips

when user click the i'm feeling trashy button, it could comes out random tips form mongodb and 
flash the page can show different tips with images.

### Developing Functions

1.Map

All nearby bins location are shown in Map

2.Bins

User are able to add a new bin into database

3.Search

User are able to search a trash to find info about how to deal with it

## Set up
Please `cd` into the repo first.
Then install dependencies.
```bash
npm install
```

## Running
Please run `app.js` and then visit the website in the browser: http://localhost:3000/
or just visit the website in the browser:https://prorecycler.herokuapp.com

## Structure
```
INFO30005-F4
├─┬ controllers
│ └── controller.js     Defines callback functions for routes
├─┬ models              Mongoose stuff
├── node_modules        Contains dependencies. Don't commit this file.
├─┬ public              Stores the static files, e.g. images and styles
│ └── CSS               
│      └── index.css    Stores the index html style definitions
│      └── log``in.css    Stores the login html style definitions
│      └── map.css      Stores the map html style definitions
│      └── tips.css     Stores the tips html style definitions
│      └── trash.css    Stores the trash html style definitions
│      └── trash_index.css    Stores the trash_index html style definitions
│      └── useraddform.css    Stores the useraddform html style definitions
│ └── Images            Stores the static images
├─┬ routes              
│ └── bins.js          Defines CRUD routes for bins
│ └── maps.js          Defines CRUD routes for maps
│ └── routes.js          Defines CRUD routes for users
│ └── trashs.js          Defines CRUD routes for trashs
├─┬ views              
│ └── alltrash.pug      HTML doc structure for alltrash
│ └── index.pug         Homepage 
│ └── LoginPage.pug     Display the login page
│ └── maps.pug          Display the map page
│ └── profile.pug       Display the proflie page
│ └── tips.pug          Display the tips page
│ └── trash.pug         Display the trash page
│ └── useraddform.pug   Display the useraddform page
│ └── map.js            provide needed json code for map page
├── .gitignore          Specify things you don't want version-controlled
├── app.js              Runs the app
├── package.json        Contains info about the project
├── package-lock.json   Contains more info about dependencies (don't edit this directly)
└── README.md           Contains info about the project 
```

## Reference
Course content from week 1 to 7

## Acknowledgement
This project completed by Weijie Lin (905673), Xiaohan Liu(908471), Xiaoxuan Li (933206), Xun Zhang (854776), 