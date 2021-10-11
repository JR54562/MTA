const Song = require("../models").Song;
const User = require("../models").User;
const { Op } = require("sequelize");


const index = (req, res) => {
  console.log(Song);
    Song.findAll({
        include: [
            {
                model: User,
                attributes: ["username", "id"],
            },
        ],
    })
      .then((song) => {
        console.log(song)
      res.render("./songs/index.ejs", {
        song: song,
      });
    });
};

// View to create a new Song
const renderNew = (req, res) => {
    User.findAll().then(users => {
        res.render("songs/new.ejs", { users });
    })
  
};
//This is used to show
const show = (req, res) => {
  Song.findByPk(req.params.index, {
    include: [
      {
        model: User,
        attributes: ["username", "id"],
      },
    ],
  }).then((foundSong) => {
    console.log("found Song", foundSong.name);
    res.render("songs/show.ejs", { song: foundSong });
  });
};

const postSong = (req, res) => {
  Song.create(req.body).then((newSong) => {
    res.redirect("/songs");
  });
};
// One item will be deleted
const deleteSong = (req, res) => {
  Song.destroy({
    where: { id: req.params.id },
  }).then(() => {
    res.redirect("/songs");
  });
};
// From the index page, select one to edit
const renderEdit = (req, res) => {
  Song.findByPk(req.params.id).then((song) => {
    res.render("./songs/edit.ejs", {
      song: song,
    });
  });
};
// Allows for the editing of one item
const editSong = (req, res) => {
  Song.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((song) => {
    res.redirect("/songs");
  });
};
//This is used to search
const search = (req, res) => {
    console.log(req.body)
    Song.findAll({
        where:
        {
            name: {
            [Op.substring]: req.body.search
                    }
                },
            include: [
                {
                    model: User,
                    attributes: ["username", "id"],
                },
            ],        
    }).then((foundSongs) => {
        console.log("found Song", foundSongs[0].name);
        res.render("songs/index.ejs", {
            song: foundSongs,
          });
    });
};
 //This is used to search by Artist
const searchByArtist = (req, res) => {
    console.log(req.body)
    Song.findAll({
        where:
        {
            artist: {
            [Op.substring]: req.body.search
                    }
                },
            include: [
                {
                    model: User,
                    attributes: ["username", "id"],
                },
            ],        
    }).then((foundSongs) => {
        console.log("found Song", foundSongs[0].name);
        res.render("songs/index.ejs", {
            song: foundSongs,
          });
    });
};
//This is used to search by Album
const searchByAlbum = (req, res) => {
    console.log(req.body)
    Song.findAll({
        where:
        {
            album: {
            [Op.substring]: req.body.search
                    }
                },
            include: [
                {
                    model: User,
                    attributes: ["username", "id"],
                },
            ],        
    }).then((foundSongs) => {
        console.log("found Song", foundSongs[0].name);
        res.render("songs/index.ejs", {
            song: foundSongs,
          });
    });
};
//This is used to search by Year
const searchByYear = (req, res) => {
    console.log(req.body)
    Song.findAll({
        where:
        {
            year: {
            [Op.substring]: req.body.search
                    }
                },
            include: [
                {
                    model: User,
                    attributes: ["username", "id"],
                },
            ],        
    }).then((foundSongs) => {
        console.log("found Song", foundSongs[0].name);
        res.render("songs/index.ejs", {
            song: foundSongs,
          });
    });
};
// Used to search by Length
const searchByLength = (req, res) => {
    console.log(req.body)
    Song.findAll({
        where:
        {
            length: {
            [Op.substring]: req.body.search
                    }
                },
            include: [
                {
                    model: User,
                    attributes: ["username", "id"],
                },
            ],        
    }).then((foundSongs) => {
        console.log("found Song", foundSongs[0].name);
        res.render("songs/index.ejs", {
            song: foundSongs,
          });
    });
};
// Used to search by Length
const searchByGenre = (req, res) => {
    console.log(req.body)
    Song.findAll({
        where:
        {
            genre: {
            [Op.substring]: req.body.search
                    }
                },
            include: [
                {
                    model: User,
                    attributes: ["username", "id"],
                },
            ],        
    }).then((foundSongs) => {
        console.log("found Song", foundSongs[0].name);
        res.render("songs/index.ejs", {
            song: foundSongs,
          });
    });
};

// Show the Search Page
const renderSearch = (req, res)=> {
    res.render("songs/search.ejs")
}
module.exports = {
  index,
  renderNew,
  show,
  postSong,
  deleteSong,
  renderEdit,
    editSong,
    search,
    renderSearch,
    searchByArtist,
    searchByAlbum,
    searchByYear,
    searchByLength,
    searchByGenre
};
