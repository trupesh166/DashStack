const { httpSuccess, httpErrors } = require("../constents")
const eventDetilsModel = require("../models/EventDetailsModel")

class EventDetilsController {
  async listEventDetails(req, res) {
    try {
      const { societyId } = req.params
      const result = await eventDetilsModel.model.find({ societyId: societyId })
      if (!result) throw httpErrors[500]
      return res.status(200).send({ message: httpSuccess, data: result })
    } catch (error) {
      console.log(error)
      throw httpErrors[500]
    }
  }

  async listDetailsByEvent(req, res) {
    try {
      const { eventId } = req.params
      const result = await eventDetilsModel.model.find({ eventId: eventId })
      if (!result) throw httpErrors[500]
      return res.status(200).send({ message: httpSuccess, data: result })
    } catch (error) {
      console.log(error)
      throw httpErrors[500]
    }
  }

  async completedEvent(req, res) {
    try {
      const { memberId } = req.params
      console.log("memberId", memberId)
      const result = await eventDetilsModel.model.find({ memberId: memberId, paymentStatus: 'Done' }).populate([{ path: "memberId", populate: { path: "userId" } }, { path: "eventId" }])
      if (!result) throw httpErrors[500]
      return res.status(200).send({ message: httpSuccess, data: result })
    } catch (error) {
      console.log(error)
      throw httpErrors[500]
    }
  }

  async getEventDetailsById(req, res) {
    try {
      const { id } = req.params
      console.log(id, "id")
      // const { societyId, memberId, eventId } = req.body
      const result = await eventDetilsModel.model.findOne({ _id: id }).populate([{ path: "memberId", populate: { path: "userId" } }, { path: "eventId" }])
      // const result = await eventDetilsModel.model.find({ societyId: societyId, eventId: eventId, memberId: memberId })
      if (!result) throw httpErrors[500]
      return res.status(200).send({ message: httpSuccess, data: result })
    } catch (error) {
      console.log(error)
      throw httpErrors[500]
    }
  }

  async updateEventDetails(req, res) {
    try {
      const { eventId, memberId, amount, paymentMethod, paymentDate, societyId } = req.body
      if (!eventId || !memberId || !amount || !paymentMethod || !paymentDate || !societyId) throw httpErrors[400]
      const result = await eventDetilsModel.model.updateOne({
        societyId: societyId,
        eventId: eventId,
        memberId: memberId
      }, {
        paymentMethod: paymentMethod,
        paymentStatus: "Done",
        paymentDate: paymentDate,
        amount: amount,
      })
      if (!result) throw httpErrors[500]
      return res.status(200).send({ message: httpSuccess })
    } catch (error) {
      console.log(error)
      throw httpErrors[500]
    }
  }
}


const eventDetilsController = new EventDetilsController()

module.exports = eventDetilsController