// run.js
const main = async () => {

    const [owner, randomPerson] = await hre.ethers.getSigners();
    // WavePortal.solをコンパイル
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    // HardhatがローカルのEthereumネットワークを、コントラクトのためだけに作成。
    // スクリプトの実行が完了した後、ローカルのネットワークを破棄する。
    const waveContract = await waveContractFactory.deploy();
    // コントラクトをローカルのブロックチェーンにデプロイ
    const wavePortal = await waveContract.deployed();
  
    console.log("Contract deployed to:", wavePortal.address);
    console.log("Contract deployed by:", owner.address);
  
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
  
    let waveTxn = await waveContract.wave();
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();

    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();
};
  
const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
};
  
runMain();