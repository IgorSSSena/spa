import React, { useState, useEffect } from "react";
import {
  Container,
  InputPassword,
  Label,
  DivPassIcon,
  DivPassword,
  Title,
  ButtonConfirm,
  DivMessage,
} from "./styles";
import IconSystem from "../../../../assets/IconSystem";
import Headline from "../../../../assets/FontSystem/Headline";

const FirstLogin = () => {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [message, setMessage] = useState("");
  const [div, setDiv] = useState(false);
  const [verificarSenha, setVerificarSenha] = useState(false);

  const handleChangeSenha = (event) => {
    const { value } = event.target;
    setSenha(value);
  };

  const handleChangeConfirmarSenha = (event) => {
    const { value } = event.target;
    setConfirmarSenha(value);
  };

  const handleVerificarSenha = () => {
    setVerificarSenha(true);
  };

  useEffect(() => {
    if (verificarSenha) {
      if (senha === confirmarSenha) {
        if (senha.length < 6 || confirmarSenha.length < 6) {
          setMessage("password is weak needs at least 6 characters");
          setDiv(true);
        } else {
          setMessage("The Passwords match");
          setDiv(false);
        }
      } else {
        setMessage("Passwords do not match");
        setDiv(true);
      }
    }
  }, [verificarSenha, senha, confirmarSenha]);

  return (
    <Container>
      <Title>
        <Headline type={"Headline3"} name={"First Login"} />
      </Title>
      <DivPassword>
        <Label>Enter New Password</Label>
        <InputPassword
          type="password"
          placeholder="●●●●●●●●"
          id="senha"
          value={senha}
          onChange={handleChangeSenha}
        ></InputPassword>
        <DivPassIcon>
          <IconSystem icon="Lock" width={"20px"} height={"20px"} />
        </DivPassIcon>
      </DivPassword>
      <DivPassword>
        <Label>Confirm Password</Label>
        <InputPassword
          type="password"
          placeholder="●●●●●●●●"
          id="confirmarSenha"
          value={confirmarSenha}
          onChange={handleChangeConfirmarSenha}
        />
        <DivPassIcon>
          <IconSystem icon="Lock" width={"20px"} height={"20px"} />
        </DivPassIcon>
      </DivPassword>
      {div && (
        <>
          <DivMessage>{message}</DivMessage>
        </>
      )}
      <ButtonConfirm onClick={handleVerificarSenha}>
        Confirm Password
      </ButtonConfirm>
    </Container>
  );
};

export default FirstLogin;