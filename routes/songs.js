const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/new', ctrl.songs.renderNew);
router.get('/', ctrl.songs.index);
router.get('/:index', ctrl.songs.show);
router.post('/', ctrl.songs.postSong);
router.get('/:index/edit', ctrl.songs.renderEdit);
router.put('/:index', ctrl.songs.editSong)
router.delete('/:index', ctrl.songs.deleteSong)

module.exports = router;