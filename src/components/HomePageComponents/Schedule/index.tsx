import React from "react";

import {
  ArrowRightIcon,
  BoxData,
  CancelIcon,
  CancelIconButton,
  ClockIcon,
  Container,
  DoTagIcon,
  DoTagIconButton,
  Form,
  RescheduleButton,
  Title,
} from "./styles";

const Schedule: React.FC = () => {
  return (
    <Container>
      <Title>
        Agendamento para: <strong>José Augusto da Silva - 12345</strong> |
        <span>
          {" "}
          Já existe Agendamento: <strong>Sim (01/01/2021)</strong>
        </span>{" "}
        |
        <span>
          {" "}
          Último Crachá em: <strong>Primeira Vez</strong>
        </span>
      </Title>

      <Form>
        <BoxData>
          <label htmlFor="date">DATA</label>
          <input name="date" type="text" placeholder="dd/mm/aaaa" />
        </BoxData>

        <BoxData>
          <label htmlFor="time">HORA</label>
          <input name="time" type="text" placeholder="HH:mm" />
        </BoxData>

        <BoxData>
          <ArrowRightIcon />
        </BoxData>

        <BoxData>
          <RescheduleButton>
            <ClockIcon />
            <span>Reagendar</span>
          </RescheduleButton>
        </BoxData>

        <BoxData>
          <DoTagIconButton>
            <DoTagIcon />
            <span>Emitir Crachá Agora</span>
          </DoTagIconButton>
        </BoxData>

        <BoxData>
          <CancelIconButton>
            <CancelIcon />
            <span>Fechar</span>
          </CancelIconButton>
        </BoxData>
      </Form>
    </Container>
  );
};

export default Schedule;
