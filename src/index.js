
import { Component } from "react"; 

import React, { useState } from 'react'; 
import ReactDOM from 'react-dom';

import AddTask from './components/AddTask'
import Task from './components/Task'


const MyApp = () => { 

  const [tab, setTab] = useState('all');
  const tasks = [
    {
      name: 'Cras justo odio',
      defaultChecked: true,
    },
    {
      name: '>Dapibus ac facilisis in',
      defaultChecked: true,
    },
    {
      name: 'Morbi leo risus',
    },
    {
      name: ' Porta ac consectetur ac',
    },
    {
      name: 'Vestibulum at eros',
    },
  ];
  function filterTasks (tasks, tab) {
    if (tab === 'all') return tasks;
    if (tab === 'active') return tasks.filter(({ defaultChecked }) => !defaultChecked)
    return tasks.filter(({ defaultChecked }) => defaultChecked)
  }
  return ( 
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
    
            <div className="card">
              <div className="card-body p-5">
    
                
                <AddTask />
                <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                  <li className="nav-item" role="presentation" onClick={() => setTab('all')}>
                    <a className="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab"
                      aria-controls="ex1-tabs-1" aria-selected="true">All</a>
                  </li>
                  <li className="nav-item" role="presentation" onClick={() => setTab('active')} >
                    <a className="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab"
                      aria-controls="ex1-tabs-2" aria-selected="false">Active</a>
                  </li>
                  <li className="nav-item" role="presentation"  onClick={() => setTab('completed')}>
                    <a className="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab"
                      aria-controls="ex1-tabs-3" aria-selected="false">Completed</a>
                  </li>
                </ul>
                <div className="tab-content" id="ex1-content">
                  <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                    <ul className="list-group mb-0">
                      {
                        filterTasks(tasks, tab).map(({ name, defaultChecked }, i) => (<Task key={name} name={name} defaultChecked={defaultChecked} />))
                      }
                    </ul>
                  </div>
                </div>
    
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </section>
  ); 
} 


ReactDOM.render( 
	<MyApp ></MyApp>     , 
	document.getElementById('my_container'));