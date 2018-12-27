import * as React from 'react'
import { Actions } from '../../containers/Counter'
import { State } from '../../containers/Counter/reducer'

type Props = State & Actions

const Counter: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="value"
        value={props.value}
        onChange={e => props.updateValue(e.target.value)}
      />
      <br />
      {props.value}
      <br />
      <button
        onClick={() => {
          props.addPrefix()
        }}
      >
        double!
      </button>
    </div>
  )
}

export default Counter
