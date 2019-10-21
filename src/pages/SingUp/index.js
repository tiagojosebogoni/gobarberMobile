import React, {  useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/logo.png';

import Background from '../Background'
import { signUpRequest } from '../store/modules/auth/actions'
import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText} from './styles';

export default function SignIp({navigation}) {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passowrdRef = useRef();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loading = useSelector(state => state.auth.loading)

  function handleSubmit(){
      dispatch(signUpRequest(name, email ,passowrd))
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
            value={name}
            onChangeText={setName}
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
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha"
            ref={passowrdRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={()=>{navigation.navigate('SignUp')}}> 
          <SignLinkText> Criar conta grautita </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
