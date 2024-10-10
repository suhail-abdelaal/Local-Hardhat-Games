// add the game address here and update the contract name if necessary
// game4 = 0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6
const gameAddr = "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:
  const tx1 = await game.giveMeAllowance(10000);
  await tx1.wait();

  const tx2 = await game.mint(10000);
  await tx2.wait();

  const tx3 = await game.win();
  const receipt = await tx3.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
