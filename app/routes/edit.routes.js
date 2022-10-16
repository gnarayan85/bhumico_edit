module.exports = app => {
  const edits = require("../controllers/edit.controller.js");

  var router = require("express").Router();


  // Retrieve all projects
    router.get("/student", edits.findStudent);

    // Retrieve all projects
    router.get("/project", edits.findProject);

  app.use("/api/edit", router);
};
