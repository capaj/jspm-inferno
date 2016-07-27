import Inferno from 'inferno'
import counter from '../stores/example-store'
import {observer} from 'mobx-inferno'

const Home = (props) => {
  return <div onClick={() => counter.value++}>click to increase counter value: {counter.value}</div>
}

export default observer(Home)
