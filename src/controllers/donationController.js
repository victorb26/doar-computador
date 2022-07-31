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
//verificações dos itens obrgatórios
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
      check("phone").isLength({ min: 10, max: 11 }), //10 para número fixo e 11 para celulares incluíndo DDD
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
      const donateTypes = [
        "notebook",
        "desktop",
        "netbook",
        "screen",
        "printer",
        "scanner",
      ];
//verifica se houve algum erro nas informações inseridas 
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
//validação de email. 
//OBS: a validação foi feita aqui devido ao 'email' não ser um campo de preenchimento obrigatório, mas caso seja inserido incorretamente, 
//o usuário precisa corrigi-lo. Isso se deu porque enquanto a validação deste campo estava acima, chegavam
// mensagens para o usuário pedindo para corrigir um campo que ele enventualmente não tinha preenchido. Desta forma, isso não acontece mais!
      if(body.email){
        function checkEmail (email){
          const checkEmail = /\S+@\S+\.\S+/;
            return checkEmail.test(email);
        };
         if (!checkEmail(body.email)){
          res.status(400).json({
            error:true,
            errorMessage:'Insira um endereço de email válido!'})

        }

      }
//verifica se a quantidade de equipamentos está de acordo com a quantidade de informações enviadas
      if (body.devices.length !== body.deviceCount) {
        res.status(400).json({
          error: true,
          errorMessage: 'A quantidade de equipamentos (${body.deviceCount}) não está de acordo com as informações de equipamentos enviados (${body.devices.length})',
        });
        return;
      }
// estrutura de repetição que percorre o array 'donateTypes' e verifica se os 'types' inseridos estão de acordo com o proposto    
      for (let i = 0; i < body.devices.length; i++) {
        const checkType = donateTypes.find((current) => {
          return current == body.devices[i].type;
        });
        if (!checkType) {
          res.status(400).json({
            error: true,
            errorMessage: 'O tipo de equipamento (${body.devices[i].type}) é invalido ou foi inserido incorretamente',
          });
          return;
        }
      }
//se tudo está correto, retorna esta mensagem de sucess      
      res.status(200).json({ sucess: true });
    }
  );
};

export default donationController;
