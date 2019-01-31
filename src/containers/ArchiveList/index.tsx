import * as React from 'react'

import { LiveArchive, State } from '../../types'

import { ListItemText } from '@material-ui/core'
import { ListItemIcon } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import { List } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import { Folder } from '@material-ui/icons'
import { connect } from 'react-redux'
import { getLiveArchiveList } from '../LiveArchiveById/selectors'
import { selectLiveArchive } from '../MainPage/operations'

type Props = {
  liveArchives: LiveArchive[]
  onClickArchive: (id: string | null) => void
}

const ArchiveList: React.SFC<Props> = props => {
  const { liveArchives } = props
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
        {liveArchives.map(archive => (
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
  liveArchives: LiveArchive[]
}
type DProps = {
  onClickArchive: (id: string | null) => void
}
export default connect<SProps, DProps, OProps, State>(
  (state, oprops) => ({
    liveArchives: getLiveArchiveList(state),
  }),
  { onClickArchive: selectLiveArchive }
)(ArchiveList)
