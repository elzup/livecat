import moment from 'moment'
import * as React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { GraphRecord } from '../../types'

export type Props = {
  graphData: GraphRecord[]
}
export interface Actions {}

const SpeechArea: React.SFC<Props> = (props: Props) => {
  if (props.graphData.length === 0) {
    return <p>loading...</p>
  }
  return (
    <div>
      <div>
        <BarChart width={730} height={250} data={props.graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="point" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  )
}

export default SpeechArea
