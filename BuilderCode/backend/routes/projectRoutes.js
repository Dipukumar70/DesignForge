const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createProject,
  getProjects,
  deleteProject,
  updateProject,
  getProjectById
} = require("../controllers/projectController");


// Get single project
router.get(
  "/:id",
  authMiddleware,
  getProjectById
);


// Create project
router.post(
  "/",
  authMiddleware,
  createProject
);


// Get all projects
router.get(
  "/",
  authMiddleware,
  getProjects
);


// Delete project
router.delete(
  "/:id",
  authMiddleware,
  deleteProject
);


// Update project
router.put(
  "/:id",
  authMiddleware,
  updateProject
);


module.exports = router;