import { FlatList, ScrollView, Text, View } from "react-native";
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
    <ScrollView
      style={{
        backgroundColor: COLORS.background
      }}
    >
      {fakeCards.map((item) => 
        <View 
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