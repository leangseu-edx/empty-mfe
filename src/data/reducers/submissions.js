import actions from 'data/actions';
import thunkActions from 'data/thunkActions';

const initialState = {
  list: {},
  selected: [],
  activeIndex: null, // submissionId
  current: {
    submissionId: null,
    response: {
      text: '',
      files: [],
    },
    rubric: {
      name: '',
      commentRequirement: 'optional',
      criteria: [
        {
          name: '',
          description: '',
          points: 0,
          commentRequirement: 'optional',
        },
      ],
    },
    rubricData: {
    },
    grade: null,
    status: null,
  },
  prev: null,
  next: null,
};

// eslint-disable-next-line no-unused-vars
const grades = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.submissions.loadSubmission.toString():
      return {
        ...state,
        current: payload,
        activeIndex: 0,
      };
    case actions.submissions.preloadNext.toString():
      return { ...state, next: payload };
    case actions.submissions.preloadPrev.toString():
      return { ...state, prev: payload };

    case actions.submissions.loadNext.toString():
      if (state.activeIndex >= state.selected.length - 1) return state;
      return {
        ...state,
        prev: state.current,
        current: {
          ...state.next,
          ...payload,
        },
        activeIndex: state.activeIndex + 1,
        next: null,
      };
    case actions.submissions.loadPrev.toString():
      if ( state.activeIndex <= 0 )  return state;
      return {
        ...state,
        next: state.current,
        current: {
          ...state.prev,
          ...payload,
        },
        activeIndex: state.activeIndex - 1,
        prev: null,
      };
    case actions.submissions.loadList.toString():
      return { ...state, list: payload };
    case actions.submissions.updateSelection.toString():
      return { ...state, selected: payload, activeIndex: 0 };
    default:
      return state;
  }
};

export { initialState };
export default grades;
