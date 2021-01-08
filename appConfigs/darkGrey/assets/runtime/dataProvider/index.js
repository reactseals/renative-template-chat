import DataProvider from '../../../src/data/Provider.js';
import DataProviderInstance from '../../../src/data/Provider/Firebase';
import Comment from '../../../src/data/Model/Comment';

const ProviderInstance = new DataProvider(new DataProviderInstance());

export default ProviderInstance;
export { Comment };
