import React from "react";
import CanvasTagDrawer from "../../components/CanvasTagDrawer";

import {
  AloneColLineInput,
  BackIcon,
  BackIconButton,
  BoxData,
  ButtonArea,
  ButtonConfigArea,
  CancelIcon,
  CancelIconButton,
  ColLineInput,
  Container,
  Content,
  DataArea,
  DataTagArea,
  DoTagIcon,
  DoTagIconButton,
  Form,
  FrontIcon,
  FrontIconButton,
  Input,
  Label,
  LineConfigInput,
  LineInput,
  Select,
  TagArea,
  TagConfigArea,
  Title,
  TitleDataArea,
  TotalTagConfigArea,
} from "./styles";

const NewTagPage: React.FC = () => {
  const draw = (ctx: any, frameCount: any) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  return (
    <Container>
      <Content>
        <Title>Emissão de Crachá</Title>
        <TagArea>
          <DataArea>
            <TitleDataArea>Dados do Colaborador</TitleDataArea>

            <Form>
              <LineInput>
                <ColLineInput>
                  <Label htmlFor="id">MATRÍCULA</Label>
                  <Input id="id" name="id" placeholder="Número da Matrícula" />
                </ColLineInput>
                <AloneColLineInput>
                  <Input id="check" name="check" type="checkbox" />
                  <Label htmlFor="check">
                    Já foram emitidos outros crachás para este Colaborador.
                    <b> Deseja emitir como 2a VIA?</b>
                  </Label>
                </AloneColLineInput>
              </LineInput>

              <LineInput>
                <ColLineInput className={"full-width"}>
                  <Label htmlFor="fullName">NOME COMPLETO</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Número da Matrícula"
                  />
                </ColLineInput>
              </LineInput>

              <LineInput>
                <ColLineInput className={"full-width"}>
                  <Label htmlFor="role">FUNÇÃO</Label>
                  <Input id="role" name="role" placeholder="Função" />
                </ColLineInput>
              </LineInput>

              <LineInput>
                <ColLineInput className={"full-width"}>
                  <Label htmlFor="filial">FILIAL</Label>
                  <Input id="filial" name="filial" placeholder="Filial" />
                </ColLineInput>
              </LineInput>

              <LineInput>
                <ColLineInput>
                  <Label htmlFor="picture">FOTO</Label>
                  <Input
                    id="picture"
                    name="picture"
                    placeholder="Carregar Foto ..."
                  />
                  <span>
                    O upload de foto deverá ter uma das seguintes extensões:{" "}
                    <strong>*.png, *.jpeg, *.jpg</strong>
                  </span>
                </ColLineInput>
                <AloneColLineInput>
                  <Label>Nome do arquivo</Label>
                </AloneColLineInput>
              </LineInput>
              <ButtonArea>
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
              </ButtonArea>
            </Form>
          </DataArea>

          <DataTagArea>
            <CanvasTagDrawer draw={draw} />
          </DataTagArea>
        </TagArea>

        <TotalTagConfigArea>
          <TagConfigArea>
            <LineConfigInput>
              <ColLineInput>
                <Label htmlFor="tagModels">MODELO DO CRACHÁ</Label>
                <Select id="tagModels" name="tagModels">
                  <option value="DBCR_tag_modell_0001">
                    DBCR_tag_modell_0001
                  </option>
                  <option value="DBCR_tag_modell_0002">
                    DBCR_tag_modell_0002
                  </option>
                  <option value="DBCR_tag_modell_0003">
                    DBCR_tag_modell_0003
                  </option>
                </Select>
              </ColLineInput>
            </LineConfigInput>

            <ButtonConfigArea>
              <BoxData>
                <FrontIconButton>
                  <FrontIcon />
                  <span>FRENTE</span>
                </FrontIconButton>
              </BoxData>
              <BoxData>
                <BackIconButton>
                  <BackIcon />
                  <span>VERSO</span>
                </BackIconButton>
              </BoxData>
            </ButtonConfigArea>
          </TagConfigArea>
        </TotalTagConfigArea>
      </Content>
    </Container>
  );
};

export default NewTagPage;
