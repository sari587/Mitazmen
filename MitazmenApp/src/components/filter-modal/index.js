import React, { Component, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { Divider } from 'react-native-paper';
import RangeSlider from 'rn-range-slider'
import Modal from 'react-native-modal';
import colors from '../../services/contants/colors'
import styles from './styles';
import Thumb from '../slider-components/thumb';
import Rail from '../slider-components/rail';
import RailSelected from '../slider-components/rail-selected';
import Label from '../slider-components/label';
import Notch from '../slider-components/notch';
const FilterModal = ({ isVisible, onApply, onCancel }) => {
    const [low, setLow] = useState(0)
    const [high, setHigh] = useState(1000)
    const [selectedType, setSelectedType] = useState(0)
    const onBackPress = () => {
        navigation.goBack()
    }
    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback(value => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);
    const handleValueChange = useCallback((low, high) => {
        setLow(low);
        setHigh(high);
    }, []);
    return (
        <Modal isVisible={isVisible} style={styles.container} onBackButtonPress={onCancel} onBackdropPress={onCancel} >
            <View style={styles.row} >
                <Text style={styles.titeText} >
                    Filters
                </Text>
                <TouchableOpacity>
                    <Text style={styles.clearAllText} >
                        CLEAR ALL
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rowMain} >
                <View style={styles.leftMainView} >
                    <TouchableOpacity
                        style={selectedType == 0 ? styles.selectedContainer : styles.unselectedContainer}
                        onPress={() => setSelectedType(0)}
                    >
                        <Text style={styles.titeText} >
                            Price Range
                        </Text>
                    </TouchableOpacity>
                    <Divider />
                    <Divider />
                    <Divider />
                    <TouchableOpacity
                        style={selectedType == 1 ? styles.selectedContainer : styles.unselectedContainer}
                        onPress={() => setSelectedType(1)}
                    >
                        <Text style={styles.titeText} >
                            Rating
                        </Text>
                    </TouchableOpacity>
                    <Divider />
                    <Divider />
                    <Divider />
                    <TouchableOpacity
                        style={selectedType == 2 ? styles.selectedContainer : styles.unselectedContainer}
                        onPress={() => setSelectedType(2)}
                    >
                        <Text style={styles.titeText} >
                            Distance
                        </Text>
                    </TouchableOpacity>
                    <Divider />
                    <Divider />
                    <Divider />
                    <TouchableOpacity style={styles.closeButtonContainer} onPress={onCancel} >
                        <Text style={styles.titeText}>
                            Close
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightMainView}>
                    <Text style={styles.priceSelectHeader}>
                        Select Price Range
                    </Text>
                    <Text style={styles.priceSelectHeader}>
                        INR {low} - INR {high}
                    </Text>
                    <RangeSlider
                        style={styles.slider}
                        min={100}
                        max={1000}
                        step={1}
                        low={low}
                        high={high}
                        renderThumb={renderThumb}
                        renderRail={renderRail}
                        renderRailSelected={renderRailSelected}
                        renderLabel={null}
                        renderNotch={null}
                        onValueChanged={handleValueChange}
                    />
                    <TouchableOpacity style={styles.applyButtonContainer} onPress={onApply} >
                        <Text style={styles.clearAllText}>
                            Apply
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
export default FilterModal