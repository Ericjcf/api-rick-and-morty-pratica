import Container from "./styles.js";
export default function CardStatus({ pName, pStatus, pImage }) {
  return (
    <Container status={pStatus}>
      <p>{pName} </p>
      <figure>
        <img src={pImage} alt="imagem do personagem da série rick and morty" />
      </figure>
      <span>{pStatus}</span>
    </Container>
  );
}
