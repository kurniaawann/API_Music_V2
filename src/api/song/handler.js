const autoBind = require("auto-bind");
const mapDBToModel = require("../../utils/MapDBToModel");

class SongHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
    autoBind(this);
  }

  async postSongHandler(request, h) {
    this._validator.validateSongPayload(request.payload);

    const { title, year, genre, performer, duration, albumId } =
      request.payload;

    const songId = await this._service.addSong({
      title,
      year,
      genre,
      performer,
      duration,
      albumId,
    });

    const response = h.response({
      status: "success",
      message: "Song berhasil ditambahkan",
      data: {
        songId,
      },
    });
    response.code(201);
    return response;
  }

  async getSongsHandler() {
    const songs = await this._service.getAllSongs();
    console.log(songs);
    return {
      status: "success",
      data: {
        songs,
      },
    };
  }

  async getSongByIdHandler(request) {
    const { id } = request.params;

    const songs = await this._service.getSongsById(id);

    return {
      status: "success",
      data: {
        songs,
      },
    };
  }
}

module.exports = SongHandler;
