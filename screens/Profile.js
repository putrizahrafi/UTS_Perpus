import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES, images } from "../constants";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { photos } from "../constants/data";
import Icon from 'react-native-vector-icons/FontAwesome5';

const PhotosRoutes = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={photos}
      numColumns={3}
      renderItem={({ item, index }) => (
        <View
          style={{
            flex: 1,
            aspectRatio: 1,
            margin: 2,
          }}
        >
          <Image
            key={index}
            source={item}
            style={{ width: "100%", height: "100%", borderRadius: 12 }}
          />
        </View>
      )}
    />
  </View>
);

// const LikesRoutes = () => (
//   <View
//     style={{
//       flex: 1,
//       backgroundColor: "blue",
//     }}
//   />
// );

const renderScene = SceneMap({
  first: PhotosRoutes,
//   second: LikesRoutes,
});

const Profile = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "first", title: "Photos" },
    // { key: "second", title: "Likes" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: COLORS.primary,
      }}
      style={{
        backgroundColor: COLORS.white,
        height: 40,
      }}
      renderLabel={({ focused, route }) => (
        <Text style={[{ color: focused ? COLORS.black : COLORS.gray }]}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar backgroundColor={COLORS.gray} />
      <View style={{ width: "100%" }}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1698778573682-346d219402b5?auto=format&fit=crop&q=80&w=1318&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }}
          resizeMode="cover"
          style={{
            height: 300,
            width: "100%",
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={images.profile}
          resizeMode="contain"
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,
            borderColor: COLORS.primary,
            borderWidth: 2,
            marginTop: -90,
          }}
        />

        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.primary,
            marginVertical: 10,
          }}
        >
          Putri Zahrafi Anam
        </Text>
        <Text
          style={{
            color: COLORS.black,
            ...FONTS.body5,
          }}
        >
          A girl who love nature and carried away by the wind
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 8,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="location-on" size={24} color="black" />
          <Text
            style={{
              ...FONTS.body4,
              marginLeft: 4,
            }}
          >
            Surabaya, Indonesia
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 20, Bottom: 20}}>
                            <TouchableOpacity
                            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="instagram" size={25} color="#bdbdbd" />
                            </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="github" size={25} color="#bdbdbd" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="twitter" size={25} color="#bdbdbd" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="linkedin" size={25} color="#bdbdbd" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="whatsapp" size={25} color="#bdbdbd" />
                        </TouchableOpacity>
        </View>

        {/* <View
          style={{
            paddingVertical: 8,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.primary,
              }}
            >
              122
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.primary,
              }}
            >
              Followers
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.primary,
              }}
            >
              67
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.primary,
              }}
            >
              Followings
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.primary,
              }}
            >
              77K
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.primary,
              }}
            >
              Likes
            </Text>
          </View>
        </View> */}

        {/* <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              marginHorizontal: SIZES.padding * 2,
            }}
          >
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              marginHorizontal: SIZES.padding * 2,
            }}
          >
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,
              }}
            >
              Add Friend
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>

      <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
