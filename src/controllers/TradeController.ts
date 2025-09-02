import { TradeService } from "../services/TradeService.js";
import { log } from "../utils/logger.js";

export class TradeController {
  private service = new TradeService();

  async run() {
    log("Запрос рыночных данных...");
    const data = await this.service.getMarketData("BTC");
    log(`Данные: ${JSON.stringify(data)}`);

    log("Исполнение сделки...");
    const result = await this.service.executeTrade("BTC", 0.01);
    log(`Результат: ${JSON.stringify(result)}`);
  }
}
