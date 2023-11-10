import { Box, HStack, Text } from 'native-base';
import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";

const Input = () => {
  return (
    <Box backgroundColor={"#A2ADEB"} borderRadius={20}>
        <HStack alignItems={"center"} p={3} space={2} justifyContent={"space-between"}>
            <Text fontSize={16} color={"white"} bold>Search for books</Text>
            <Ionicons name='search-outline' size={20} color={"white"} />
        </HStack>
    </Box>
  )
}

export default Input