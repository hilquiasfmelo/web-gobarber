import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Valid from 'yup';
import {
  FiLock, FiMail, FiUser, FiArrowLeft,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { GetValidationErrors } from '../../utils/GetValidationErrors';
import {
  Container, Content, Background, AnimationContainer,
} from './styles';
import { API } from '../../services/API';
import { useToast } from '../../hooks/Toast';

type SingUpFormData = {
  name: string;
  email: string;
  password: string;
}

export const SingUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: SingUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Valid.object().shape({
        name: Valid.string().required('Nome obrigatório'),
        email: Valid.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Valid.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await API.post('/users', data);

      addToast({
        type: 'success',
        title: 'Owl, Usuário cadastro com sucesso ',
      });
    } catch (err) {
      if (err instanceof Valid.ValidationError) {
        const errors = GetValidationErrors(err);
        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro ao cadastrar usuário ',
        description: 'Ocorreu um erro ao realizar o cadastro.',
      });
    }
  }, [addToast]);

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={LogoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="name" type="text" icon={FiUser} placeholder="Seu nome" />
            <Input name="email" type="text" icon={FiMail} placeholder="Seu melhor e-Mail" />
            <Input name="password" type="password" icon={FiLock} placeholder="Sua senha preferida" />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
