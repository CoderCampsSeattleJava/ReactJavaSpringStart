import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Cart, Product, CheckoutButton, cartLocalization, cartReducer, setCartCurrency, } from 'react-shopping-cart';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

const { getDefaultLocalization } = cartLocalization;

const learningCourses = {
    name: 'Courses',
    learning: 'learning courses',
    course1: 'Java',
    course2: 'HTML',
    course3: 'React.js',
};


const store = createStore(
    combineReducers(
        {
            cart: cartReducer,
            // Your own reducers, sir
        }
    )
);

class App extends PureComponent {

    state = {
        product: {
            name: 'Courses',
            id: 'learning',
            path: './screens/videos',
            properties: {
                courses: ['Java', 'HTML', "React.js", {
                }],
            },
            // propertiesToShowInCart: ['color'],
            prices: { USD: 0 },
            imageSrc: '1-483x321.jpeg',
        },
        getProductLocalization:
            getDefaultLocalization(
                // 'product',
                // 'en',
                {
                    ...learningCourses,

                }
            ),
        getCheckoutButtonLocalization:
            getDefaultLocalization(
                // 'checkoutButton',
                // 'en',
                learningCourses,
            ),
        getCartLocalization:
            getDefaultLocalization(
                // 'cart',
                // 'en',
                learningCourses
            )
    };

    render() {

        const {
      product,
            getCheckoutButtonLocalization,
            getProductLocalization,
            getCartLocalization,
    } = this.state;

        const checkoutButtonElement =
            <CheckoutButton
                getLocalization={
                    getCheckoutButtonLocalization
                }
                checkoutURL="./screens/videos/"
            />;
        return (
            <Provider store={store}>
                <div className="container">
                    <Product
                        {...product}
                        checkoutButton={checkoutButtonElement}
                        getLocalization={
                            getProductLocalization
                        }

                    />
                    <Cart
                        checkoutButton={checkoutButtonElement}
                        getLocalization={
                            getCartLocalization
                        }
                    />
                </div>
            </Provider>
        );
    }
}

export default App;