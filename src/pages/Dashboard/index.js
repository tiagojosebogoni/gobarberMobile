import React from 'react';
import { View } from 'react-native';
import icon from 'react-native-vector-icons/MaterialIcons'
import Background from '../../components/Background'
import Appointment from '../../components/Appointments'
 import { Container, Title, List } from './styles';

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List 
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <Appointment data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};