const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/new', ctrl.songs.renderNew);
router.get('/', ctrl.songs.index);
router.get('/show', ctrl.songs.show);
router.post('/', ctrl.songs.postSong);
router.get('/:id/edit', ctrl.songs.renderEdit);
router.put('/:id', ctrl.songs.editSong)
router.delete('/:id', ctrl.songs.deleteSong)
router.get('/search', ctrl.songs.search)

module.exports = router;