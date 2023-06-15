const musicModel = require("../models/music.model");
const verifyToken = require("../utils/verifyToken");

const createTrack = async (request, response) => {
    try {
        const track = await musicModel.create(request.body)
        return response.status(200).json({message: 'Canción guardada', cancion: track})
    } catch (error) {
        console.log(error)
        return request.status(500).json({ error })
    }
}

const getAllTracks = async (request, response) => {
    console.log(request.headers)
    try {
        const tracks = await musicModel.find();
        return response.status(200).json({message: 'Todas las canciones', canciones: tracks});
    } catch (error) {
        console.log(error)
        return request.status(500).json({ error })
    }
}

const updateTrack = async(request, response) => {
    const {id} = request.params
    try {
        const updateTrack = await musicModel.updateOne({_id: id}, request.body);
        return response.status(200).json({message: 'cancion actualizada', cancion: updateTrack});
    } catch (error) {
        console.log(error)
        return request.status(500).json({ error })
    }
}

const deleteTrack =  async(request, response) => {
    const {id} = request.params
    try {
        const deleteTrack = await musicModel.deleteOne({_id: id})
        return response.status(300).json({message: 'cancion eliminada'})
    } catch (error) {
        console.log(error)
        return request.status(500).json({ error })
    }
}

const getTrackById = async (request, response) => {
    const id = request.params.id;
    try {
        const track = await musicModel.findOne({_id: id })
        if(!track) return response.status(404).json({message: `Nu pudimos encontrar la canción con el ID ${id}`})
        return response.json({massage: "Canción encontrada!", cancion: track})
    } catch (error) {
        return request.status(500).json({ error })
    }
}

const uploadFileController = async(request, response) => {
    try {
        const addFile = await musicModel.updateOne({_id: request.params.id}, {file: `http://localhost:8080/${request.file.filename}`});
        response.json({message: "Canción guardada!"});
    } catch (error) {
        return request.status(500).json({ error })
    }
}
module.exports = {createTrack, getAllTracks, updateTrack, deleteTrack, getTrackById, uploadFileController};