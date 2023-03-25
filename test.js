import React, { useRef, useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const MyScrollView = () => {
  const scrollViewRef = useRef();
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const scrollPosition = scrollViewRef.current.contentOffset.y;
    const itemHeight = 50;
    const middleIndex = Math.round(scrollPosition / itemHeight);
    const middleOffset = middleIndex * itemHeight;
    scrollViewRef.current.scrollTo({ y: middleOffset });
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      onScroll={handleScroll}
      scrollEventThrottle={16} // 60 fps
    >
      {items.map((item) => (
        <View key={item} style={styles.item}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyScrollView;
