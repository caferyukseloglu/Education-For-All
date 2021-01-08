//Main React import
import React, {useEffect} from 'react';
//Our Styles for Project
import {Body, PopView, Avatar1, Scroll, Line} from '../../styles/wrapper';
import {SubTitle, Title, HeadText, CourseSubtitle} from '../../styles/text';
import {
  Text,
  Searchbar,
  Badge,
  Button,
  ToggleButton,
  IconButton,
  useTheme,
} from 'react-native-paper';
import {
  View,
  useWindowDimensions,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
  Platform,
  Image,
} from 'react-native';

import Categories from '../../components/Categories';
import {HPCardsyText} from '../../styles/text';
import '../../api/DatabaseHandler';
import {useUserData} from '../../states/useData';
import {useState} from 'react';
import {Category} from '../../api/Category';
import {Icon} from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';

const MainScreen = ({navigation}) => {
  const {colors} = useTheme();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand

  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    userData.userdata.setCategories(function () {
      userData.userdata.getCategories().forEach((category) => {
        setCategories((categories) => [...categories, category]);
      });
    });
  });

  const toCourse = (category: Category) => {
    userData.userdata.getTeachersByCategory(category, function () {
      navigation.navigate('Course', {
        courseObj: category,
        teachers: category.getTeachers(),
      });
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Scroll
        mHorizontal="0px"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{backgroundColor:colors.background}}>
        <View style={{marginVertical:10,marginHorizontal:10}}>
          <View style={{marginHorizontal:20}}>
            <Line
              style={{justifyContent: 'space-between', alignItems: 'center'}}>
              <Title mTop="0px" style={{fontWeight: 'bold',color:colors.title1}}>
                Home Page
              </Title>
              <IconButton
                icon="bell-ring"
                color={colors.success}
                onPress={() => console.log('Clicked')}
              />
            </Line>
            <SubTitle style={{color:colors.subtitle1}} left="0" marginTop="0" textAlign="left">
              Choose the course you want
            </SubTitle>
            <Searchbar
              style={{borderRadius:15,height:43,marginVertical:10}}
              placeholder={'Search for lessons...'}
              onChangeText={onChangeSearch}
              value={searchQuery}
              inputStyle={{color:colors.title1}}
              placeholderTextColor={colors.title1}
            />
          </View>
          <Scroll
            style={{backgroundColor:colors.background}}
            mHorizontal="0px"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {categories.map((category) => {
              return (
                <TouchableHighlight
                  onPress={() => toCourse(category)}
                  underlayColor="white">
                  <View style={{alignContent: 'center', alignItems: 'center'}}>
                    <View
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        backgroundColor: '#2D9CDB',
                        marginLeft: 20,
                        marginRight: 20,
                        alignItems: 'center',
                        marginTop: 10,
                        height: 60,
                        width: 60,
                        borderRadius: 60 / 2,
                      }}
                    />
                    <HPCardsyText style={{color:colors.title1}}>{category.categoryName}</HPCardsyText>
                  </View>
                </TouchableHighlight>
              );
            })}
          </Scroll>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              margin: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <HeadText margins="0px" style={{fontWeight: 'bold',color:colors.title1}}>
              Recommended courses
            </HeadText>
          <Button onPress={() => console.log("More")}><CourseSubtitle style={{color:colors.subtitle1}}>More</CourseSubtitle></Button>
          </View>
          <Body>
            <Categories />
          </Body>
          <HeadText style={{fontWeight: 'bold',color:colors.title1}}>Today's Events</HeadText>
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={[
              {name: 'Event1', image: '../../assets/1.jpg'},
              {name: 'Event2', image: '../../assets/1.jpg'},
              {name: 'Event3', image: '../../assets/1.jpg'},
              {name: 'Event4', image: '../../assets/1.jpg'},
            ]}
            renderItem={(item) => (
              <View style={{padding: 10}}>
                <View
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    backgroundColor: '#C4C4C4',
                    borderWidth: 1,
                    borderColor: '#626262',
                    height: 150,
                    width: 330,
                  }}
                />
              </View>
            )}
            keyExtractor={item => item.name}
          />
          <Body>
            <HeadText style={{fontWeight: 'bold',color:colors.title1}}>Populer</HeadText>
            <PopView>
              <Avatar1 />
              <Text
                numberOfLines={3}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                What should we pay attention to while studying ?{' '}
              </Text>
            </PopView>
            <PopView>
              <Avatar1 />
              <Text
                numberOfLines={3}
                style={{fontWeight: 'bold', fontSize: 18}}>
                What should we pay attention to while studying ?{' '}
              </Text>
            </PopView>
            <PopView>
              <Avatar1 />
              <Text
                numberOfLines={3}
                style={{fontWeight: 'bold', fontSize: 18}}>
                What should we pay attention to while studying ?{' '}
              </Text>
            </PopView>
          </Body>
        </View>
      </Scroll>
    </SafeAreaView>
  );
};

export default MainScreen;
