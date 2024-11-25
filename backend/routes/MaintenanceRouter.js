const { Router } = require('express')
const asyncHandler = require('express-async-handler');
const maintenanceController = require('../controllers/MaintenanceController.js')

const maintenanceRouter = Router()

maintenanceRouter.post("/create", asyncHandler(maintenanceController.createMaintenance))

module.exports = maintenanceRouter