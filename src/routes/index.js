import React from 'react'
import {
  Actions,
  Router,
  Scene,
  Stack
} from 'react-native-router-flux'

import Posts from '../containers/Posts'
import PostDetail from '../containers/PostDetail'

const RouterComponent = () => {
  return (
    <Router>
      <Stack>
        <Scene key='posts' component={Posts} title='Reddit Posts' />
        <Scene key='postDetail' component={PostDetail} />
      </Stack>
    </Router>
  )
}

export default RouterComponent
