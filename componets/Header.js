import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {
    return (
        <Appbar.Header style={{backgroundColor: 'yellow'}}>
        <Appbar.Content title = "Rock Paper Scissors" 
            style = {{alignItems:'center', transform: [
                {scaleX: 1.5}, {scaleY: 1.5}
            ]}}
        />


        </Appbar.Header>
)
}
export default Header;