import React from 'react';
import { Animated, View, TouchableOpacity, Text } from 'react-native'
import HeaderBackButton from '../header-back-button';
import styles from './styles';
const MyAppointmentsTopTab = ({ state, descriptors, navigation, position }) => {
    return (
        <View style={styles.container} >
            <HeaderBackButton navigation={navigation} title="My Appointments" />
            <View style={styles.row} >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.title
                    const isFocused = state.index === index;
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });
                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const inputRange = state.routes.map((_, i) => i);
                    const opacity = position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                    });

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={isFocused ? styles.focusedCell : styles.unfocusedCell}
                        >
                            <Animated.Text style={isFocused ? styles.focusedText : styles.unfocusedText}>
                                {label}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
export default MyAppointmentsTopTab