import ListGroup from 'react-bootstrap/ListGroup';
import { clientsData } from "../data/clients"

export default function Client() {



    let chemists = clientsData.filter(ch => ch.profession === 'chemist')

    console.log(chemists)

    return (
        <div>
            <ListGroup className='w-50 m-auto my-4'>
                {
                    clientsData.map(client =>
                        <ListGroup.Item key={client.id}>{client.name} - {client.profession}</ListGroup.Item>
                    )
                }
            </ListGroup>
            <hr />
            <ListGroup className='w-50 m-auto my-4'>
                {
                    chemists.map(client =>
                        <ListGroup.Item key={client.id}>{client.name} - {client.profession}</ListGroup.Item>
                    )
                }
            </ListGroup>
        </div>
    )
}
