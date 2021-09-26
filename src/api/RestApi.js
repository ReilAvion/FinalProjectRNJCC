import React from 'react'
import { render } from 'react-dom'
import { View, Text } from 'react-native'

class RestApi extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.apiCall()
  }

  async apiCall() {
    const resp = await fetch('http://worldtimeapi.org/api/timezone')
    const respJson = await resp.json()
    this.setState({ data: respJson.datetime })
  }

  render() {
    return (
      <View
        data={this.state.data}
        renderItem={({ item }) => <Text>{item.datetime} </Text>}
      />
    )
  }
}
export default RestApi
