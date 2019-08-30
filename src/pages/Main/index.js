import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation 
} from './styles';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

export default function Main (){
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="Visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 2.000.000.000,00</Description>
              
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 1.000,00 recebida de Kamila Simões Antônio hoje às 12:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
