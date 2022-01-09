const deploy = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const Token = await hre.ethers.getContractFactory("WavePortal");
  const portal = await Token.deploy({
    value: hre.ethers.utils.parseEther("0.001"),
});
  await portal.deployed();

  console.log("WavePortal address: ", portal.address);

  let contractBalance = await hre.ethers.provider.getBalance(
    portal.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );
};

const runDeploy = async () => {
  try {
    await deploy();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runDeploy();