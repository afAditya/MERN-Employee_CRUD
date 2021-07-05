const express = require("express");
const Employee = require("../models/employee");
const router = new express.Router();

router.post("/employee", async (req, res) => {
  const employee = new Employee(req.body);

  try {
    await employee.save();
    res.status(201).send(employee);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/employee", async (req, res) => {
  try {
    const employees = await Employee.find({}).limit(10);
    res.send(employees);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/employee/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      res.status(404).send();
    }

    res.send(employee);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/employee/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!employee) {
      res.status(404).send();
    }

    res.send(employee);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/employee/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      res.status(404).send();
    }

    res.send(employee);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
