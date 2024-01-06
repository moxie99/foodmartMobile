import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {Images} from '../constants';

interface CategoryMenuItemProps {
  name: string;
  logo: keyof typeof Images;
  activeCategory: string;
  setActiveCategory: (name: string) => void;
}

const CategoryMenuItem: React.FC<CategoryMenuItemProps> = ({
  name,
  logo,
  // activeCategory,
  setActiveCategory,
}) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveCategory(name)}
      // style={styles.category()}
    >
      <Image
        source={Images[logo]}
        // style={styles.categoryIcon(activeCategory === name)}
      />
      <Text
      //  style={styles.categoryText(activeCategory === name)}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//   category: (marginTop = 0) => ({
//     alignItems: 'center',
//     marginTop,
//   }),
//   categoryIcon: (isActive: any) => ({
//     height: 30,
//     width: 30,
//     opacity: isActive ? 1 : 0.5,
//   }),
//   categoryText: (isActive: any) => ({
//     fontSize: 10,
//     lineHeight: 10 * 1.4,
//     fontFamily: Fonts.POPPINS_MEDIUM,
//     color: Colors.DEFAULT_WHITE,
//     marginTop: 5,
//     opacity: isActive ? 1 : 0.5,
//   }),
// });

export default CategoryMenuItem;
