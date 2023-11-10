import { Box, HStack, Heading, Input, Text, TextArea } from 'native-base';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Gap, HeaderSetting } from '../components';
import Ionicons from "@expo/vector-icons/Ionicons";

const ContactUs = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Box p={3}>
                <HeaderSetting
                    title={"Contact Us"}
                    onPress={() => navigation.navigate('Settings')}
                />
                <Gap height={18} />
                <Heading size={"xs"}>Name</Heading>
                <Input placeholder='Name' />
                <Gap height={12} />
                <Heading size={"xs"}>Email</Heading>
                <Input placeholder='Email' />
                <Gap height={12} />
                <Heading size={"xs"}>Feedback</Heading>
                <TextArea h={20} placeholder="Feedback"  />
                <Gap height={12} />
                <Box backgroundColor={"#242760"} p={3} alignItems={"center"} borderRadius={20}>
                    <Heading size={"sm"} color={"white"}>Save</Heading>
                </Box>
            </Box>
        </SafeAreaView>
    )
}

export default ContactUs