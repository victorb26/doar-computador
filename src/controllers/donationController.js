import Donate from "../models/donationModel.js";
import express from "express";
import app from "../app.js";
import pkg from "express-validator";
const { check, validationResult } = pkg;

const donationController = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ alive: true });
  });

  app.post(
    "/donation",
    [
      check("name").isString().isLength({ min: 2 }),
      check("name").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
      check("email").isEmail(),
      check("phone").isLength({ min: 10, max: 11 }), //10 para número fixo e 11 para celulares
      check("phone").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
      check("zip").isLength(8),
      check("zip").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
      check("state").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
      check("streetAddress").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
      check("number").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
      check("neighborhood").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
      check("deviceCount").isNumeric(),
      check("deviceCount").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
      check("devices").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
    ],
    (req, res) => {
      const body = req.body;
      const errors = validationResult(req);
      const donateTypes = ["notebook","desktop","netbook","screen","printer","scanner",];

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      if (body.devices.length !== body.deviceCount) {
        res.status(400).json({
          error: true,
          errorMessage: `A quantidade de equipamentos (${body.deviceCount}) não está de acordo com as informações de equipamentos enviados (${body.devices.length})`,
        });
        return;
      }
      for (let j = 0; j < body.devices.length; j++) {
        const verifyType = donateTypes.find((current) => {
          return current == body.devices[j].type;
        });
        if (!verifyType) {
          res.status(400).json({
            error: true,
            errorMessage: `O tipo de equipamento (${body.devices[j].type}) é invalido`,
          });
          return;
        }
      }
      res.status(200).json({ sucess: true });
    }
  );
};

export default donationController;
