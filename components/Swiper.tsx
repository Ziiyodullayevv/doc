// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import AnimatedCarousel from 'react-native-reanimated-carousel';

// const { width: screenWidth } = Dimensions.get('window');

// interface CarouselItem {
//   title: string;
// }

// const data: CarouselItem[] = [
//   { title: 'First Item' },
//   { title: 'Second Item' },
//   { title: 'Third Item' },
// ];

// const MyStackCarousel: React.FC = () => {
//   return (
//     <AnimatedCarousel
//       data={data}
//       renderItem={({ item }) => (
//         <View style={styles.item}>
//           <Text style={styles.title}>{item.title}</Text>
//         </View>
//       )}
//       width={screenWidth * 0.75}
//       height={200}
//       mode='horizontal-stack'
//       modeConfig={{
//         stackInterval: 18, // Kartalar orasidagi masofa
//         scaleInterval: 0.08, // Masshtab o'zgarishi
//       }}
//       loop={true} // Cheksiz aylanish
//     />
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: '#87CEEB',
//     borderRadius: 8,
//     height: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
// });

// export default MyStackCarousel;

import { View, Text } from 'react-native';
import React from 'react';

const Swiper = () => {
  return (
    <View>
      <Text>Swiper</Text>
    </View>
  );
};

export default Swiper;
