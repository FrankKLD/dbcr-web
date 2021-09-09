import React from "react";

import {
  AccessTimeIcon,
  CancelIcon,
  CheckAllIcon,
  CheckIcon,
  MarkAll,
  MarkCanceled,
  MarkPending,
  MarkSuccess,
  MarkWaiting,
  PendingIcon,
} from "./styles";

export const All: React.FC = () => {
  return (
    <MarkAll title="Todos os Filtros">
      <span>Todos</span>
      <CheckAllIcon />
    </MarkAll>
  );
};

export const Waiting: React.FC = () => {
  return (
    <MarkWaiting title="Aguardando">
      <span>Aguardando</span>
      <AccessTimeIcon />
    </MarkWaiting>
  );
};

export const Pending: React.FC = () => {
  return (
    <MarkPending title="Pendente">
      <span>Pendente</span>
      <PendingIcon />
    </MarkPending>
  );
};

export const Canceled: React.FC = () => {
  return (
    <MarkCanceled title="Cancelado">
      <span>Cancelado</span>
      <CancelIcon />
    </MarkCanceled>
  );
};

export const Success: React.FC = () => {
  return (
    <MarkSuccess title="Sucesso">
      <span>Sucesso</span>
      <CheckIcon />
    </MarkSuccess>
  );
};
