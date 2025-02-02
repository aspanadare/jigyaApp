import React from 'react';
import { useSharedValue } from 'react-native-reanimated';
import Card from './Card';

interface CardContainerProps {
  data: { image: any }[]; // Define the type for the 'data' prop
  maxVisibleItems: number; // Define the type for 'maxVisibleItems'
}

const CardContainer: React.FC<CardContainerProps> = ({ data, maxVisibleItems }) => {
  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(0);

  return (
    <>
      {data.map((item, index) => (
        <Card
          maxVisibleItems={maxVisibleItems}
          item={item}
          index={index}
          dataLength={data.length}
          animatedValue={animatedValue}
          currentIndex={currentIndex}
          prevIndex={prevIndex}
          key={index}
        />
      ))}
    </>
  );
};

export default CardContainer;