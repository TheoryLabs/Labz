import useInterval from '@theorylabs/use-interval-hook'
import Clock from '@theorylabs/clock-component'
import Counter from '@theorylabs/counter-component'
import Nav from '@theorylabs/nav-component'
import Person from '@theorylabs/person-component'
import { useStore } from '@theorylabs/clock-state'


export default function Page() {
  const { tick } = useStore()

  // Tick the time every second
  useInterval(() => {
    tick(Date.now(), true)
  }, 1000)

  return (
    <>
      <Nav />
      <Clock />
      <Counter />
    </>
  )
}
