import reducer, { defaultState } from 'redux/modules/clinic';
import deepFreeze from 'deep-freeze';

describe('(Redux) clinic', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});
