import React, { Component } from 'react'
import Drawer from 'react-native-drawer'

class MenuSideBar extends Component {
    closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<ControlPanel />}
        >
        <MainView />
      </Drawer>
    )
  }
}

export default MenuSideBar