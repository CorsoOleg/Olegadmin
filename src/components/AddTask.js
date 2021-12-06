import React from 'react';

const AddTask = () => {
    return (
        <form className="d-flex justify-content-center align-items-center mb-4">
        <div className="form-outline flex-fill">
          <input type="text" id="form1" className="form-control" />
          <label className="form-label" htmlFor="form1">New task...</label>
        </div>
        <button type="submit" className="btn btn-info ms-2">Add</button>
      </form>
    )
};

export default AddTask;