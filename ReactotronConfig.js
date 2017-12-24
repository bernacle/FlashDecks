import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
} from 'reactotron-react-native'

  Reactotron
    .configure({
      name: 'React Native'
    })
    .use(asyncStorage())
    .connect()
