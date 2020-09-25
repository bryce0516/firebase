import React, { Component } from 'react'
import {Container, Content, Header,Body,Title, ListItem, Text} from 'native-base'
export default class Home extends Component {
  render() {
    return (
      <Container>
      <Header>
        <Body>
          <Title>
            React native firevase
          </Title>
        </Body>
      </Header>
        <Content>
          <ListItem onPress={()=> this.props.navigation.navigate('Auth')}>
            <Text>
              authenntication
            </Text>
          </ListItem>
        </Content>
      </Container>
    )
  }
}
