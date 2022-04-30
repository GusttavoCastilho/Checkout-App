import mockIcon from './mockIcon';

// eslint-disable-next-line prettier/prettier
export { };

jest.mock('react-native-vector-icons/Entypo', () =>
  mockIcon('RNVectorIcons.Entypo'),
);

jest.mock('react-native-vector-icons/AntDesign', () =>
  mockIcon('RNVectorIcons.AntDesign'),
);
