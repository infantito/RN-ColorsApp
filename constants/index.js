/**
 * keyExtractor is not necessary in FlatList
 * if your DATA own a key property
 * i.e.: [{..., key: '1'}...]
 *
 * We don't need SafeAreaView anymore because
 * React Navigation kind of handles safe area for us
 */

const SOLARIZED = [
  { name: 'Base03', hexCode: '#002b36', key: '1' },
  { name: 'Base02', hexCode: '#073642', key: '2' },
  { name: 'Base01', hexCode: '#586e75', key: '3' },
  { name: 'Base00', hexCode: '#657b83', key: '4' },
  { name: 'Base0', hexCode: '#839496', key: '5' },
  { name: 'Base1', hexCode: '#93a1a1', key: '6' },
  { name: 'Base2', hexCode: '#eee8d5', key: '7' },
  { name: 'Base3', hexCode: '#fdf6e3', key: '8' },
  { name: 'Yellow', hexCode: '#b58900', key: '9' },
  { name: 'Orange', hexCode: '#cb4b16', key: '10' },
  { name: 'Red', hexCode: '#dc322f', key: '11' },
  { name: 'Magenta', hexCode: '#d33682', key: '12' },
  { name: 'Violet', hexCode: '#6c71c4', key: '13' },
  { name: 'Blue', hexCode: '#268bd2', key: '14' },
  { name: 'Cyan', hexCode: '#2aa198', key: '15' },
  { name: 'Green', hexCode: '#859900', key: '16' },
];

const FRONTEND_MASTERS = [
  { name: 'Red', hexCode: '#c02d28' },
  { name: 'Black', hexCode: '#3e3e3e' },
  { name: 'Grey', hexCode: '#8a8a8a' },
  { name: 'White', hexCode: '#ffffff' },
  { name: 'Orange', hexCode: '#e66225' },
];

const RAINBOW = [
  { name: 'Red', hexCode: '#FF0000' },
  { name: 'Orange', hexCode: '#FF7F00' },
  { name: 'Yellow', hexCode: '#FFFF00' },
  { name: 'Green', hexCode: '#00FF00' },
  { name: 'Violet', hexCode: '#8B00FF' },
];

export { SOLARIZED, FRONTEND_MASTERS, RAINBOW };
