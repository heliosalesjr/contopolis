import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Container } from '../layout/Layout';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

export const SelectionScreen = ({ 
  title, 
  subtitle, 
  options, 
  selectedKey, 
  onSelect, 
  nextStep,
  canContinue = true 
}) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    if (nextStep && canContinue) {
      navigate(nextStep);
    }
  };

  return (
    <Layout>
      <Container>
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 font-serif">{title}</h2>
          <p className="text-purple-200 text-lg">{subtitle}</p>
        </div>
        
        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {options.map((option) => (
            <Card
              key={option.id}
              onClick={() => onSelect(option.id)}
              selected={selectedKey === option.id}
              hoverable
            >
              <CardContent>
                <div className="text-4xl mb-3">{option.emoji}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{option.name}</h3>
                <p className="text-purple-200 text-sm">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Continue Button */}
        <div className="text-center">
          <Button
            onClick={handleContinue}
            disabled={!selectedKey || !canContinue}
            variant="secondary"
          >
            Continuar ➜
          </Button>
        </div>
      </Container>
    </Layout>
  );
};