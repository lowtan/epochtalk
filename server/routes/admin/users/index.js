var path = require('path');
var users = require(path.normalize(__dirname + '/config'));

module.exports = [
  { method: 'GET', path: '/users', config: users.page },
  { method: 'GET', path: '/users/search', config: users.searchUsernames },
  { method: 'GET', path: '/users/count', config: users.count },
  { method: 'PUT', path: '/users/roles/add', config: users.addRoles },
  { method: 'PUT', path: '/users/roles/remove', config: users.removeRoles }
];
