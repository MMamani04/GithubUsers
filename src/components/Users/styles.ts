import {StyleSheet} from 'react-native';

import spacing from '@constants/spacing';

export default StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginLeft: -spacing.MD,
    rowGap: spacing.MD,
  },
  item: {
    marginLeft: spacing.MD,
  },
});
