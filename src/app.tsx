import { FC, PropsWithChildren } from 'react'
import { observer, Provider } from 'mobx-react'
import counterStore from './store/counter'
import './app.scss'

const store = {
  counterStore: new counterStore()
}

const App: FC<PropsWithChildren> = (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default observer(App);
