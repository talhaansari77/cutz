import React, { useRef, useEffect } from 'react';
import { View, ScrollView, Animated,Text } from 'react-native';

const items = [1, 2, 3, 4, 5];

const ScaleScrollView = () => {
  const scrollViewRef = useRef();
  const scrollY = useRef(new Animated.Value(0)).current;

  const scale = scrollY.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: [0.5, 1, 0.5],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    const scrollToMiddle = () => {
      scrollViewRef.current.scrollTo({
        y: 2 * 100 - (0.5 + items.length / 2) * 100,
        animated: false,
      });
    };

    scrollToMiddle();
  }, []);

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round((offsetY + 100) / 100);
    scrollViewRef.current.scrollTo({
      y: index * 100 - (0.5 + items.length / 2) * 100,
      animated: true,
    });
    scrollY.setValue(offsetY);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{ paddingTop: 200, paddingBottom: 200 }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {items.map((item, index) => (
          <Animated.View
            key={index}
            style={{
              backgroundColor: '#e9e9e9',
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{ scale }],
              opacity: scale,
            }}
          >
            <Text>{item}</Text>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScaleScrollView;
