var ContactItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
    },

    render: function () {
        return(
            React.createElement('li', {className: 'Contact'},
        React.createElement('h2', { className: 'Contact-name' },
        trhis.props.name)
            )
        )
    },
});