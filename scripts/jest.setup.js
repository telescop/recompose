/* eslint-disable */
jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000

import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })
