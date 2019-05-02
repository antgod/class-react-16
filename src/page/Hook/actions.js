import { partialLeft } from 'ant-util'
import { reducerCreator } from './common'

function handleAddClick({ dispatch }, text) {
	dispatch({ type: "add", text });
}

const dataReducer = state => [...state, { name: 'add'} ]

function dataCreator() {
  const [data, dispatch] = reducerCreator(dataReducer, []);
  return [data, { handleAddClick: partialLeft(handleAddClick, { dispatch }) }];
}

export {
	dataCreator,
}
