import React from 'react'
import {
  Actions,
  Router,
  Scene,
  Stack
} from 'react-native-router-flux'

import Posts from '../containers/Posts'
import PostDetail from '../containers/PostDetail'

import styles from './styles'
import Colors from '../themes/colors'

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>
      <Stack>
        <Scene key='posts' component={Posts} title='Reddit Posts' />
        <Scene key='postDetail' component={PostDetail} headerTintColor={Colors.white} />
      </Stack>
    </Router>
  )
}

export default RouterComponent
