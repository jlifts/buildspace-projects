const deployScript = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);
  console.log(`https://testnets.opensea.io/assets/${nftContract.address}/0`);


  // Call the function.
  // let txn = await nftContract.makeAnEpicNFT()
  // // Wait for it to be mined.
  // await txn.wait()

  // // Mint another NFT for fun.
  // txn = await nftContract.makeAnEpicNFT()
  // // Wait for it to be mined.
  // await txn.wait()

};

const deploy = async () => {
  try {
    await deployScript();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

deploy();
