/* eslint-disable camelcase */
import Slider from '../shared/Slider/Slider';
import StartRating from '../shared/StartRating';
import Favorite from './Favorite';
import Item from './Item';
import Lessor from './Lessor';
import Container from './styles/Publication/Container';
import Features from './styles/Publication/Features';
import LinkShowMore from './styles/Publication/LinkShowMore';
import Precio from './styles/Publication/Precio';
import PublicationContainer from './styles/Publication/PublicationContainer';
import PublicationModule from './styles/Publication/PublicationModule';
import Tipo from './styles/Publication/Tipo';
import Ubicacion from './styles/Publication/Ubicacion';

function Publication({ publication, lessor = false }) {
  const {
    id,
    pictures,
    publication_type,
    price,
    rating,
    bathrooms,
    rooms,
    area,
    street,
    telephone,
    picture,
    email,
    name,
    city,
    availability_date,
  } = publication;

  return (
    <PublicationContainer>
      <Slider slides={pictures} />
      <Favorite />
      <PublicationModule>
        <Tipo>
          {street} • {city}
        </Tipo>
        <Container>
          <Precio> {price}€</Precio>
          <LinkShowMore to={`/publication/${id}`}>Show more</LinkShowMore>
        </Container>
        <Container>
          <Ubicacion>{publication_type}</Ubicacion>
          <StartRating value={rating} disabled={false} />
        </Container>
      </PublicationModule>
      <Features>
        <Item number={bathrooms} type="bathroom" />
        <Item number={rooms} type="bedroom" />
        <Item number={area} type="area" />
        <Item number={availability_date.split('T')[0]} type="availability" />
      </Features>
      {lessor && <Lessor phoneNumber={telephone} url={picture} name={name} email={email} />}
    </PublicationContainer>
  );
}

export default Publication;
