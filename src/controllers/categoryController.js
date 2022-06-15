const Aksesoris = require('../models/aksesorisModels')
const BoxPasir = require('../models/boxPasirModels')
const Kandang = require('../models/kandangModels')
const MakananAnjing = require('../models/makananAnjingModels')
const MakananKucing = require('../models/makananKucingModels')
const Obat = require('../models/obatModels')
const Parfum = require('../models/parfumModels')
const Pasir = require('../models/pasirModels')
const Shampo = require('../models/shampoModels')
const Susu = require('../models/susuModels')
const TasHewan = require('../models/tasHewanModels')
const Vitamin = require('../models/vitaminModels')

// aksesoris

const getAllAksesoris = async (request, h) => {
  try {
    const aksesoris = await Aksesoris.find()
    h.status(200).json({
      status: 'success',
      aksesoris
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getAksesorisById = async (request, h) => {
  try {
    const aksesoris = await Aksesoris.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      aksesoris
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Aksesoris tidak ditemukan'
    })
  }
}

const postAksesoris = async (request, h) => {
  try {
    if (!request.file) {
      const e = new Error('image tidak ter-upload')
      e.errorStatus = 422
      throw e
    }

    const aksesoris = new Aksesoris({
      name: request.body.name,
      image: request.file.filename
    })

    const saveaksesoris = await aksesoris.save()
    h.status(201).json({
      status: 'success',
      message: 'Aksesoris berhasil ditambahkan',
      saveaksesoris
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Aksesoris gagal ditambahkan'
    })
  }
}

const updateAksesoris = async (request, h) => {
  try {
    const updatedaksesoris = await Aksesoris.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Aksesoris berhasil diupdate',
      updatedaksesoris
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Aksesoris gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deleteAksesoris = async (request, h) => {
  try {
    const deletedaksesoris = await Aksesoris.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Aksesoris berhasil dihapus',
      deletedaksesoris
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Aksesoris gagal dihapus. Id tidak ditemukan'
    })
  }
}

// BoxPasir

const getAllBoxPasir = async (request, h) => {
  try {
    const boxPasir = await BoxPasir.find()
    h.status(200).json({
      status: 'success',
      boxPasir
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getBoxPasirById = async (request, h) => {
  try {
    const boxPasir = await BoxPasir.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      boxPasir
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'BoxPasir tidak ditemukan'
    })
  }
}

const postBoxPasir = async (request, h) => {
  try {
    if (!request.file) {
      const e = new Error('image tidak ter-upload')
      e.errorStatus = 422
      throw e
    }

    const boxPasir = new BoxPasir({
      name: request.body.name,
      image: request.file.filename
    })

    const saveboxPasir = await boxPasir.save()
    h.status(201).json({
      status: 'success',
      message: 'BoxPasir berhasil ditambahkan',
      saveboxPasir
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'BoxPasir gagal ditambahkan'
    })
  }
}

const updateBoxPasir = async (request, h) => {
  try {
    const updatedboxPasir = await BoxPasir.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'BoxPasir berhasil diupdate',
      updatedboxPasir
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'BoxPasir gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deleteBoxPasir = async (request, h) => {
  try {
    const deletedboxPasir = await BoxPasir.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'BoxPasir berhasil dihapus',
      deletedboxPasir
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'BoxPasir gagal dihapus. Id tidak ditemukan'
    })
  }
}

// Kandang

const getAllKandang = async (request, h) => {
  try {
    const kandang = await Kandang.find()
    h.status(200).json({
      status: 'success',
      kandang
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getKandangById = async (request, h) => {
  try {
    const kandang = await Kandang.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      kandang
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Kandang tidak ditemukan'
    })
  }
}

const postKandang = async (request, h) => {
  try {
    if (!request.file) {
      const e = new Error('image tidak ter-upload')
      e.errorStatus = 422
      throw e
    }

    const kandang = new Kandang({
      name: request.body.name,
      image: request.file.filename
    })

    const savekandang = await kandang.save()
    h.status(201).json({
      status: 'success',
      message: 'Kandang berhasil ditambahkan',
      savekandang
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Kandang gagal ditambahkan'
    })
  }
}

const updateKandang = async (request, h) => {
  try {
    const updatedkandang = await Kandang.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Kandang berhasil diupdate',
      updatedkandang
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Kandang gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deleteKandang = async (request, h) => {
  try {
    const deletedkandang = await Kandang.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Kandang berhasil dihapus',
      deletedkandang
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Kandang gagal dihapus. Id tidak ditemukan'
    })
  }
}

// MakananAnjing

const getAllMakananAnjing = async (request, h) => {
  try {
    const makananAnjing = await MakananAnjing.find()
    h.status(200).json({
      status: 'success',
      makananAnjing
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getMakananAnjingById = async (request, h) => {
  try {
    const makananAnjing = await MakananAnjing.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      makananAnjing
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Makanan Anjing tidak ditemukan'
    })
  }
}

const postMakananAnjing = async (request, h) => {
  try {
    if (!request.file) {
      const e = new Error('image tidak ter-upload')
      e.errorStatus = 422
      throw e
    }

    const makananAnjing = new MakananAnjing({
      name: request.body.name,
      image: request.file.filename
    })

    const savemakananAnjing = await makananAnjing.save()
    h.status(201).json({
      status: 'success',
      message: 'Makanan Anjing berhasil ditambahkan',
      savemakananAnjing
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Makanan Anjing gagal ditambahkan'
    })
  }
}

const updateMakananAnjing = async (request, h) => {
  try {
    const updatedmakananAnjing = await MakananAnjing.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Makanan Anjing berhasil diupdate',
      updatedmakananAnjing
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Makanan Anjing gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deleteMakananAnjing = async (request, h) => {
  try {
    const deletedmakananAnjing = await MakananAnjing.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Makanan Anjing berhasil dihapus',
      deletedmakananAnjing
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Makanan Anjing gagal dihapus. Id tidak ditemukan'
    })
  }
}

// MakananKucing

const getAllMakananKucing = async (request, h) => {
  try {
    const makananKucing = await MakananKucing.find()
    h.status(200).json({
      status: 'success',
      makananKucing
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getMakananKucingById = async (request, h) => {
  try {
    const makananKucing = await MakananKucing.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      makananKucing
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Makanan Kucing tidak ditemukan'
    })
  }
}

const postMakananKucing = async (request, h) => {
  try {
    if (!request.file) {
      const e = new Error('image tidak ter-upload')
      e.errorStatus = 422
      throw e
    }

    const makananKucing = new MakananKucing({
      name: request.body.name,
      image: request.file.filename
    })

    const savemakananKucing = await makananKucing.save()
    h.status(201).json({
      status: 'success',
      message: 'Makanan Kucing berhasil ditambahkan',
      savemakananKucing
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Makanan Kucing gagal ditambahkan'
    })
  }
}

const updateMakananKucing = async (request, h) => {
  try {
    const updatedmakananKucing = await MakananKucing.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Makanan Kucing berhasil diupdate',
      updatedmakananKucing
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Makanan Kucing gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deleteMakananKucing = async (request, h) => {
  try {
    const deletedmakananKucing = await MakananKucing.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Makanan Kucing berhasil dihapus',
      deletedmakananKucing
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Makanan Kucing gagal dihapus. Id tidak ditemukan'
    })
  }
}

// Obat

const getAllObat = async (request, h) => {
  try {
    const obat = await Obat.find()
    h.status(200).json({
      status: 'success',
      obat
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getObatById = async (request, h) => {
  try {
    const obat = await Obat.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      obat
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Obat Kucing tidak ditemukan'
    })
  }
}

const postObat = async (request, h) => {
  try {
    if (!request.file) {
      const e = new Error('image tidak ter-upload')
      e.errorStatus = 422
      throw e
    }

    const obat = new Obat({
      name: request.body.name,
      image: request.file.filename
    })

    const saveobat = await obat.save()
    h.status(201).json({
      status: 'success',
      message: 'Obat berhasil ditambahkan',
      saveobat
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Obat gagal ditambahkan'
    })
  }
}

const updateObat = async (request, h) => {
  try {
    const updatedobat = await Obat.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Obat berhasil diupdate',
      updatedobat
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Obat gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deleteObat = async (request, h) => {
  try {
    const deletedobat = await Obat.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Obat berhasil dihapus',
      deletedobat
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Obat gagal dihapus. Id tidak ditemukan'
    })
  }
}

// Parfum

const getAllParfum = async (request, h) => {
  try {
    const parfum = await Parfum.find()
    h.status(200).json({
      status: 'success',
      parfum
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getParfumById = async (request, h) => {
  try {
    const parfum = await Parfum.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      parfum
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Parfum tidak ditemukan'
    })
  }
}

const postParfum = async (request, h) => {
  try {
    if (!request.file) {
      const e = new Error('image tidak ter-upload')
      e.errorStatus = 422
      throw e
    }

    const parfum = new Parfum({
      name: request.body.name,
      image: request.file.filename
    })

    const saveparfum = await parfum.save()
    h.status(201).json({
      status: 'success',
      message: 'Parfum berhasil ditambahkan',
      saveparfum
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Parfum gagal ditambahkan'
    })
  }
}

const updateParfum = async (request, h) => {
  try {
    const updatedparfum = await Parfum.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Parfum berhasil diupdate',
      updatedparfum
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Parfum gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deleteParfum = async (request, h) => {
  try {
    const deletedparfum = await Parfum.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Parfum berhasil dihapus',
      deletedparfum
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Parfum gagal dihapus. Id tidak ditemukan'
    })
  }
}

// Pasir

const getAllPasir = async (request, h) => {
  try {
    const pasir = await Pasir.find()
    h.status(200).json({
      status: 'success',
      pasir
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getPasirById = async (request, h) => {
  try {
    const pasir = await Pasir.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      pasir
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Pasir tidak ditemukan'
    })
  }
}

const postPasir = async (request, h) => {
  try {
    if (!request.file) {
      const e = new Error('image tidak ter-upload')
      e.errorStatus = 422
      throw e
    }

    const pasir = new Pasir({
      name: request.body.name,
      image: request.file.filename
    })

    const savepasir = await pasir.save()
    h.status(201).json({
      status: 'success',
      message: 'Pasir berhasil ditambahkan',
      savepasir
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Pasir gagal ditambahkan'
    })
  }
}

const updatePasir = async (request, h) => {
  try {
    const updatedpasir = await Pasir.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Pasir berhasil diupdate',
      updatedpasir
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Pasir gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deletePasir = async (request, h) => {
  try {
    const deletedpasir = await Pasir.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Pasir berhasil dihapus',
      deletedpasir
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Pasir gagal dihapus. Id tidak ditemukan'
    })
  }
}

// Shampo

const getAllShampo = async (request, h) => {
  try {
    const shampo = await Shampo.find()
    h.status(200).json({
      status: 'success',
      shampo
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getShampoById = async (request, h) => {
  try {
    const shampo = await Shampo.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      shampo
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Shampo tidak ditemukan'
    })
  }
}

const postShampo = async (request, h) => {
  try {
    if (!request.file) {
      const e = new Error('image tidak ter-upload')
      e.errorStatus = 422
      throw e
    }

    const shampo = new Shampo({
      name: request.body.name,
      image: request.file.filename
    })

    const saveshampo = await shampo.save()
    h.status(201).json({
      status: 'success',
      message: 'Shampo berhasil ditambahkan',
      saveshampo
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Shampo gagal ditambahkan'
    })
  }
}

const updateShampo = async (request, h) => {
  try {
    const updatedshampo = await Shampo.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Shampo berhasil diupdate',
      updatedshampo
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Shampo gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deleteShampo = async (request, h) => {
  try {
    const deletedshampo = await Shampo.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Shampo berhasil dihapus',
      deletedshampo
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Shampo gagal dihapus. Id tidak ditemukan'
    })
  }
}

// Susu

const getAllSusu = async (request, h) => {
  try {
    const susu = await Susu.find()
    h.status(200).json({
      status: 'success',
      susu
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getSusuById = async (request, h) => {
  try {
    const shampo = await Susu.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      shampo
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Susu tidak ditemukan'
    })
  }
}

const postSusu = async (request, h) => {
  try {
    if (!request.file) {
      const e = new Error('image tidak ter-upload')
      e.errorStatus = 422
      throw e
    }

    const susu = new Susu({
      name: request.body.name,
      image: request.file.filename
    })

    const savesusu = await susu.save()
    h.status(201).json({
      status: 'success',
      message: 'Susu berhasil ditambahkan',
      savesusu
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Susu gagal ditambahkan'
    })
  }
}

const updateSusu = async (request, h) => {
  try {
    const updatedsusu = await Susu.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Susu berhasil diupdate',
      updatedsusu
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Susu gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deleteSusu = async (request, h) => {
  try {
    const deletedsusu = await Susu.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Susu berhasil dihapus',
      deletedsusu
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Susu gagal dihapus. Id tidak ditemukan'
    })
  }
}

// TasHewan

const getAllTasHewan = async (request, h) => {
  try {
    const tasHewan = await TasHewan.find()
    h.status(200).json({
      status: 'success',
      tasHewan
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getTasHewanById = async (request, h) => {
  try {
    const tasHewan = await TasHewan.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      tasHewan
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Tas Hewan tidak ditemukan'
    })
  }
}

const postTasHewan = async (request, h) => {
  try {
    if (!request.file) {
      const e = new Error('image tidak ter-upload')
      e.errorStatus = 422
      throw e
    }

    const tasHewan = new TasHewan({
      name: request.body.name,
      image: request.file.filename
    })

    const savetasHewan = await tasHewan.save()
    h.status(201).json({
      status: 'success',
      message: 'Tas Hewan berhasil ditambahkan',
      savetasHewan
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Tas Hewan gagal ditambahkan'
    })
  }
}

const updateTasHewan = async (request, h) => {
  try {
    const updatedtasHewan = await TasHewan.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Tas Hewan berhasil diupdate',
      updatedtasHewan
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Tas Hewan gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deleteTasHewan = async (request, h) => {
  try {
    const deletedtasHewan = await TasHewan.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Tas Hewan berhasil dihapus',
      deletedtasHewan
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Tas Hewan gagal dihapus. Id tidak ditemukan'
    })
  }
}

// Vitamin

const getAllVitamin = async (request, h) => {
  try {
    const vitamin = await Vitamin.find()
    h.status(200).json({
      status: 'success',
      vitamin
    })
  } catch (e) {
    h.status(500).json({
      status: 'error',
      message: e.message
    })
  }
}

const getVitaminById = async (request, h) => {
  try {
    const vitamin = await Vitamin.findById(request.params.id)
    h.status(200).json({
      status: 'success',
      vitamin
    })
  } catch (e) {
    h.status(404).json({
      status: 'fail',
      message: 'Vitamin tidak ditemukan'
    })
  }
}

const postVitamin = async (request, h) => {
  try {
    if (!request.file) {
      const e = new Error('image tidak ter-upload')
      e.errorStatus = 422
      throw e
    }

    const vitamin = new Vitamin({
      name: request.body.name,
      image: request.file.filename
    })

    const savevitamin = await vitamin.save()
    h.status(201).json({
      status: 'success',
      message: 'Vitamin berhasil ditambahkan',
      savevitamin
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Vitamin gagal ditambahkan'
    })
  }
}

const updateVitamin = async (request, h) => {
  try {
    const updatedvitamin = await Vitamin.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json({
      status: 'success',
      message: 'Vitamin berhasil diupdate',
      updatedvitamin
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Vitamin gagal diupdate. Id tidak ditemukan'
    })
  }
}

const deleteVitamin = async (request, h) => {
  try {
    const deletedvitamin = await Vitamin.deleteOne({ _id: request.params.id })
    h.status(200).json({
      status: 'success',
      message: 'Vitamin berhasil dihapus',
      deletedvitamin
    })
  } catch (e) {
    h.status(400).json({
      status: 'fail',
      message: 'Vitamin gagal dihapus. Id tidak ditemukan'
    })
  }
}

module.exports = {
  getAllAksesoris,
  postAksesoris,
  updateAksesoris,
  getAksesorisById,
  deleteAksesoris,

  getAllBoxPasir,
  postBoxPasir,
  updateBoxPasir,
  getBoxPasirById,
  deleteBoxPasir,

  getAllKandang,
  postKandang,
  updateKandang,
  getKandangById,
  deleteKandang,

  getAllMakananAnjing,
  postMakananAnjing,
  updateMakananAnjing,
  getMakananAnjingById,
  deleteMakananAnjing,

  getAllMakananKucing,
  postMakananKucing,
  updateMakananKucing,
  getMakananKucingById,
  deleteMakananKucing,

  getAllObat,
  postObat,
  updateObat,
  getObatById,
  deleteObat,

  getAllParfum,
  postParfum,
  updateParfum,
  getParfumById,
  deleteParfum,

  getAllPasir,
  postPasir,
  updatePasir,
  getPasirById,
  deletePasir,

  getAllShampo,
  postShampo,
  updateShampo,
  getShampoById,
  deleteShampo,

  getAllSusu,
  postSusu,
  updateSusu,
  getSusuById,
  deleteSusu,

  getAllTasHewan,
  postTasHewan,
  updateTasHewan,
  getTasHewanById,
  deleteTasHewan,

  getAllVitamin,
  postVitamin,
  updateVitamin,
  getVitaminById,
  deleteVitamin
}
