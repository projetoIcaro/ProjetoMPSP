const usersMock = require('../mocks/users');

exports.index = function(req, res) {
  // Task.find({}, function(err, task) {
  //   if (err)
  //     res.send(err);
  //   res.json(task);
  // });
  res.json({modelValues: usersMock.users});
};
