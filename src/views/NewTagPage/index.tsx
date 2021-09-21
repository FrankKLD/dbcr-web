import React from "react";

import {
  CheckColLineInput,
  ColLineInput,
  Container,
  Content,
  DataArea,
  Input,
  Label,
  LineInput,
  TagArea,
  Title,
  TitleDataArea,
} from "./styles";

const NewTagPage: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Emissão de Crachá</Title>
        <TagArea>
          <DataArea>
            <TitleDataArea>Dados do Colaborador</TitleDataArea>

            <form>
              <LineInput>
                <ColLineInput>
                  <Label htmlFor="id">MATRÍCULA</Label>
                  <Input id="id" name="id" placeholder="Número da Matrícula" />
                </ColLineInput>
                <CheckColLineInput>
                  <Input
                    id="check"
                    name="check"
                    type="checkbox"
                    value="Teste"
                  />
                  <Label htmlFor="check">Teste</Label>
                </CheckColLineInput>
              </LineInput>

              <LineInput>
                <ColLineInput>
                  <Label htmlFor="id">MATRÍCULA</Label>
                  <Input id="id" name="id" placeholder="Número da Matrícula" />
                </ColLineInput>
              </LineInput>
            </form>
          </DataArea>
          <DataArea>
            <TitleDataArea>Dados do Colaborador</TitleDataArea>
          </DataArea>
        </TagArea>
      </Content>
    </Container>
  );
};

export default NewTagPage;
