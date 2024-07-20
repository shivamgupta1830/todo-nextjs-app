const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      requires: true,
    },
    description: {
      type: String,
      requires: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  //   { timestamps: true }
  { timeStamp: true }
);

const TodoModel = mongoose.models.todo || mongoose.model("todo", Schema);
export default TodoModel;
