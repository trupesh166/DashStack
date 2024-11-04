const { default: mongoose } = require("mongoose");

class ExpanseNote {
  constructor() {
    this.schema = new mongoose.Schema({
      societyId: { type: mongoose.Types.ObjectId, required: true, ref: "tbl_societies" },
      title: { type: String, required: true },
      description: { type: String, required: true },
      date: { type: Date, required: true },
    }, { timestamps: true })
    this.model = mongoose.model("tbl_expanse-notes", this.schema)
  }
}

const expanseNoteModel = new ExpanseNote()
module.exports = expanseNoteModel