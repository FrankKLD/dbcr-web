import React, { useEffect, useState } from "react";
import Zoom from "@material-ui/core/Zoom";

import { All, Waiting, Pending, Canceled, Success } from "../../default/Marks";
import {
  ActionsArea,
  CheckIcon,
  Container,
  EyeIcon,
  HeaderArea,
  MarksArea,
  MarksSelectedArea,
  NextButton,
  PagesArea,
  PaginationsArea,
  PreviousButton,
  StyledTooltip,
  Table,
  TableArea,
  TagsIcon,
  Title,
  TrashIcon,
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
        <b>Filtros: </b>
        <All />
        {isWaiting && <Waiting />}
        {isPending && <Pending />}
        {isCanceled && <Canceled />}
        {isSuccess && <Success />}
      </MarksSelectedArea>

      <TableArea>
        <Table>
          <thead>
            <tr>
              <td>#</td>
              <td>Colaborador</td>
              <td>Filial</td>
              <td>Data</td>
              <td>Hora</td>
              <td>Status</td>
              <td>Ações</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>105</td>
              <td className="Left">José Augusto da Silva | 12345</td>
              <td>Loja 01 - Matriz / AM</td>
              <td>01/01/2021</td>
              <td>16:35</td>
              <td>
                <Canceled />
              </td>
              <td>
                <ActionsArea>
                  <StyledTooltip
                    TransitionComponent={Zoom}
                    leaveDelay={300}
                    title={
                      <>
                        <b>Ação CANCELAR</b>
                        <p>Esta ação cancelará este agendamento.</p>
                      </>
                    }
                    arrow
                  >
                    <TrashIcon />
                  </StyledTooltip>

                  <StyledTooltip
                    TransitionComponent={Zoom}
                    leaveDelay={300}
                    title={
                      <>
                        <b>Ação ACEITAR</b>
                        <p>
                          Esta ação aceitará o agendamento, possibilitando a
                          emissão do Crachá.
                        </p>
                      </>
                    }
                    arrow
                  >
                    <CheckIcon />
                  </StyledTooltip>

                  <StyledTooltip
                    TransitionComponent={Zoom}
                    leaveDelay={300}
                    title={
                      <>
                        <b>Ação VISUALIZAR</b>
                        <p>
                          Esta ação visualizará o agendamento, exibindo todas as
                          informações.
                        </p>
                      </>
                    }
                    arrow
                  >
                    <EyeIcon />
                  </StyledTooltip>

                  <StyledTooltip
                    TransitionComponent={Zoom}
                    leaveDelay={300}
                    title={
                      <>
                        <b>Ação EMITIR CRACHÁ</b>
                        <p>
                          Esta ação levará-lo para uma tela de Emissão de
                          Crachá.
                        </p>
                      </>
                    }
                    arrow
                  >
                    <TagsIcon />
                  </StyledTooltip>
                </ActionsArea>
              </td>
            </tr>
            <tr>
              <td>105</td>
              <td className="Left">José Monteiro | 01234</td>
              <td>Loja 01 - Matriz / AM</td>
              <td>01/01/2021</td>
              <td>16:35</td>
              <td>
                <Waiting />
              </td>
              <td>
                <ActionsArea>
                  <TrashIcon />

                  <CheckIcon />

                  <EyeIcon />

                  <TagsIcon />
                </ActionsArea>
              </td>
            </tr>
            <tr>
              <td>105</td>
              <td className="Left">José Augusto da Silva Monteiro | 01234</td>
              <td>Loja 01 - Matriz / AM</td>
              <td>01/01/2021</td>
              <td>16:35</td>
              <td>
                <Success />
              </td>
              <td>
                <ActionsArea>
                  <TrashIcon />

                  <CheckIcon />

                  <EyeIcon />

                  <TagsIcon />
                </ActionsArea>
              </td>
            </tr>
            <tr>
              <td>105</td>
              <td className="Left">José | 01234</td>
              <td>Loja 01 - Matriz / AM</td>
              <td>01/01/2021</td>
              <td>16:35</td>
              <td>
                <Pending />
              </td>
              <td>
                <ActionsArea>
                  <TrashIcon />

                  <CheckIcon />

                  <EyeIcon />

                  <TagsIcon />
                </ActionsArea>
              </td>
            </tr>
          </tbody>
        </Table>

        <PaginationsArea>
          <PreviousButton />

          <PagesArea>
            <div>01</div>
            <div>02</div>
            <div>03</div>
          </PagesArea>

          <NextButton />
        </PaginationsArea>
      </TableArea>
    </Container>
  );
};

export default LastShcedules;
