# INFO30005-F4 Prorecycler Deliverable 4
We are group F4, and our project is "prorecycler".

## Features
### Bug found
1. Map

    Map function working well locally but failed on heroku

### Core Functions

1. User

    a. User can click the login botton and this would directly link to the google login page and if the user have google account, user could login the website using google account

    b. After log in, user can enter user center to add trash/bin data

2. Search

    Enter keywords (either trash type or trash name, case-insensitive) into search bar in the home page and presh search button will lead user into a search result page, showing all the results found, and click the trash into another page showing its detail information.

3. Map

    there is a map when user click find nearest bins button it would show where the user is and the bins around the users

4. Tips

    when user click the i'm feeling trashy button, it could comes out random tips form mongodb and flash the page can show different tips with images.

### Developing Functions

1. Map

    a. Press the marker of bins in the map will show the detail info of this bin.

    b. The marker color of bin will change according to the type of bin, e.g. recycling bin is yellow, landfill is read

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
├─┬ config
│ └── config.js         config google passport url and set the url linkage
│ └── passport-setup.js setup the passport to the user to save the id
├─┬ controllers
│ └── controller.js     Defines callback functions for routes
├─┬ models              Mongoose stuff
│ └── bin.js            Define bin data format
│ └── db.js             Set up the wohle data format to mongodb
│ └── tip.js            Define tip data format
│ └── trash.js          Define trash data format
│ └── user.js           Define user data format
├── node_modules        Contains dependencies. Don't commit this file.
├─┬ public              Stores the static files, e.g. images and styles
│ └── CSS               
│      └── index.css    Stores the index html style definitions
│      └── login.css    Stores the login html style definitions
│      └── map.css      Stores the map html style definitions
│      └── tips.css     Stores the tips html style definitions
│      └── trash.css    Stores the trash html style definitions
│      └── trash_index.css    Stores the trash_index html style definitions
│      └── binaddform.css     Stores the binaddform html style definitions
│      └── saerchresult.css   Stores the saerchresult html style definitions
│      └── thankyoupage.css   Stores the thankyoupage html style definitions
│      └── trashaddform.css   Stores the trashaddform html style definitions
│      └── useraddform.css    Stores the useraddform html style definitions
│      └── usercenter.css     Stores the usercenter html style definitions
│ └── Images            Stores the static images
├─┬ routes              
│ └── bins.js          Defines CRUD routes for bins
│ └── maps.js          Defines CRUD routes for maps
│ └── routes.js        Defines CRUD routes for users
│ └── trashs.js        Defines CRUD routes for trashs
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
│ └── addBinForm.pug   `Display the addBinForm page
│ └── addTrashForm.pug  Display the addTrashForm page
│ └── searchresult.pug  Display the searchresult page
│ └── ThankYouPage.pug  Display the ThankYouPage page
│ └── usercenter.pug    Display the usercenter page
├── .gitignore          Specify things you don't want version-controlled
├── app.js              Runs the app
├── package.json        Contains info about the project
├── package-lock.json   Contains more info about dependencies (don't edit this directly)
└── README.md           Contains info about the project 
```

## Reference
1. 
    Course content from week 1 to 7

2. 
    Awais Mirza, S 2016, 
    Develop a Quiz App with Javascript, 
    viewed 18 May 2019
    \<https://drive.google.com/drive/folders/0B8qiHDiC8qnbREljdGdUeWZfcEk\>. 

## Acknowledgement
This project completed by Weijie Lin (905673), Xiaohan Liu(908471), Xiaoxuan Li (933206), Xun Zhang (854776), 