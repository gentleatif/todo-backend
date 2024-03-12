const Task = require('../model/Task');

const handleAddTask = async (req, res) => {
  try {
    await Task.create(req.body);

    return res.send('Task Added');
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
const handleGetAllTask = async (req, res) => {
  try {
    const foundAllTask = await Task.find({}).sort({ createdAt: -1 });
    return res.send(foundAllTask);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const handleGetTaskById = async (req, res) => {
  try {
    const { id } = req.query;

    const foundTask = await Task.findOne({ _id: id });

    return res.send(foundTask);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const handleUpdateTaskById = async (req, res) => {
  try {
    const { title, status, id } = req.body;

    await Task.findOneAndUpdate(
      { _id: id },
      { title, status },
      {
        new: true,
      }
    );
    return res.send('Task Updated');
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const handleDeleteTaskById = async (req, res) => {
  try {
    const { id } = req.query;

    await Task.deleteOne({ _id: id });
    return res.send('Task Deleted');
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
module.exports = {
  handleAddTask,
  handleGetAllTask,
  handleGetTaskById,
  handleUpdateTaskById,
  handleDeleteTaskById,
};
