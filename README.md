# react-native-promptpay-qr

Simple QR code for Promptpay in React native

## Getting Started

### Installation

```bash
npm i react-native-promptpay-qr --save
```

### Basic Usage

```JavaScript
import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import PromptPayQR from 'react-native-promptpay-qr'

class QRcode extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
            <PromptPayQR
              payCode='081-xxx-xxxx'
              amount={200}
            />
        </View>
    )}
}

AppRegistry.registerComponent('PromptPayQR', () => PromptPayQR)
```

### Properties
---
| Props | Type | Default | Description |
|:------|:-----|:--------|:-----------|
| payCode | string | - | ID card number or Phone number ( 081-xxx-xxxx or 1-xxxx-xxxxx-xx-x ) |
| amount | number | 0 | quantity of pay |
| size | number | 128 | size of qr code |
| bgColor | string | '#000' | background of qr code |
| fgColor | string | '#FFF' | foreground of qr code |

## References

- https://github.com/dtinth/promptpay-qr
- https://github.com/cssivision/react-native-qrcode
