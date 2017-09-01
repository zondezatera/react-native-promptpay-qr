import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppRegistry, StyleSheet, View } from 'react-native'
import generatePayload from 'promptpay-qr'
import QRCode from 'react-native-qrcode'
  
class PromptPayQR extends Component {
  static propTypes = {
    payCode: PropTypes.string,
    amount: PropTypes.number,
    size: PropTypes.number,
    fgColor: PropTypes.string,
    fgColor: PropTypes.string,
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number
    ])
  }
  static defaultProps = {
    payCode: '',
    amount: 0,
    size: 200,
    bgColor: 'black',
    fgColor: 'white'
  }
  render() {
    const {style, size, bgColor, fgColor} = this.props
    const promptpayCode = generatePayload(payCode, { amount })
    return (
      <View style={[styles.container, style]}>
        <QRCode
          value={promptpayCode}
          size={size}
          bgColor={bgColor}
          fgColor={fgColor}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
  }
})

AppRegistry.registerComponent('PromptPayQR', () => PromptPayQR)

export default PromptPayQR