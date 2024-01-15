import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const Tags = ({color, texto}) => {
  return (
    <Stack direction="vertical" gap={2}>
    <Badge bg={color}>{texto}</Badge>
  </Stack>
  )
}

export default Tags;