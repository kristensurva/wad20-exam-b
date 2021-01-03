// Import the mount() method from the test utils
// and the component you want to test

import { mount } from '@vue/test-utils'
import Transactions from "../../src/components/Transactions";


describe('Transactions', () => {
    // Now mount the component and you have the wrapper
    it('should return true', function () {
        expect(1).toEqual(1)
    });
});