import React from 'react'
import { AddList } from './AddList'
import { Store } from './Store/Store'
import { Provider } from 'react-redux'
import { ListView } from './ListView'

export const MainFile = () => {
  return (
    <Provider store={Store}>
      <div>
      <h1>This is Main file</h1>
      <AddList/>
      <ListView/>
    </div>
    </Provider>
  )
}
