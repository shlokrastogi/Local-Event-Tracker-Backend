const { default: mongoose } = require("mongoose");

const eventCategoriesSchema = mongoose.Schema(
  {
    Categories: {
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    description: {
      type: String,
      default: "No description provided",
      trim: true,
      maxlength: 500,
    },
    photoUrl: {
      type: String,
      default: "https://img.icons8.com/fluency/1200/circled-category.png",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid photo URL format");
        }
      },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("EventCategories", eventCategoriesSchema);
