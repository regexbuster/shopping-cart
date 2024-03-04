import PropTypes from 'prop-types';

import '../styles/item-cube.css';

function ItemCube(props) {
    const image = props.image;
    const title = props.title;

    return (
        <div className="item-cube">
            <img src={image} />
            <p>{title}</p>
        </div>
    );
}

ItemCube.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string
}

export default ItemCube;