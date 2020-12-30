import DataProvider from './Provider/Provider';
import DataProviderInstance from './Provider/instances/FirebaseProvider';
import Comment from './Model/Comment';

const ProviderInstance = new DataProvider(new DataProviderInstance());

export default ProviderInstance;
export { Comment };
