// run.js
const main = async () => {
    // WavePortal.solをコンパイル
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    // HardhatがローカルのEthereumネットワークを、コントラクトのためだけに作成。
    // スクリプトの実行が完了した後、ローカルのネットワークを破棄する。
    const waveContract = await waveContractFactory.deploy();
    // コントラクトをローカルのブロックチェーンにデプロイ
    const wavePortal = await waveContract.deployed();
  
    console.log("WavePortal address: ", wavePortal.address);
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