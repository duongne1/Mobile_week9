export const addJob = (job) => ({
    type: 'ADD_JOB',
    payload: job,
  });
  
  export const deleteJob = (id) => ({
    type: 'DELETE_JOB',
    payload: id,
  });
  
  export const updateJob = (id, updatedJob) => ({
    type: 'UPDATE_JOB',
    payload: { id, updatedJob },
  });

  export const searchJob = (search) => ({
    type: 'SEARCH_JOB',
    payload: search,
});