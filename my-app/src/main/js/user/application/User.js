class User extends React.Component {
    render() {
        var user = this.props.employees.map(employee =>
            <User key={user._links.self.href} user={user} />
        );
        return (
            <table>
                <tbody>
                    <tr>
                        <th>{this.props.user.id}</th>
                        <th>{this.props.user.name}</th>
                        <th>{this.props.user.email}</th>
                    </tr>
                    {user}
                </tbody>
            </table>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('react')
)
