import { isPlatformWeb } from 'renative';
import colors from '../../platformAssets/runtime/colors.json';

export default {
    active: {
        backgroundColor: colors.activeColorSecondary,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        outline: 'none',
    },
    inActive: {
        backgroundColor: colors.backgroundColor,
        shadowOpacity: isPlatformWeb ? 'none' : 0,
    },
};
