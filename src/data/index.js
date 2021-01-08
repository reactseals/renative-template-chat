import DataProvider from './Provider';
import DataProviderInstance from './Provider/Firebase';
import Comment from './Model/Comment';

const ProviderInstance = new DataProvider(new DataProviderInstance());

export default ProviderInstance;
export { Comment };
