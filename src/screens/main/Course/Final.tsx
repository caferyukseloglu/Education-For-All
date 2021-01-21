//Main React import
import React, {useState,useEffect} from 'react';
import {useTheme, ProgressBar, Button, IconButton} from 'react-native-paper';
//Our Styles for Project
import {Body, Line, Scroll} from '../../../styles/wrapper';
import {View, useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BigButton} from '../../../styles/buttons';
import {VictoryPie, VictoryGroup} from 'victory-native';

const FinalScreen = ({route, navigation}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const {colors} = useTheme();
  const data = [
    {y: 5, color: colors.success, label: 'True'},
    {y: 4, color: colors.error, label: 'False'},
    {y: 1, color: colors.text, label: 'Empty'},
  ];
  const defaultGraphicData = [{y: 0}, {y: 0}, {y: 100}];
  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(data);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
        <Line
          alignItems="center"
          justify="center"
          style={{flexWrap: 'nowrap', alignContent: 'flex-start'}}>
          <Button onPress={() => navigation.goBack()}>X</Button>
          <ProgressBar
            progress={1}
            color={colors.success}
            style={{width: windowWidth - 120}}
          />
          <IconButton icon="flag" color={colors.success} size={20} />
        </Line>
      </View>
      <Scroll>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: windowWidth,
            height: windowHeight - 250,
          }}>
          <VictoryPie
            padAngle={({datum}) => datum.y}
            innerRadius={100}
            labelPosition={'centroid'}
            animate={{duration: 1000, easing: 'exp'}}
            labelRadius={({innerRadius}) => innerRadius + 20}
            data={graphicData}
            width={320}
            height={320}
            style={{
              data: {
                fill: ({datum}) => datum.color,
              },
            }}
          />
        </View>

        <Body
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginVertical: 20,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <BigButton
            margins={[10, 10, 20, 20]}
            text="Done"
            mode="contained"
            bgColor="success"
            textColor="buttonText1"
            height={60}
            radius="5"
            style={{alignSelf: ''}}
            onPress={() => navigation.navigate('Home')}
          />
        </Body>
      </Scroll>
    </SafeAreaView>
  );
};

export default FinalScreen;
