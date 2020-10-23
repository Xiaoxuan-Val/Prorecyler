# INFO30005-F4 Prorecycler Deliverable 4
This is an assignment for subject INFO30005 Web Information Technology.
We are group F4. Our project is "prorecycler", a website aims providing information for users to help them recycle their daily rubbish.

## Features
### Core Functions

1. User

    a. Login: In home page there is a login botto, and by clicking the login botton, user would be redirected to the google login page. User could login the website using google account.

    b. User Center: After log in, user can enter user center to add trash/bin data.

    c. Check tips: when user click the pro tips button, it could comes out random tips form mongodb and flash the page can show different tips with images.

2. Search

    Enter keywords (either trash type or trash name, case-insensitive) into search bar in the home page and presh search button will lead user into a search result page, showing all the results found, and click the trash into another page showing its detail information.

3. Map

    there is a map when user click find nearest bins button it would show where the user is and the bins around the users
    
        a. Press the marker of bins in the map will show the detail info of this bin.

        b. The marker color of bin will change according to the type of bin, e.g. recycling bin is green, landfill is red

## Set up
Please `cd` into the repo first.
Then install dependencies.
```bash
npm install
```

## Running
Please run `app.js` and then visit the website in the browser: http://localhost:3000/
or just visit the website in the browser:https://prorecycler.herokuapp.com


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
