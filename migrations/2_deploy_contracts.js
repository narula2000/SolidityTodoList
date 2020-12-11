var TodoList = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
    deployer.deployer(TodoList);
}
