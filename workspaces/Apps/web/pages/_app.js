import { useCreateStore, Provider } from '@theorylabs/clock-state'

export default function App({ Component, pageProps }) {
  const createStore = useCreateStore(pageProps.initialZustandState)
  return (
    <Provider createStore={createStore}>
      <Component {...pageProps} />
    </Provider>
  )
}
