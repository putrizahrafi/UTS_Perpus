import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner, BookCard, Category, Gap, Header, Input, Section } from '../components';
import { Box, HStack, Heading, Image, ScrollView, Text } from 'native-base';
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box style={{ backgroundColor: '#8090E8', flex: 1 }}>
        <Box p={3}>
          <Header />
          <Gap height={16} />
          <Input />
          <Gap height={16} />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HStack>
              <Banner source={require('../assets/images/cover.jpg')} />
              <Banner source={require('../assets/images/cover.jpg')} />
              <Banner source={require('../assets/images/cover.jpg')} />
            </HStack>
          </ScrollView>
        </Box>
        <Box backgroundColor={"white"} flex={1} borderTopRadius={20} p={5}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Section title={"Categories"} name={"more"} />
            <Gap height={12} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HStack p={2}>
                <Category
                  source={'https://img.icons8.com/external-thin-kawalan-studio/96/external-telescope-education-thin-kawalan-studio-3.png'}
                  name={"Sains"} />
                <Category
                  source={'https://img.icons8.com/ios/100/workstation.png'}
                  name={"Computer"} />
                <Category
                  source={'https://img.icons8.com/badges/96/user.png'}
                  name={"Biography"} />
                <Category
                  source={'https://img.icons8.com/material-outlined/96/code.png'}
                  name={"Coding"} />
                <Category
                  source={'https://img.icons8.com/isometric-line/100/book.png'}
                  name={"Novel"} />
                <Category
                  source={'https://img.icons8.com/fluency-systems-regular/48/mosque.png'}
                  name={"Religion"} />
              </HStack>
            </ScrollView>
            <Gap height={12} />
            <Section title={"Popular"} name={"see all"} />
            <Gap height={12} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HStack>
                <BookCard
                  source={require('../assets/images/book1.jpg')}
                  title={'React Native'}
                  author={'by: John Wicks'} />
                <BookCard
                  source={require('../assets/images/book2.jpg')}
                  title={'Fun With AI'}
                  author={'by: Gellang Adie'} />
                <BookCard
                  source={require('../assets/images/book3.jpg')}
                  title={'Cyber Secure'}
                  author={'by: Ivano Rossi'} />
                <BookCard
                  source={require('../assets/images/book4.jpg')}
                  title={'Electronics'}
                  author={'by: Bintang'} />
              </HStack>
            </ScrollView>
            <Gap height={50} />
          </ScrollView>
        </Box>
      </Box>
    </SafeAreaView>
  )
}

export default Home