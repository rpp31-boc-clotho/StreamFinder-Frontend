import 'regenerator-runtime/runtime';
import enableHooks from 'jest-react-hooks-shallow';


// pass an instance of jest to `enableHooks()`
enableHooks(jest, { dontMockByDefault: true });
configure({ adapter: new Adapter() });