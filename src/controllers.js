const Forum = require('./models')

const getForum = async (request, h) => {
  try {
    const forums = await Forum.find()
    h.json(forums)
  } catch (e) {
    h.status(500).json({ message: e.message })
  }
}

const getForumById = async (request, h) => {
  try {
    const forum = await Forum.findById(request.params.id)
    h.json(forum)
  } catch (e) {
    h.status(404).json({ message: e.message })
  }
}

const postForum = async (request, h) => {
  const forum = new Forum(request.body)

  try {
    const saveforum = await forum.save()
    h.status(201).json(saveforum)
  } catch (e) {
    h.status(400).json({ message: e.message })
  }
}

const updateForum = async (request, h) => {
  try {
    const updatedforum = await Forum.updateOne({ _id: request.params.id }, { $set: request.body })
    h.status(200).json(updatedforum)
  } catch (e) {
    h.status(400).json({ message: e.message })
  }
}

const deleteForum = async (request, h) => {
  try {
    const deletedforum = await Forum.deleteOne({ _id: request.params.id })
    h.status(200).json(deletedforum)
  } catch (e) {
    h.status(400).json({ message: e.message })
  }
}

module.exports = {
  getForum,
  postForum,
  updateForum,
  getForumById,
  deleteForum
}
