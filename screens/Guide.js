import { Box, Heading, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Gap, HeaderSetting } from '../components';

const Guide = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Box p={3}>
                <HeaderSetting
                    title={"Guide"}
                    onPress={() => navigation.navigate('Settings')}
                />
                <Gap height={24} />
                <Box mb={5}>
                    <Heading size={"sm"} mb={2}>Spesification Minimum Android</Heading>
                    <Text>- 4.0 and up</Text>
                    <Text>- 1 GB of RAM</Text>
                    <Text>- 4-inch display size</Text>
                </Box>
                <Box>
                    <Heading size={"sm"} mb={2}>Spesification Minimum IOS</Heading>
                    <Text>- Required iOS 7.0 or later</Text>
                    <Text>- Optimized for iPhone 5</Text>
                    <Text>- Compatible for iPhone and iPod Touch</Text>
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default Guide