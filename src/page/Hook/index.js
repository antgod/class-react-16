import React from '@alipay/bigfish/react';
import './index.less';
// import { Link } from '@alipay/bigfish/sdk/router';
// import DocumentTitle from '@alipay/bigfish/util/title';
import { dataCreator } from './actions'


function App1() {
  const [data] = dataCreator();
  return (<div>
    <span>todo count1: {data.length}</span>
  </div>)  
}

function App2() {
  const [data, actions] = dataCreator();

  return (<div>
    <span>todo count2: {data.length}</span>
    <div>
      {
        data.map((todo, index) => <span key={`${todo.name}${index}`}>{todo.name}</span>)
      }
    </div>
    <button onClick={actions.handleAddClick} type="button">add</button>
  </div>);
}

function All() {
  return (
    <>
      <App1 />
      <App2 />
    </>
  );
}

export default All;
