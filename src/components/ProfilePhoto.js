import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../utils/Colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Spacer} from './Spacer';
import {icons} from '../assets/icons';

const ProfilePhoto = (props) => {
  const height = Dimensions.get('screen').height;
  return (
    <View>
      <View
        style={{
          width:  props.width ||  scale(110),
          height:  props.height || scale(110),
          borderRadius: 100,
          borderColor: colors.yellow,
          borderWidth: 2,
          backgroundColor: '#faedcd',
          alignSelf: 'center',
          position: 'absolute',
          alignItems: 'center',
          // marginTop: height/ 7.7
        }}>
        <Image
          source={icons.person}
          style={{width: '90%', height: '90%', alignSelf: 'center'}}
        />
        {
          props.addPhoto &&(
            <View
            style={{
              width: scale(30),
              height: scale(30),
              borderRadius: 30,
              backgroundColor: colors.white,
              position: 'absolute',
              alignSelf: 'flex-end',
              marginTop: verticalScale(5),
              right: -10,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
            }}>
            <SimpleLineIcons
              name="camera"
              color={colors.black}
              size={moderateScale(19)}
            />
          </View>

          )
        }
       
      </View>
    </View>
  );
};

export default ProfilePhoto;

const styles = StyleSheet.create({});
