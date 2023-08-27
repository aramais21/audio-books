import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Profile from "../screens/Profile";

import { colors } from "../constants/style";
import HomeIconSvg from "../../assets/home-icon.svg";
import ProfileIconSvg from "../../assets/profile-icon.svg";
import SearchIconSvg from "../../assets/search-icon.svg";
import { commonStyles } from "../styles/common";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <SafeAreaView style={commonStyles.safeAreaView}>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.neonPink,
                tabBarInactiveTintColor: colors.timberwolf,
                tabBarActiveBackgroundColor: colors.royalBlue,
                tabBarInactiveBackgroundColor: colors.royalBlue,
                tabBarStyle: { height: 63, borderTopWidth: 0 },
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <HomeIconSvg stroke={color} width={size} height={size} />
                    },
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <SearchIconSvg stroke={color} width={size} height={size} />
                    },
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <ProfileIconSvg stroke={color} width={size} height={size} />
                    },
                    headerShown: false,
                    tabBarShowLabel: false
                }}
            />
        </Tab.Navigator>
    </SafeAreaView>
  );
}

export default Routes;