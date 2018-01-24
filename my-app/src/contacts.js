
var contacts = [
    { key: 1, name: "Test User", email: "testuser@email.com" },
    { key: 2, name: "Testy" }
]

var listElements = contacts
    .filter(function (contact) { return contact.email; })
    .map(function (contact) {
        return React.createElement('li', { key: contact.key },
            React.createElement('h2', {}, contacts.name),
            React.createElement('a', {href: 
            'mailto:'+contact.email}, contact.email)
        )
    })

    var rootElement =
    React.createElement('div', {},
React.createElement('h1', {}, "Contacts"),

React.createElement('ul', {}, listElements)
)

ReactDOM.render(rootElement, document.getElementById('react-app'))