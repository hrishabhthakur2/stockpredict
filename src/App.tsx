import React, { useState } from 'react';
import PredictionForm from './components/PredictionForm';
import PredictionResult from './components/PredictionResult';
import { StockData, PredictionFormData } from './types/types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [predictionData, setPredictionData] = useState<StockData | null>(null);

  const handlePrediction = async (formData: PredictionFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock data - replace with actual API call
      setPredictionData({
        symbol: formData.symbol,
        price: 150.25,
        prediction: 158.75,
        confidence: 85,
        date: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error fetching prediction:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Stock Market Predictor
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <PredictionForm onSubmit={handlePrediction} isLoading={isLoading} />
        </div>
        <PredictionResult data={predictionData} />
      </div>
    </div>
  );
};

export default App;