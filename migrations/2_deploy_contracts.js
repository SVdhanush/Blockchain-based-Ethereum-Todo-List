// const Migrations = artifacts.require("Migrations");

// module.exports = function(deployer) {
//   deployer.deploy(Migrations);
// };

var TodoList = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};
