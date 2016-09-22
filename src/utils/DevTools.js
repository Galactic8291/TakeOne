import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

// createDevTools takes a monitor and produces a DevTools Component
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' defaultPosition='left'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
)

export default DevTools
