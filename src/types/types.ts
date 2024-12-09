export interface StockData {
    symbol: string;
    price: number;
    prediction: number;
    confidence: number;
    date: string;
  }
  
  export interface PredictionFormData {
    symbol: string;
    timeframe: string;
  }