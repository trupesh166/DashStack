const express = require('express')
const cors = require("cors")
const dotenv = require('dotenv')
const connection = require('./Config/db')
const societyRouter = require('./Society/SocietyRouter')
const societyHandlerRouter = require('./SocietyHandler/SocietyHandlerRouter')
const wingRouter = require('./Wing/WingRouter')
const unitRouter = require('./Unit/UnitRouter')
const memberRouter = require('./Society Member/MemberRouter')
const importantRouter = require('./importantnumber/ImportantRouter')
const maintenanceRouter = require('./Maintenance/MaintenanceRouter')
const eventRouter = require('./Events/EventRouter')
const securityRouter = require('./Security/SecurityRouter')
const securityProtocolRouter = require('./SecurityProtocol/SecurityProtocolRouter')
const eventDetailsRouter = require('./EventDetails/EventDetalisRouter')
const maintenanceDetailsRouter = require('./MaintenanceDetails/MaintenanceDetailsRouter')
const complaintRouter = require('./Complaint/ComplaintRouter')
const expanseRouter = require('./Expanse/ExpanseRouter')
const expanseNoteRouter = require('./ExpanseNote/ExpanseNoteRouter')
const announcementRouter = require('./Announcement/AnnouncementRouter')
const visitorRouter = require('./Visitor/VisitorRouter')
const userRouter = require('./Users/UserRouter')
const facilityRouter = require('./Facility/FacilityRouter')
const { cloudinary } = require('./cloudinaryConfig')
const { httpSuccess, extractPublicId } = require('./constents')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

connection()

app.use("/society", societyRouter)
app.use("/society-handler", societyHandlerRouter)
app.use("/wing", wingRouter)
app.use("/unit", unitRouter)
app.use("/member", memberRouter)
app.use('/workernumber', importantRouter)
app.use('/maintain', maintenanceRouter)
app.use('/maintain-detail', maintenanceDetailsRouter)
app.use('/event', eventRouter)
app.use('/event-details', eventDetailsRouter)
app.use('/security', securityRouter)
app.use('/securityprotocol', securityProtocolRouter)
app.use('/user', userRouter)
app.use('/complain', complaintRouter)
app.use('/expanse', expanseRouter)
app.use('/expanseNote', expanseNoteRouter)
app.use('/announcement', announcementRouter)
app.use('/visitor', visitorRouter)
app.use('/facility', facilityRouter)


app.post('/image-details', async (req, res) => {
  try {
    const imageDetailsPromises = Object.entries(req.body).map(async ([key, url]) => {
      const publicId = extractPublicId(url);
      const result = await cloudinary.api.resource(publicId);
      return { key, details: result };
    });

    const results = await Promise.all(imageDetailsPromises);

    const formattedResults = results.reduce((acc, { key, details }) => {
      acc[key] = details;
      return acc;
    }, {});

    return res.status(200).send({ message: httpSuccess, data: formattedResults });
  } catch (error) {
    console.error('Error fetching image details:', error);
    return res.status(500).send({ message: 'Error fetching image details', error });
  }
});


app.get("/", (req, res) => {
  return res.status(200).send({ message: "Success" })
})

app.listen(process.env.PORT, () => {
  console.log("Server Started")
})
