const User = require('../models').User;
const Song = require('../models').Song;

const index = (req, res) => {
    res.render('users/index.ejs')
}

const renderSignup = (req, res) => {
    res.render('users/signup.ejs')
}

const signup = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.redirect(`/users/profile/${newUser.id}`);
    })
}

const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
        .then(foundUser => {
        console.log(foundUser)
        res.redirect(`/users/profile/${foundUser.id}`);
    })
}
//Show the User Profile page
const renderProfile = (req, res) => {
    User.findByPk(req.params.index, {
        include: [
          {
            model: Song,
            attributes: ["id","name"],
          },
        ],
      })
    .then(userProfile => {
        res.render('users/profile.ejs', {
            user: userProfile
        })
    })
}

const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.index
        },
        returning: true
    })
    .then(updatedUser => {
        res.redirect(`users/profile/${req.params.index}`);
    })
}

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect('/users');
    })
}

module.exports = {
    index,
    renderSignup,
    renderLogin,
    signup,
    login,
    renderProfile,
    editProfile,
    deleteUser
}