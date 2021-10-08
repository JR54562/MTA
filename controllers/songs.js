const Song = require('../models').Song;
const User = require('../models').User;

const index = (req, res) => {
    console.log(Song);
    Song.findAll().then((song) => {
       res.render("songs/index.ejs", {
        song: song,
      });
    });
};
 // View to create a new Song
const renderNew = (req, res) => {
    res.render("songs/new.ejs");
  }; 
  const show = (req, res) => {
    // pass in song and index
    Song.findByPk(req.params.index, {
        include: [
            {
                model: User,
                attributes: ['username','id']
            }
        ]
    })
        .then((foundSong) => {
          console.log('found Song', foundSong)
          res.render("songs/show.ejs", { song: foundSong });
      })
  };
  const postSong = (req, res) => {
    Song.create(req.body)
        .then(newSong => {
            res.redirect("/songs");
    })  
};
// One item will be deleted
const deleteSong = (req, res) => {
    Song.destroy({
        where: { id: req.params.index }
    }).then(() => {
        res.redirect("/songs");
    })
};
// From the index page, select one to edit
const renderEdit = (req, res) => {
    Song.findByPk(req.params.index).then((song) => {
      res.render("./songs/edit.ejs", {
        song: song
      });
    });
  };
// Allows for the editing of one item
const editSong = (req, res) => {
    Song.update(req.body, {
        where: { id: req.params.index },
        returning: true
    })
        .then(song => {
            res.redirect("/songs");
    })
  
};


module.exports = {
    index,
    renderNew,
    show,
    postSong,
    deleteSong,
    renderEdit,
    editSong
}