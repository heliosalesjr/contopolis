import React from 'react';
import Card from './Card';

const SelectionGrid = ({ 
  title, 
  subtitle, 
  options, 
  selectedId, 
  onSelect,
  columns = 2 
}) => {
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 font-serif">
          {title}
        </h2>
        {subtitle && (
          <p className="text-purple-200 text-lg">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Grid de opções */}
      <div className={`grid ${gridClasses[columns]} gap-4`}>
        {options.map((option) => (
          <Card
            key={option.id}
            variant="gradient"
            interactive
            selected={selectedId === option.id}
            onClick={() => onSelect(option.id)}
            className="p-6"
          >
            <div className="text-center">
              {/* Emoji/Icon */}
              <div className="text-4xl mb-3">
                {option.emoji}
              </div>
              
              {/* Nome */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {option.name}
              </h3>
              
              {/* Descrição */}
              <p className="text-purple-200 text-sm">
                {option.description}
              </p>
              
              {/* Indicador de seleção */}
              {selectedId === option.id && (
                <div className="mt-3 inline-flex items-center text-white text-sm font-medium">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                  Selecionado
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SelectionGrid;