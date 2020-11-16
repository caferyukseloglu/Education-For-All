//Main React import
import React, { useState } from 'react';
import { Button, useTheme, Caption, TouchableRipple, IconButton, Badge, Chip ,BottomNavigation} from 'react-native-paper';
//Our Styles for Project
import { Form, Body, Line, Captions } from './styles/wrapper';
import { SubTitle, Title, CheckText,CardTitle, CardSubtitle, LessonTitle,LessonSubtitle } from './styles/text';
import {Text, View,FlatList} from "react-native";
import {SubjectCard} from "./styles/cards";



const SubjectScreen = ({navigation}) => {

    const [data] = useState({
        time: "15",
        subjects: ["Global", "English", "Physics","Turkish","German"],
        completedTopicCount:1,
        cards:{"Test":"General subject information", "Topic Summary": "Study notes"}, 
        cardIcons:{"Test":"bookmark-plus","Topic Summary":"grease-pencil"},
    });

    const [courses] = useState([
        {name:"Programming 101",key:"1",description:8}, 
        {name:"Fun Mathmatic",key:"2",description:9}, 
        {name:"Physics",key:"3",description:7},
        {name:"Microprocessors", key:"4",description:5},
        {name:"Programming 101",key:"5",description:8}, 
        {name:"Fun Mathmatic",key:"6",description:9}, 
        {name:"Physics",key:"7",description:7},
        {name:"Database", key:"8",description:5},
        
    ]);

    return(
        
        <Body>
            <Title >Subjects</Title>
            <SubTitle>Today's lesson progress {data.time} min</SubTitle>
            <View style={{flexDirection:"row",justifyContent: "space-between", padding:31, alignItems:"center"}}>
                {Object.keys(data.cards).map(eachCard => <SubjectCard key={eachCard}>
                    <IconButton icon="bookmark-plus" size={30} color="green" ></IconButton>
                    <CardTitle>{eachCard}</CardTitle>
                    <CardSubtitle>{data.cards[eachCard]}</CardSubtitle>  
                </SubjectCard>)}
            </View>
                    
            <View style={{flex:1,backgroundColor:"#CACACA", height:"100%",paddingHorizontal:20,padding:20}}>
                <View>
                    <Title>Recommended lessons</Title>
                </View>
                <FlatList data={courses} renderItem={({item}) =>(
                    <TouchableRipple style={{marginBottom:20}} onPress={()=> console.log("Hello "+item.name)} rippleColor="black">
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{flex:2,height:82,backgroundColor:"white",justifyContent:"space-between"}}>
                                <IconButton icon="plus-circle" size={40} color="#F2C94C" ></IconButton>
                            </View>
                            <View style={{flex:5,height:82,backgroundColor:"white"}}>
                                <LessonTitle>{item.name}</LessonTitle>
                                <LessonSubtitle>{item.description} goals were achieved today.</LessonSubtitle>
                            </View>
                            <View style={{flex:3, height:82,backgroundColor:"white",justifyContent:"center"}}>
                                <Badge style={{backgroundColor:"green",marginRight:50}} visible={true} size={20}>New</Badge>
                            </View>
                        </View>
                    </TouchableRipple>)}

                
            />

            

            </View>
        </Body>
        
        
    )
}

export default SubjectScreen;


/*            <Line>
                {data.subjects.map(eachsub => <SubTitle eachsub key = {eachsub}>{eachsub}</SubTitle>)}
            </Line>*/
            
/*                    /*<IconButton icon={data.cardIcons[eachCard]}></IconButton>*/


//FOR BOTTOM NAVIGATION
/*function MyTabs() {
  return (
    
  );
}*/

/* <Tab.Navigator
initialRouteName="SubjectScreen"
tabBarOptions={{
    activeTintColor: '#e91e63',
}}
>
<Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{
    tabBarLabel: 'Home Page'
    }}
/>
<Tab.Screen
    name="SubjectScreen"
    component={SubjectScreen}
    options={{
    tabBarLabel: 'Subjects'
    }}
/>
<Tab.Screen
    name="Progress"
    component={LoginScreen}
    options={{
    tabBarLabel: 'Progress'
    }}
/>

<Tab.Screen
    name="Profile"
    component={RegisterScreen}
    options={{
    tabBarLabel: 'Profile'
    }}
/>

</Tab.Navigator> */

/*const Tab = createBottomTabNavigator();


//TODO components will be changed
function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel:"Home Page"}} />
        <Tab.Screen name="Subjects" component={SubjectScreen} options={{tabBarLabel:"Subjects"}} />
        <Tab.Screen name="Progress" component={RegisterScreen} options={{tabBarLabel:"Progress"}} /> 
        <Tab.Screen name="Profile" component={LoginScreen} options={{tabBarLabel:"Profile"}} /> 
      </Tab.Navigator>
    
    
    );
  }

*/