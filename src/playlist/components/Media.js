import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Media.css'

class Media extends PureComponent {

    constructor(props){
        super(props)

        this.state = {
            title: this.props.title,
            author: this.props.author,
            cover: this.props.cover
        }
    }

    // Los nuevos estandares de ECMAScript7 hacen odo lo de arriba de la siguiente manera
    // Con una funcion de flecha no necesitas poner el .bind(this) en el constructor
    // Ahora de esta manera se hereda el conexto del padre
    handleClick = (event) => {
        this.props.openModal(this.props)
    }

    render() {
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img
                        src={this.state.cover}
                        alt=""
                        width={260}
                        height={160}
                        className="Media-image"
                    />
                    <h3 className="Media-title">{this.state.title}</h3>
                    <p className="Media-author">{this.state.author}</p>
                </div>
            </div>
        );
    }
}

Media.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video','audio']).isRequired,
}

export default Media;
