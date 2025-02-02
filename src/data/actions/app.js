import { StrictDict } from 'utils';
import { createActionFactory } from './utils';

export const dataKey = 'app';
const createAction = createActionFactory(dataKey);

export default StrictDict({
  loadOraMetadata: createAction('loadOraMetadata'),
  updateSelection: createAction('updateSelection'),
  setShowReview: createAction('setReview'),
  setGrading: createAction('setGrading'),
});
