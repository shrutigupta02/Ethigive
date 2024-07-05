const hre = require("hardhat");

async function getBalances(address) {
    const balanceBigInt = await hre.ethers.provider.getBalance(address);
    return hre.ethers.utils.formatEther(balanceBigInt);
}

async function consoleBalances(addresses) {
    let counter = 0;
    for (let address of addresses) {
        console.log(`Address ${counter++} Balance: `, await getBalances(address));
        counter++;
    }
}

async function getDonations(donations) {
    for (let donation of donations) {
        const timestamp = donation.timestamp;
        const name = donation.donor;
        const from = donation.from;
        const message = donation.message;
        console.log(`At ${timestamp}, name ${name}, address ${from}, message ${message}`);
    }
}

async function main() {
    const [owner, from1, from2, from3] = await hre.ethers.getSigners();
    const EthiGive = await hre.ethers.getContractFactory("EthiGive");
    const contract = await EthiGive.deploy(); // instance of contract

    await contract.deployed(); // wait for deployment
    console.log("Address of contract:", contract.address);

    const addresses = [
        owner.address,
        from1.address,
        from2.address,
        from3.address,
    ];
    console.log("Before sending donation");
    await consoleBalances(addresses);

    const amount = { value: hre.ethers.utils.parseEther("1") };

    await contract.connect(from1).giveDonation("from1", "Very nice chai", amount);
    await contract.connect(from2).giveDonation("from2", "Very nice course", amount);
    await contract.connect(from3).giveDonation("from3", "Very nice information", amount);

    console.log("After giving donation");
    await consoleBalances(addresses);

    // Optionally, retrieve and display donations
    const donations = await contract.getDonations();
    await getDonations(donations);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
