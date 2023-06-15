const express = require('express');
const {createTrack, getAllTracks, updateTrack, deleteTrack, getTrackById, uploadFileController} = require('../controllers/music.controllers');
const uploadFile = require('../config/storage.config');
const authMiddleware = require('../middlewares/jwt.middleware');
const musicRouter = express.Router();

//endpoints generales
musicRouter.post('/music', authMiddleware, createTrack)
musicRouter.get('/music', authMiddleware, getAllTracks)

//endpoints por id
musicRouter.get('/music/:id',authMiddleware, getTrackById)
musicRouter.delete('/music/:id',authMiddleware, deleteTrack)
musicRouter.put('/music/:id',authMiddleware, updateTrack)
musicRouter.put('/storage/:id', authMiddleware, uploadFile.single("file"), uploadFileController);

module.exports = musicRouter;
