const db = require("../models");
const Project = db.project;
const Student = db.student;
var html_to_pdf = require('html-pdf-node');



// Retrieve all Project from the database.
exports.findProject = (req, res) => {
    var condition = {};

    Project.find(condition).sort({ _id: -1 })
        .then(data => {
            res.send(data[0]);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving project."
            });
        });
};


// Retrieve all Student from the database.
exports.findStudent = (req, res) => {
    var condition = {};

    Student.find(condition).sort({ _id: -1 })
        .then(data => {
            res.send(data[0]);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving student."
            });
        });
};