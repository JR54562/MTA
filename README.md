# Music Tracker App or MTA.

MTA is an app that allows a user to first sign-up for a profile, and then add songs to a collection. 

## Installation

No installation is required. A profile can be created on the main page initially.

## User Stories

- As a User, I want to be able to create an account.
- I want to be able to change my user name and password.
- I want to add a song to the database. 
- I want to edit and delete my songs.
- I want to view all songs in the database. 
- The ability to search by song name. 
- The ability to search by album name.
- The ability to search by artist name.
- The ability to search by year.
- The ability to search by length.
- The ability to search by genre.


## Usage

In order to use the app, a user will need to register the first time and then only login on subsequent visits.

![E4BDEBCA-66DB-40F7-98B9-7A2AFFF76CA1](https://user-images.githubusercontent.com/87659547/137034644-2b891a54-1265-4938-aff8-12a66c5cbd58.png)

Once logged in, a user can edit the username and password of their profile, add songs, search or view all songs in the database. The logged in user will also be able to see any songs they have added, and take action on them. 

![06664ED7-FE42-40D3-A9E7-C22873222A95](https://user-images.githubusercontent.com/87659547/137043213-808ccef7-2c7e-4b76-805b-4f987e3ae9f0.png)

### Searching

At this time, searching is limited to case-specific spelling. However, partial searches are supported. 

### Adding a New Song

Fill in all of the fields and click Add your song! Be sure to select your username to add it to your collection. 

![45FDB3E2-424A-4900-8DE7-73FA1A391092](https://user-images.githubusercontent.com/87659547/137044311-6e97ad97-b62c-4879-94e5-2f5e749c9169.png)

## Project Structure

One database with two tables is used to track users and songs. There is a foreign relationship to enable song tracking by user. 

![EB2FBC8B-10E9-4B59-AC37-2BC186C3CE4F](https://user-images.githubusercontent.com/87659547/137054285-f9e22aa5-2cfa-42d3-bf2f-2efbad5a01b1.png)

## Future Enhancements

- Some internal routing needs to be refactored into one action. This will clean up several lines of code. 
```
const { Op } = require("sequelize");
Post.findAll({
  where: {
    [Op.or]: [
      { authorId: 12 },
      { authorId: 13 }
    ]
  }
});
// SELECT * FROM post WHERE authorId = 12 OR authorId = 13;

https://sequelize.org/master/manual/model-querying-basics.html

```
- Apply a bootstrap design template to site. 
- Assume there will be duplicate songs added. Display all?
- Acknowledge any issues/errors and correct them. 
- Massage data into or out of the database for case sensitivity.
- Adding a table for Album collection. As the user adds more songs from the same album name, they would be added to a discrete collection. 

## Acknowledgments

Button code provided by - https://css3buttongenerator.com/
Background image from - https://all-free-download.com/pages/licence.html
