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
import { ConfidenceLib, ResultRecord } from '../../types'

export type Props = {
  addRecord: (v: ResultRecord) => void
  records: ResultRecord[]
  startTime: number | null
  endTime: number | null
  talkPointsByMin: { [key: string]: number }
  confidencePointsByMin: ConfidenceLib
}
export interface Actions {}

const SpeechArea: React.SFC<Props> = (props: Props) => {
  if (!props.startTime || !props.endTime) {
    return <p>loading...</p>
  }
  const m = moment(props.startTime)
  const end = moment(props.endTime)
  const data = [] as any
  while (m.isBefore(end)) {
    const point = props.talkPointsByMin[m.format('YYYY-MM-DDTHH:mm')] || 0
    data.push({ point, timestamp: m.format('HH:mm') })
    m.add(1, 'minutes')
  }

  props.talkPointsByMin
  return (
    <div>
      <div>
        <h5>texts</h5>
        {props.records.map((record, i) => (
          <p key={i}>{record.text}</p>
        ))}
      </div>
      <div>
        <BarChart width={730} height={250} data={data}>
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
