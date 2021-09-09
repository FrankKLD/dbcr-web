import React, { useEffect, useState } from "react";
import { All, Waiting, Pending, Canceled, Success } from "../../default/Marks";

import {
  Container,
  HeaderArea,
  MarksArea,
  MarksSelectedArea,
  Title,
} from "./styles";

const LastShcedules: React.FC = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsWaiting(false);
    setIsPending(false);
    setIsCanceled(false);
    setIsSuccess(false);
  }, []);
  return (
    <Container>
      <HeaderArea>
        <Title>
          <span>Últimos Agendamentos</span>
        </Title>
        <MarksArea>
          {!isWaiting && <Waiting />}
          {!isPending && <Pending />}
          {!isCanceled && <Canceled />}
          {!isSuccess && <Success />}
        </MarksArea>
      </HeaderArea>
      <MarksSelectedArea>
        <b>Selecionados: </b>
        <All />
        {isWaiting && <Waiting />}
        {isPending && <Pending />}
        {isCanceled && <Canceled />}
        {isSuccess && <Success />}
      </MarksSelectedArea>
    </Container>
  );
};

export default LastShcedules;
