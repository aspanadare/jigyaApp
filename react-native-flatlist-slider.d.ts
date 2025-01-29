
declare module 'react-native-flatlist-slider' {
    import { Component } from 'react';
    import { ViewStyle, ImageStyle, TextStyle } from 'react-native';

    interface FlatListSliderProps {
        data: Array<{
            image: string;
            desc?: string;
        }>;
        // Add any other props you might need here
        height?: number;
        width?: number;
        onItemChange?: (index: number) => void;
        style?: ViewStyle;
        imageContainerStyle?: ViewStyle;
        imageStyle?: ImageStyle;
        descStyle?: TextStyle;
    }

    export class FlatListSlider extends Component<FlatListSliderProps> {}
    export default FlatListSlider;
}
