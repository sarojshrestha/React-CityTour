import React, { Component } from 'react';
import Tour from '../Tour/';
import './touristlist.scss';
import { tourData } from '../../tourData';

class TouristList extends Component {
    state = {
        tours: tourData
    }
    deleteTour = (tour) => {
        const tours = this.state.tours.filter(t => t.id != tour.id);
        this.setState({ tours });
    }
    render() {
        const tours = this.state.tours;

        return (<div>
            Hello from TouristList
            <Tour tours={tours} onDelete={this.deleteTour} />
        </div>);
    }
}

export default TouristList;