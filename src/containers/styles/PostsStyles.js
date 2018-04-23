import { StyleSheet } from 'react-native'
import { Colors, FontsSizes, Metrics } from '../../themes'

const DISMISS_ALL_HEIGHT = 50

export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.black,
    paddingBottom: DISMISS_ALL_HEIGHT,
  },
  postContainer: {
    width: '100%',
    height: 170,
    padding: 10,
  },
  postContainerSelected: {
    backgroundColor: Colors.gray,
  },
  postTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postStatus: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  postUnreadStatus: {
    backgroundColor: Colors.blue,
  },
  postAuthor: {
    color: Colors.white,
    marginRight: 10,
    fontSize: FontsSizes.large,
  },
  postEntryDate: {
    color: Colors.white,
  },
  postMiddleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    height: '60%',
    overflow: 'hidden',
  },
  postThumbnail: {
    width: 80,
    height: 80
  },
  postTitle: {
    flex: 1,
    color: Colors.white,
    marginHorizontal: 10,
  },
  postArrow: {
    color: Colors.white,
  },
  postBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  postDismissButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postDismissIcon: {
    color: Colors.green,
    marginRight: 10,
  },
  postDismissText: {
    color: Colors.white,
  },
  postCommentsNumber: {
    color: Colors.green,
  },
  postSeparator: {
    height: 1,
    width: '90%',
    backgroundColor: Colors.lightgray,
    alignSelf: 'center',
  },
  dismissAllContainer: {
    backgroundColor: Colors.black,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    height: DISMISS_ALL_HEIGHT,
    justifyContent: 'center',
  },
  dismissAllText: {
    color: Colors.green,
  }
})
