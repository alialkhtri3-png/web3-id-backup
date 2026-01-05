export class MiniAppWeb3Provider {
  provider;

  constructor() {
    if (typeof window !== "undefined" && window.ethereum) {
      this.provider = window.ethereum;
    } else {
      throw new Error("لم يتم العثور على محفظة Web3");
    }
  }

  async connect() {
    const accounts = await this.provider.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  }
}import { MiniAppWeb3Provider } from "../src/provider.ts";

(async () => {
  try {
    const web3 = new MiniAppWeb3Provider();
    const address = await web3.connect();
    console.log("Connected:", address);
  } catch (e) {
    console.error(e.message);
  }
})();

