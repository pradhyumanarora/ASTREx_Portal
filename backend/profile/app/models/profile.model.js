module.exports = (mongoose) => {
  let schema = mongoose.Schema({
    username: {
      type: String,
      required: true,
      createIndexes: { unique: true },
      unique: true,
    },
    imgurl: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    registration_no: {
      type: String,
      required: true,
      createIndexes: { unique: true },
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact : {
        type: String,
        required: true,
        unique: true,
    },
    gender : {
        type: String,
        required: true,
    },

    hosteller: {
      type: Boolean,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("profile", schema);
  return User;
};
