import React, { Component } from 'react';
import './tour.scss';

class Tour extends Component {
    state = {
        showInfo: false
    };
    handleShowInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    }
    render() {

        const { tours, onDelete } = this.props;
        return (
            <section className="tourlist">
                {
                    tours.map(tour => (
                        <article key={tour.id} className="tour">
                            <div className="img-container">
                                <img src={tour.img} alt={tour.name} />
                                <span className="close-btn" onClick={() => onDelete(tour)}>
                                    <i className="fas fa-window-close" />
                                </span>
                            </div>

                            <div className="tour-info">
                                <h3>{tour.city}</h3>
                                <h4>{tour.name}</h4>
                                <h5>info {" "}
                                    <span onClick={this.handleShowInfo}>
                                        <i className="fas fa-caret-square-down"></i>
                                    </span>
                                </h5>
                                {this.state.showInfo && <p>{tour.info}</p>}
                            </div>

                        </article>
                    ))
                }
            </section>);
    }
}

export default Tour;