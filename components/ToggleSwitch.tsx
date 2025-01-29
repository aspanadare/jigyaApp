// ReusableSwitch.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToggleSwitch = ({ label, storageKey, initialValue }) => {
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
      <Text style={styles.label}>{label} is {isEnabled ? 'ON' : 'OFF'}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    marginRight: 10,
  },
});

export default ToggleSwitch;
