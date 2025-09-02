import { fetchData } from "../utils/fetchWrapper.js";

export class TradeService {
  async getMarketData(symbol: string) {
    return await fetchData(`market/${symbol}`);
  }

  async executeTrade(symbol: string, amount: number) {
    // Здесь могла бы быть логика отправки POST-запроса
    return { status: "success", symbol, amount };
  }
}
