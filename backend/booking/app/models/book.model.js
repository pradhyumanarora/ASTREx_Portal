module.exports = (mongoose) => {
  let schema = mongoose.Schema({

    username: {
      type: String,
      required: true,
      createIndexes: { unique: true },
    },
    name: {
      type: String,
      required: true,
    },

    date_requested: {
      type: Date,
      default: Date.now,
      required: true,
    },
    fromTime: {
      type: Date,
      required: true,
    },
    toTime: {
      type: Date,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
  });


  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Book = mongoose.model("booking", schema);
  return Book;
};
