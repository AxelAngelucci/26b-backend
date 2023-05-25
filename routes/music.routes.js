const express = require('express');
const {createTrack, getAllTracks, updateTrack, deleteTrack, getTrackById, uploadFileController} = require('../controllers/music.controllers');
const uploadFile = require('../config/storage.config');
const musicRouter = express.Router();

//endpoints generales
musicRouter.post('/music', createTrack)
musicRouter.get('/music', getAllTracks)



//endpoints por id
musicRouter.get('/music/:id', getTrackById)
musicRouter.delete('/music/:id', deleteTrack)
musicRouter.put('/music/:id', updateTrack)

musicRouter.put('/storage/:id', uploadFile.single("file"), uploadFileController);

module.exports = musicRouter;
