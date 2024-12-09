import React from 'react';
import { StockData } from '../types/types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface PredictionResultProps {
  data: StockData | null;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ data }) => {
  if (!data) return null;

  const chartData = [
    { name: 'Current', price: data.price },
    { name: 'Predicted', price: data.prediction }
  ];

  const priceChange = ((data.prediction - data.price) / data.price) * 100;
  const isPriceUp = priceChange > 0;

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{data.symbol} Prediction</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-gray-600">Current Price</p>
          <p className="text-xl font-bold">${data.price.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-600">Predicted Price</p>
          <p className="text-xl font-bold">${data.prediction.toFixed(2)}</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-600">Price Change</p>
        <p className={`text-xl font-bold ${isPriceUp ? 'text-green-600' : 'text-red-600'}`}>
          {isPriceUp ? '↑' : '↓'} {Math.abs(priceChange).toFixed(2)}%
        </p>
      </div>

      <div className="mb-4">
        <p className="text-gray-600">Confidence Score</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${data.confidence}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-1">{data.confidence}% confident</p>
      </div>

      <div className="mt-6">
        <LineChart width={500} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#2563eb" />
        </LineChart>
      </div>
    </div>
  );
};

export default PredictionResult;