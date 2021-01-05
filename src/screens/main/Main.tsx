//Main React import
import React, {useEffect} from 'react';
//Our Styles for Project
import {Body, PopView, Avatar1} from '../../styles/wrapper';
import {SubTitle, Title, HeadText} from '../../styles/text';
import {Text, Searchbar} from 'react-native-paper';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import Categories from '../../components/Categories';
import {HPCardsyText} from '../../styles/text';
import '../../api/DatabaseHandler';
import {useUserData} from '../../states/useData';
import { useState } from 'react';

const MainScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  const userData = useUserData(); //Global state instance gets from https://github.com/pmndrs/zustand

  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    userData.userdata.setCategories(function () {
      userData.userdata.getCategories().forEach((category) => {
        setCategories((categories) => [
          ...categories,
          category.getCategoryName(),
        ]);
      });
    });
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Title style={{fontWeight: 'bold'}}>Home Page</Title>
          <SubTitle>Choose the course you want</SubTitle>
          <Searchbar
            placeholder={'Search'}
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <FlatList
            horizontal
            data={categories}
            renderItem={({item, index}) => (
              <TouchableHighlight
                onPress={() => navigation.navigate('Course')}
                underlayColor="white">
                <View>
                  <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      backgroundColor: '#2D9CDB',
                      marginLeft: 10,
                      alignItems: 'center',
                      marginTop: 10,
                      height: 90,
                      width: 90,
                      borderRadius: 90 / 2,
                    }}
                  />
                  <HPCardsyText>{item}</HPCardsyText>
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
          <HeadText style={{fontWeight: 'bold'}}>Populer</HeadText>
          <PopView>
            <Avatar1 />
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              what should we pay attention to while studying?{' '}
            </Text>
          </PopView>
          <PopView>
            <Avatar1 />
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              what should we pay attention to while studying?{' '}
            </Text>
          </PopView>
          <PopView>
            <Avatar1 />
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              what should we pay attention to while studying?{' '}
            </Text>
          </PopView>
          <HeadText style={{fontWeight: 'bold'}}>Threads</HeadText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F4F4F4',
    marginHorizontal: 5,
  },
});

export default MainScreen;
