import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding: 0 0 10px;
`;

/**
 * It's necessary to set a background color white
 * because of React Navigation sets grey by default
 */
const List = styled.FlatList`
  background-color: #fff;
  padding: 10px;
`;

const Option = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PalettePreview = styled.FlatList`
  flex-direction: row;
  margin-bottom: 20px;
`;

export { Title, List, Option, PalettePreview };
