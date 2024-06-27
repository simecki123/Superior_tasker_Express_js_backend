const Project = require('../models/project');

exports.createProject = async (req, res) => {
    const { userId, title, description, date, completion } = req.body;
    try {
        const newProject = new Project({
            userId,
            title,
            description,
            date,
            completion
        });
        const project = await newProject.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.params.id });
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json({ message: 'Project removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findOne({ _id: req.params.id });
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findProjectsByUserId = async (req, res) => {
    try {
        const projects = await Project.find({ userId: req.params.userId });
        if (!projects) {
            return res.status(404).json({ message: 'Projects not found' });
        }
        res.json({ projectList: projects });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



exports.updateProject = async (req, res) => {
    const { title, description, date, completion } = req.body;
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            { title, description, date, completion },
            { new: true }
        );
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};