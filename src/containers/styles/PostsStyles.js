import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../themes'

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.black,
  },
  postContainer: {
    width: '100%',
    height: 160,
    padding: 10,
  },
  postContainerSelected: {
    backgroundColor: Colors.grey,
  },
  postTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postUnreadStatus: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.blue,
    marginRight: 10,
  },
  postAuthor: {
    color: Colors.white,
    marginRight: 10,
  },
  postEntryDate: {
    color: Colors.white,
  },
  postMiddleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
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
    color: Colors.grey,
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
    backgroundColor: Colors.grey,
    alignSelf: 'center',
  },
})
