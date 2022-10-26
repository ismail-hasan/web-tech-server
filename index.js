const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");
app.use(cors());

const course = require("./AllData/Course.json");
const courseList = require("./AllData/CourseList.json");

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/course", (req, res) => {
  res.send(course);
});
app.get("/courseList", (req, res) => {
  res.send(courseList);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const courseID = course.find((newCourse) => newCourse.id === id) || {};
  res.send(courseID);
});

app.listen(port, () => {
  console.log(`web couses server is running ${port}`);
});
