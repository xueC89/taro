import { Component, PropsWithChildren } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer } from 'mobx-react'
import { useInjectedStore } from '@/hooks'
import './index.scss'

type Store = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

const Index = () => {
  const store = useInjectedStore<Store>('store');
  const { counterStore } = store;
  const { counter } = counterStore

  const increment = () => {
    counterStore.increment()
  }

  const decrement = () => {
    counterStore.decrement()
  }

  const incrementAsync = () => {
    counterStore.incrementAsync()
  }

  return (
    <View className='index'>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>Add Async</Button>
      <Text>{counter}</Text>
    </View>
  )
}

export default observer(Index)
// export default inject('store')(observer(Index))
