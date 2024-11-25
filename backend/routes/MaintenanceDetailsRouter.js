const { Router } = require('express')
const asyncHandler = require('express-async-handler');
const maintenanceDetailsController = require('../controllers/MaintenanceDetailsController');

const maintenanceDetailsRouter = Router()

maintenanceDetailsRouter.get("/member/:societyId", asyncHandler(maintenanceDetailsController.getUserMaintenanceDetails))

maintenanceDetailsRouter.put("/member/update", asyncHandler(maintenanceDetailsController.updateMaintenanceDetails))

module.exports = maintenanceDetailsRouter