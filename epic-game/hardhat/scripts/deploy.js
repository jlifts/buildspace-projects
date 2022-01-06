const deploy = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Doge", "Eivor", "Ezio"], // Names
        ["https://i.pinimg.com/originals/3f/a3/a1/3fa3a17031811cf7d77813bcc373bee1.png", // Images
    "https://image.api.playstation.com/vulcan/img/rnd/202011/0302/jxiroQyGPF18kayHwXhsGEnJ.png", 
    "https://e7.pngegg.com/pngimages/225/751/png-clipart-assassins-creed-ii-assassins-creed-brotherhood-assassins-creed-revelations-assassins-creed-altaxefrs-chronicles-ezio-auditore-file-video-game-fictional-character-thumbnail.png"],
        [100, 250, 200],  // HP values
        [100, 60, 75],  // Attack damage values
        "Elon Tusk", // Boss name
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74cfb16a-ae66-477e-856a-cb3f9340d6ba/ddl3dkt-4c6cd21b-b234-450a-a4af-eb22702fb21d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc0Y2ZiMTZhLWFlNjYtNDc3ZS04NTZhLWNiM2Y5MzQwZDZiYVwvZGRsM2RrdC00YzZjZDIxYi1iMjM0LTQ1MGEtYTRhZi1lYjIyNzAyZmIyMWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xXjoWey1-xRyWGrvScg6JUnIUDGqokIklBdsJfJ2KfA", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    
    // let txn;
    // txn = await gameContract.mintCharacterNFT(0);
    // await txn.wait();
    // console.log("Minted NFT #1");

    // txn = await gameContract.mintCharacterNFT(1);
    // await txn.wait();
    // console.log("Minted NFT #2");

    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();
    // console.log("Minted NFT #3");

    // txn = await gameContract.attackBoss();
    // await txn.wait();

    // txn = await gameContract.attackBoss();
    // await txn.wait();

    console.log("Done deploying and minting!");

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