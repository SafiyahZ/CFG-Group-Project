import React from 'react';
import PropTypes from 'prop-types'
import "./button.css";

const Button = ({ message = "Click Here" }) => {
return (
<button className="button" type="button">
<h2 className="button_text">
{message}
</h2>
</button>
);
}

Button.propTypes = {
message: PropTypes.string
}

export default Button;