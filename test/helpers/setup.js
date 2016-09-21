import jsdom from 'jsdom'
import React from 'react'

global.document = jsdom.jsdom('<body><body/>')
global.window = document.defaultView
global.navigator = window.navigator
global.React = React

