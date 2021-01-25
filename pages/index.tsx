import { HeaderContainer, LogoContainer, MainContainer} from '../styles/pages/Login'
import * as Yup from 'yup';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useCallback, useRef } from 'react';
import Input from '../components/input'
import getValidationErrors from '../utils/getValidationErrors';
interface SingInFromData {
  email: string;
}
export default function Login() {
  const formRef = useRef<FormHandles>(null);
  const Router = useRouter()
  const handleSubmit = useCallback(
    async (data: SingInFromData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email valido'),
        });

        await schema.validate(data, { abortEarly: false });
        console.log('chamou')
        Router.push('/dashboard');
        
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const Errors = getValidationErrors(err);
          formRef.current?.setErrors(Errors);
          return;
        }
      }
    },
    [],
  );
  return (
  <>
    <HeaderContainer>
      <LogoContainer>
        <Image 
          src="/logo-pokedex.png"
          alt="logo pokedex"
          width={220}
          height={45} 
        />
        <Image 
          src="/settings.svg"
          alt="settings"
          width={32}
          height={32} 
        />
      </LogoContainer>
    </HeaderContainer>
    <MainContainer>   
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Image 
            src="/pokeball.svg"
            alt="pokeball"
            width={130}
            height={130} 
        />
        <Input  name="email" placeholder="seu melhor email" />
        <button type="submit">Acessar</button>
      </Form>
    </MainContainer>
  </>
  )
}
