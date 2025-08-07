import React from 'react';
class List extends React.Component {
    render() {
        let cars = ['tata', 'honda', 'maruti', 'hundai', 'toyota']
        return (
            cars.map((car, ind) => {
                return <li>{ind} - {car}</li>
            })
        )
    }
}
export default List;
		(OR)
import React from 'react';
class List extends React.Component {
    render() {
        let cars = ['tata', 'honda', 'maruti', 'hundai', 'toyota'];
		let carList = cars.map(car => <h2>{car}</h2>)
        return <div>{carList}</div>
    }
}
export default List;
