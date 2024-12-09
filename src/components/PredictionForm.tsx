import React, { useState } from 'react';
import { PredictionFormData } from '../types/types';

interface PredictionFormProps {
  onSubmit: (data: PredictionFormData) => void;
  isLoading: boolean;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<PredictionFormData>({
    symbol: '',
    timeframe: '1d'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="symbol" className="block text-sm font-medium text-gray-700">
          Stock Symbol
        </label>
        <input
          type="text"
          id="symbol"
          value={formData.symbol}
          onChange={(e) => setFormData({ ...formData, symbol: e.target.value.toUpperCase() })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          placeholder="AAPL"
          required
        />
      </div>
      <div>
        <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700">
          Prediction Timeframe
        </label>
        <select
          id="timeframe"
          value={formData.timeframe}
          onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
        >
          <option value="1d">1 Day</option>
          <option value="1w">1 Week</option>
          <option value="1m">1 Month</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
      >
        {isLoading ? 'Predicting...' : 'Get Prediction'}
      </button>
    </form>
  );
};

export default PredictionForm;

