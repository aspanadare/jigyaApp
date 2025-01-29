// ToggleSwitch.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the props interface
interface ToggleSwitchProps {
  label: string;
  storageKey: string;
  initialValue?: boolean; // Optional initial value
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, storageKey, initialValue = false }) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);

  // Load state from AsyncStorage on mount
  useEffect(() => {
    const loadSwitchState = async () => {
      const storedValue = await AsyncStorage.getItem(storageKey);
      if (storedValue !== null) {
        setIsEnabled(JSON.parse(storedValue));
      }
    };

    loadSwitchState();
  }, [storageKey]);

  // Toggle the switch and save the state
  const toggleSwitch = async () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    await AsyncStorage.setItem(storageKey, JSON.stringify(newValue));
  };

  return (
    <View style={styles.switchContainer}>
       
      <Switch
        trackColor={{ false: '#767577', true: '##000' }}
        
        thumbColor={isEnabled ? '##2DCB42' : '##13A226'}
        ios_backgroundColor="#767577"
        onValueChange={toggleSwitch}
        style={{ transform: [{ scaleX: .7}, { scaleY: .7}] }} // 
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
     
  },
  label: {
    fontSize: 20,
    marginRight: 10,
  },
});

export default ToggleSwitch;
