import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({imagen, nombre, descripcion, color, texto}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Img className='imagenes' variant="top" src={imagen} />
      <Card.Title>{nombre}</Card.Title>
      <Card.Text className='parrafo'  > {descripcion}</Card.Text>
      <div className='tipos'>
        <Tags 
          color={color} 
          texto={texto} 
        />
      </div>
    </Card.Body>
    </Card>
  )
}

export default MyCard