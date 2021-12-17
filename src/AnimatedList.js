import React from 'react';
import {
  RefreshControl,
  FlatList,
  StyleSheet,
  Text,
  Animated,
  View,
  TouchableOpacity,
} from 'react-native';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const AnimatedList = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const SlideInLeft = new Animated.Value(0);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  React.useEffect(() => {
    if (refreshing) {
      // 3. Trigger play when is refreshing
      Animated.sequence([
        Animated.timing(SlideInLeft, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [SlideInLeft, refreshing]);

  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 6, 7, 7]}
      renderItem={({item}) => (
        <View style={styles.listItem}>
          <Text>{item}</Text>
        </View>
      )}
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl
          tintColor={'transparent'}
          refreshing={refreshing}
          onRefresh={onRefresh}>
          {refreshing ? (
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: SlideInLeft.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
                ...styles.animatedView,
              }}>
              <Text style={{color: 'black'}}>SlideUp </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SecretMenu')}>
                <Text>Click Me</Text>
              </TouchableOpacity>
            </Animated.View>
          ) : null}
        </RefreshControl>
      }
    />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  animatedView: {
    borderRadius: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    zIndex: 10,
  },
  listItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
});

export default AnimatedList;
