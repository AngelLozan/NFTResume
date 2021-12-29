async function main() {
   // Grab the contract factory 
   const ResumeNFT = await ethers.getContractFactory("ResumeNFT");

   // Start deployment, returning a promise that resolves to a contract object
   const SolDev = await ResumeNFT.deploy(); // Instance of the contract 
   console.log("Contract deployed to address:", SolDev.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });