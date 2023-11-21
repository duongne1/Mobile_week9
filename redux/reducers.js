// reducer.js
const initialState = {
    jobs: [
      { id: 0, job: "Check to email" },
      { id: 1, job: "Go to school" },
      { id: 2, job: "Learn Mobile" },
    ],
    searchJob: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_JOB':
        return {
          ...state,
          jobs: [...state.jobs,  action.payload],
        };
  
      case 'DELETE_JOB':
        return {
          ...state,
          jobs: state.jobs.filter((job) => job.id !== action.payload),
        };
  
      case 'UPDATE_JOB':
        return {
          ...state,
          jobs: state.jobs.map((job) =>
            job.id === action.payload.id ? { ...job, job: action.payload.updatedJob } : job
          ),
        };
        
        case 'SEARCH_JOB':
            return {
                ...state,
                searchJob: action.payload,
            };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  