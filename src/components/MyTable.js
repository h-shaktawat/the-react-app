import { Table } from 'react-bootstrap';
import '../assets/custom.css'
import style from '../assets/style.module.css'

function MyTable() {

    // Simple Array 
    const students = ['hemendra', 'divya', 'pihu'];

    // Array an Object
    const users = [
        {
            name: 'hemendra', email: 'hemendra@gmail.com', contact: 8003836264, address: [
                { houseNo: '101', city: 'Udaipur' },
                { houseNo: '101', city: 'Bhilwara' }
            ]
        },
        {
            name: 'divya', email: 'divya@gmail.com', contact: 9785187343, address: [
                { houseNo: '101', city: 'Udaipur' },
                { houseNo: '101', city: 'Bhilwara' }
            ]
        },
        {
            name: 'pihu', email: 'pihu@gmail.com', contact: 1234567890, address: [
                { houseNo: '101', city: 'Udaipur' },
                { houseNo: '101', city: 'Bhilwara' }
            ]
        }
    ]

    return (

        <div className="App">

            <h1 className='external'>
                Simple Array List
                <br />
                <br />
                {
                    students.map((student, key) =>
                        <p key={key}>Student Name : {student}</p>
                    )
                }
            </h1>

            <br />
            <br />

            <div style={{ color: "red", backgroundColor: "white" }}>
                Array an Object
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, key) =>
                                <tr key={key}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contact}</td>
                                    <td>
                                        <Table striped bordered hover>
                                            <tbody>
                                                {
                                                    user.address.map((addresses, addressKey) =>
                                                        <tr key={addressKey}>
                                                            <td>
                                                                {addresses.houseNo}
                                                            </td>
                                                            <td>
                                                                {addresses.city}
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                    <tfoot></tfoot>
                </Table>
            </div>


            <br />
            <br />

            <h1 className={style.module}>
                Module Style Heading
            </h1>

        </div>
    )
}

export default MyTable;