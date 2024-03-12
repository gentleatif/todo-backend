const Joi = require('joi');
const {
  handleAddTask,
  handleGetAllTask,
  handleGetTaskById,
  handleDeleteTaskById,
  handleUpdateTaskById,
} = require('../business-rule/Task');

const addTask = async (req, res) => {
  try {
    const taskValidate = Joi.object({
      title: Joi.string().required(),
      status: Joi.boolean(),
    });

    const { error, value } = taskValidate.validate({ ...req.body });

    if (error) {
      return res.send('Validation Error');
    }

    return await handleAddTask(req, res);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
const getTaskById = async (req, res) => {
  try {
    const taskValidate = Joi.object({
      id: Joi.string().required(),
    });

    const { error, value } = taskValidate.validate({ ...req.query });

    if (error) {
      return res.send('Validation Error');
    }

    return await handleGetTaskById(req, res);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
const getAllTask = async (req, res) => {
  try {
    return await handleGetAllTask(req, res);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const updateTask = async (req, res) => {
  try {
    req.body.id = req.query.id;
    const taskValidate = Joi.object({
      id: Joi.string().required(),
      title: Joi.string().required(),
      status: Joi.boolean(),
    });

    const { error, value } = taskValidate.validate({ ...req.body });

    if (error) {
      return res.send('Validation Error');
    }
    return await handleUpdateTaskById(req, res);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskValidate = Joi.object({
      id: Joi.string().required(),
    });

    const { error, value } = taskValidate.validate({ ...req.query });

    if (error) {
      return res.send('Validation Error');
    }

    return await handleDeleteTaskById(req, res);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

module.exports = {
  addTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
};
