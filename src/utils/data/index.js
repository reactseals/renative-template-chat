import DataProvider from './Provider/Provider';
import DataProviderInstace from './Provider/instances/FirebaseProvider';

const ProviderInstance = new DataProvider(new DataProviderInstace());

export default ProviderInstance;
