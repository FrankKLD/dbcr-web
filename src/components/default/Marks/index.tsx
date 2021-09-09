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
    <MarkAll>
      <span>Todos</span>
      <CheckAllIcon />
    </MarkAll>
  );
};

export const Waiting: React.FC = () => {
  return (
    <MarkWaiting>
      <span>Aguardando</span>
      <AccessTimeIcon />
    </MarkWaiting>
  );
};

export const Pending: React.FC = () => {
  return (
    <MarkPending>
      <span>Pendente</span>
      <PendingIcon />
    </MarkPending>
  );
};

export const Canceled: React.FC = () => {
  return (
    <MarkCanceled>
      <span>Cancelado</span>
      <CancelIcon />
    </MarkCanceled>
  );
};

export const Success: React.FC = () => {
  return (
    <MarkSuccess>
      <span>Sucesso</span>
      <CheckIcon />
    </MarkSuccess>
  );
};
