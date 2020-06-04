import * as React from 'react'

import { Live, State } from '../../types'

import { ListItemText } from '@material-ui/core'
import { ListItemIcon } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import { List } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import { Folder } from '@material-ui/icons'
import { connect } from 'react-redux'
import { getLiveList } from '../../store/LiveById/selectors'
import { selectLive } from '../../store/MainPage/operations'

type Props = {
  lives: Live[]
  onClickArchive: (id: string | null) => void
}

const ArchiveList: React.SFC<Props> = props => {
  const { lives } = props
  return (
    <div>
      <List>
        <ListItem button onClick={() => props.onClickArchive(null)}>
          <ListItemIcon>
            <Folder />
          </ListItemIcon>
          <ListItemText primary={'新規 Live'} />
        </ListItem>
        <Divider />
        {lives.map(archive => (
          <ListItem button onClick={() => props.onClickArchive(archive.id)}>
            <ListItemIcon>
              <Folder />
            </ListItemIcon>
            <ListItemText primary={archive.label} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

type OProps = {}
type SProps = {
  lives: Live[]
}
type DProps = {
  onClickArchive: (id: string | null) => void
}
export default connect<SProps, DProps, OProps, State>(
  (state, oprops) => ({
    lives: getLiveList(state),
  }),
  { onClickArchive: selectLive }
)(ArchiveList)
