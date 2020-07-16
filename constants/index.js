/**
 * keyExtractor is not necessary in FlatList
 * if your DATA own a key property
 * i.e.: [{..., key: '1'}...]
 *
 * We don't need SafeAreaView anymore because
 * React Navigation kind of handles safe area for us
 */

const SOLARIZED = [
  { colorName: 'Base03', hexCode: '#002b36', key: '1' },
  { colorName: 'Base02', hexCode: '#073642', key: '2' },
  { colorName: 'Base01', hexCode: '#586e75', key: '3' },
  { colorName: 'Base00', hexCode: '#657b83', key: '4' },
  { colorName: 'Base0', hexCode: '#839496', key: '5' },
  { colorName: 'Base1', hexCode: '#93a1a1', key: '6' },
  { colorName: 'Base2', hexCode: '#eee8d5', key: '7' },
  { colorName: 'Base3', hexCode: '#fdf6e3', key: '8' },
  { colorName: 'Yellow', hexCode: '#b58900', key: '9' },
  { colorName: 'Orange', hexCode: '#cb4b16', key: '10' },
  { colorName: 'Red', hexCode: '#dc322f', key: '11' },
  { colorName: 'Magenta', hexCode: '#d33682', key: '12' },
  { colorName: 'Violet', hexCode: '#6c71c4', key: '13' },
  { colorName: 'Blue', hexCode: '#268bd2', key: '14' },
  { colorName: 'Cyan', hexCode: '#2aa198', key: '15' },
  { colorName: 'Green', hexCode: '#859900', key: '16' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

export { SOLARIZED, FRONTEND_MASTERS, RAINBOW };
