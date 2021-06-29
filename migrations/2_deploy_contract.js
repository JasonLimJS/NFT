var uniqueAsset= artifacts.require("UniqueAsset");

module.exports = function(deployer){
  deployer.deploy(uniqueAsset);
}
