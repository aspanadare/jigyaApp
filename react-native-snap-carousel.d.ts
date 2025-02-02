declare module 'react-native-snap-carousel' {
    import { Component } from 'react';
    import { ViewStyle } from 'react-native';
  
    export interface CarouselProps {
      data: any[];
      renderItem: (item: { item: any; index: number }) => JSX.Element;
      sliderWidth: number;
      itemWidth: number;
      layout?: string;
      layoutCardOffset?: number;
      loop?: boolean;
      onSnapToItem?: (index: number) => void;
      // Add other props as needed
    }
  
    export default class Carousel extends Component<CarouselProps> {}
  }
  