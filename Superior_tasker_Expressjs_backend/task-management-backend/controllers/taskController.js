const Task = require('../models/task');
const Project = require('../models/project');

exports.createTask = async (req, res) => {
    const { projectId, userId, name, done } = req.body;
    try {
        
        const newTask = new Task({
            projectId,
            userId,
            name,
            done
        });
        const task = await newTask.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findByProjectId = async (req, res) => {
    try {
        const tasks = await Task.find({ projectId: req.params.projectId });
        res.json({ taskList: tasks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findByUserId = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.params.userId });
        res.json({ taskList: tasks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTask = async (req, res) => {
    const { done } = req.body;

    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id},
            { done },
            { new: true }
        );
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};