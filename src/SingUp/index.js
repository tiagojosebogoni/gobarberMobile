import React, {  useRef } from 'react';
import { Image } from 'react-native';

import logo from '../assets/logo.png';

import Background from '../Background'
import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText} from './styles';

export default function SignIp({navigation}) {
  const emailRef = useRef()
  const passowrdRef = useRef()

  function handleSubmit(){
    
  }

  return (
    <Background>
      <Container>
        <Image source={logo}/>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keybordType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha"
            ref={passowrdRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={()=>{navigation.navigate('SignUp')}}> 
          <SignLinkText> Criar conta grautita </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
