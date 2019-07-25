const users = require('../mocks/users');

exports.get = (req, res, next) => {
  res.status(200).send({modelValues: users});
};
// exports.put = (req, res, next) => {
//   let id = req.params.id;
//   res.status(201).send(`Requisição recebida com sucesso! ${id}`);
// };
// exports.delete = (req, res, next) => {
//   let id = req.params.id;
//   res.status(200).send(`Requisição recebida com sucesso! ${id}`);
// };