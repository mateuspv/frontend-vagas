import { createStore } from 'redux';

import hasTextQuery from '../helpers/hasTextQuery/index'

const defaultData = {
  jobs: [],
  jobsList: []
}

const filterByText = (jobs, query) =>
  query === "" ? jobs : jobs.filter(_ => hasTextQuery(_.title, query))

function reducer(state, action) {
  switch (action.type) {
    case 'JOBS_ADD':
      return { ...state, jobsList: action.jobs, jobs: action.jobs }
    case 'JOBS_FILTER':
      return { ...state, jobsList: filterByText(state.jobs, action.query) }
    default:
      return state;
  }
}


let store = createStore(reducer, defaultData);

export default store;