import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import Listitem from '../ListItem/ListItem';
import {categories} from '../../data/categories.json';

// page navigation
// navigation.navigate;

export default function List({}) {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          style={styles.lists}
          data={categories}
          renderItem={({item, index}) => (
            <ScrollView style={styles.scroll}>
              <Listitem text={item.name.en} onRowPress={() => {}} />
            </ScrollView>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  lists: {
    borderWidth: 1,
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    marginLeft: 23,
    marginRight: 23,
    height: 386,
  },
  title: {
    fontSize: 18,
    marginLeft: 23,
    lineHeight: 22,
    color: '#111827',
    marginBottom: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Inter',
  },
});