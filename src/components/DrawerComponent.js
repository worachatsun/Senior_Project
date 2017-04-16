import React, { Component } from 'react'
import { Text } from 'react-native'
import Drawer from 'react-native-drawer'
import {Actions, DefaultRenderer} from 'react-native-router-flux'
import { DrawerContent } from '../common/DrawerContent'

export default class NavigationDrawer extends Component {
    render(){
        const state = this.props.navigationState
        const children = state.children
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                content={<DrawerContent />}
                type="displace"
                tapToClose={true}
                openDrawerOffset={0.3}
                panCloseMask={0.2}
                negotiatePan={true}
                style={{shadowColor: '#000000'}}
                tweenHandler={(ratio) => ({
                 main: { opacity:Math.max(0.54,1-ratio) }
            })}>
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        )
    }
}