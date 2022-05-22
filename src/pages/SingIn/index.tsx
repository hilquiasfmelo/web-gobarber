import React, { useCallback, useContext, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import * as Valid from 'yup';
import LogoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Content, Background } from './styles';
import { GetValidationErrors } from '../../utils/GetValidationErrors';
import { AuthContext } from '../../context/AuthContext';

type SignInFormData = {
  email: string;
  password: string;
}

export const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    // Validação
    try {
      formRef.current?.setErrors({});

      const schema = Valid.object().shape({
        email: Valid.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Valid.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Valid.ValidationError) {
        const errors = GetValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }

    signIn({
      email: data.email,
      password: data.password,
    });
  }, [signIn]);

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" type="text" icon={FiMail} placeholder="Seu melhor e-Mail" />
          <Input name="password" type="password" icon={FiLock} placeholder="Sua senha preferida" />

          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="account">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};
