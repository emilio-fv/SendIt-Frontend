import { ScrollView, StyleSheet, View } from "react-native";
import { COLORS } from '../../../constants/index';
import RegularText from '../../../components/Text/RegularText';

const fakeCards = [
  { text: 'card' },
  { text: 'card' },
  { text: 'card' },
  { text: 'card' },
  { text: 'card' },
  { text: 'card' },
  { text: 'card' },
  { text: 'card' },
  { text: 'card' },
  { text: 'card' },
  { text: 'card' },
];

export default Home = () => {
  return (
    <ScrollView style={styles.container}>
      {/* TODO: build Climb Card component */}
      {fakeCards.map((item, index) => 
        <View 
          key={index}
          style={{
            height: 100,
            backgroundColor: COLORS.cardBackground,
            marginBottom: 10
          }}
        >
          <RegularText style={{ color: COLORS.darkText }} text={item.text} />
        </View>
      )}
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background
  },
})