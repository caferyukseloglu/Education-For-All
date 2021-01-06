//Main React import
import React, {useEffect} from 'react';
//Our Styles for Project
import {Body, PopView, Avatar1, Scroll, Line} from '../../styles/wrapper';
import {SubTitle, Title, HeadText} from '../../styles/text';
import {Text, Searchbar, Badge, Button, ToggleButton} from 'react-native-paper';
import {
  View,
  useWindowDimensions,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
  Platform,
} from 'react-native';

import Categories from '../../components/Categories';
import {HPCardsyText} from '../../styles/text';
import '../../api/DatabaseHandler';
import {useUserData} from '../../states/useData';
import {useState} from 'react';

const MainScreen = ({navigation}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand

  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    userData.userdata.setCategories(function () {
      userData.userdata.getCategories().forEach((category) => {
        setCategories((categories) => [
          ...categories,
          category,
        ]);
      });
    });
  });

  console.log(categories);

  return (
    <SafeAreaView style={{flex: 1,padding: 10}}>
      <Scroll showsHorizontalScrollIndicator={false}>
        <View>
          <Line alignItems="center">
            <Title textAlign='left' style={{fontWeight: 'bold'}}>Home Page</Title>
            <ToggleButton
              icon="bell"
              value="Messages"
              onPress={console.log('Clicked')}
            />
          </Line>
          <SubTitle left='0' marginTop='0' textAlign='left'>Choose the course you want</SubTitle>
          <Searchbar
<<<<<<< HEAD
            placeholder={'Search...'}
=======
            placeholder={'Search for lesson,subject or teacher...'}
>>>>>>> 0f472b16b71ff049d931f65babc482f96ca7334f
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <FlatList
            horizontal
            data={categories}
            renderItem={({item, index}) => (
              <TouchableHighlight
                onPress={() => navigation.navigate('Course',{courseObj:item})}
                underlayColor="white">
                <View style={{alignContent: 'center',alignItems: 'center'}}>
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
                  <HPCardsyText>{item.getCategoryName()}</HPCardsyText>
                </View>
              </TouchableHighlight>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <HeadText style={{fontWeight: 'bold'}}>Recommended courses </HeadText>
          <Body>
            <Categories />
          </Body>
          <HeadText style={{fontWeight: 'bold'}}>Today's Events</HeadText>
          <FlatList
            horizontal
            data={[
              {name: 'Event1'},
              {name: 'Event2'},
              {name: 'Event 3'},
              {name: 'Event 4'},
            ]}
            renderItem={(item, index) => (
              <View style={{padding: 10}}>
                <View
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
            keyExtractor={(item, index) => index.toString()}
          />
          <Body>
            <HeadText style={{fontWeight: 'bold'}}>Populer</HeadText>
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
