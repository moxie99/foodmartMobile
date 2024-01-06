/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';
import {Colors, Fonts} from '../constants';
import Separator from '../components/Separator';
import BookmarkCard from '../components/BookmarkCard';

import {Display} from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const ListItemSeparator = () => <View style={styles.listStyle} />;

const BookmarkScreen = () => {
  // const bookmarks = useSelector(state => state?.bookmarkState?.bookmarks);
  const navigation = useNavigation();

  const bookmarks: ArrayLike<any> | null | undefined = [];
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Bookmarks</Text>
      </View>
      <FlatList
        style={styles.bookmarkList}
        data={bookmarks}
        keyExtractor={item => item?.restaurantId}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Separator height={10} />}
        ListFooterComponent={() => <Separator height={10} />}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        renderItem={({item}) => (
          <BookmarkCard
            {...item?.restaurant}
            // navigate={restaurantId =>
            //   navigation.navigate('Restaurant', {restaurantId})
            // }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  bookmarkList: {
    marginHorizontal: 20,
  },
  listStyle: {
    height: 0.8,
    backgroundColor: Colors.DEFAULT_GREY,
    width: '100%',
    marginVertical: 10,
  },
});

export default BookmarkScreen;
