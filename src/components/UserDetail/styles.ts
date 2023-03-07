import {StyleSheet} from 'react-native';

import spacing from '@constants/spacing';

export default StyleSheet.create({
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: spacing.XXL,
  },
  avatarContainer: {
    width: '20%',
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: spacing.XXL,
    width: '80%',
  },
});
