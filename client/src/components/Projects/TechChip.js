import React from 'react'
import { Chip, Avatar, makeStyles } from '@material-ui/core'

const TechChip = ({ tech }) => {
  const classes = makeStyles((theme) => ({
    chip: {
      backgroundColor: tech.color,
      color: tech.fontColor,
    },
    chipImg: {
      padding: '2px',
    },
  }))()

  const logo = tech.logo
    ? <Avatar alt={tech.name} src={tech.logo} />
    : <Avatar>{tech.name.substring(0, 1)}</Avatar>
  return (
    <Chip
      classes={{
        root: classes.chip,
        avatar: classes.chipImg,
      }}
      label={tech.name}
      avatar={logo}
      color={tech.color}
    />
  )
}

export default TechChip
