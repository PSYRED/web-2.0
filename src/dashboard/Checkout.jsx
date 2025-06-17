import React, { useState } from 'react';

// Main App component
const App = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        country: '',
        zip: '',
        shippingMethod: 'standard-shipping', // Default to standard
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        saveCard: false,
        checkoutType: 'guest-checkout-radio' // Default to guest
    });

    // State to manage validation errors
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error as user types (basic behavior)
        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    };

    // Validation logic (client-side)
    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        // Required fields check
        const requiredFields = [
            'email', 'firstName', 'lastName', 'address', 'city', 'country', 'zip',
            'cardNumber', 'expirationDate', 'cvv'
        ];

        requiredFields.forEach(field => {
            if (!formData[field].trim()) {
                newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} is required.`;
                isValid = false;
            }
        });

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        // Card Number validation (basic: 16 digits)
        const cardNumberClean = formData.cardNumber.replace(/\s/g, '');
        if (formData.cardNumber && !/^\d{16}$/.test(cardNumberClean)) {
            newErrors.cardNumber = 'Card number must be 16 digits.';
            isValid = false;
        }

        // Expiration Date validation (MM/YY)
        const expDate = formData.expirationDate.trim();
        const dateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        if (expDate && !dateRegex.test(expDate)) {
            newErrors.expirationDate = 'Invalid MM/YY format (e.g., 12/28).';
            isValid = false;
        } else if (expDate) {
            const [month, yearStr] = expDate.split('/');
            const currentYear = new Date().getFullYear() % 100;
            const currentMonth = new Date().getMonth() + 1;

            const inputMonth = parseInt(month, 10);
            const inputYear = parseInt(yearStr, 10);

            if (inputYear < currentYear || (inputYear === currentYear && inputMonth < currentMonth)) {
                newErrors.expirationDate = 'Card has expired.';
                isValid = false;
            }
        }

        // CVV validation (3 or 4 digits)
        const cvvClean = formData.cvv.trim();
        if (formData.cvv && !/^\d{3,4}$/.test(cvvClean)) {
            newErrors.cvv = 'CVV must be 3 or 4 digits.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formIsValid = validateForm();

        if (formIsValid) {
            // In a real app, send formData to your backend
            alert('Order Successfully Placed! (This is a demo)'); // Replace with a custom modal
            console.log('Form Data Submitted:', formData);
            setFormData({ // Reset form
                email: '', phone: '', firstName: '', lastName: '', address: '',
                apartment: '', city: '', country: '', zip: '', shippingMethod: 'standard-shipping',
                cardNumber: '', expirationDate: '', cvv: '', saveCard: false,
                checkoutType: 'guest-checkout-radio'
            });
            setErrors({}); // Clear errors
        } else {
            alert('Please correct the errors in the form.'); // Replace with a custom modal
        }
    };

    // Calculate total dynamically (simplified example)
    const subtotal = 599.99; // Hardcoded for this demo
    const shippingCost = formData.shippingMethod === 'express-shipping' ? 85.00 : 45.00;
    const estimatedTax = 0.00; // Placeholder
    const orderTotal = subtotal + shippingCost + estimatedTax;

    return (
        <div className="min-h-screen flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full bg-white shadow-2xl rounded-2xl p-6 sm:p-10 lg:p-12 space-y-8 md:flex md:space-x-12 md:space-y-0">

                {/* Left Column: Checkout Form */}
                <div className="flex-1">
                    {/* Progress Indicator */}
                    <nav className="flex justify-center mb-8" aria-label="Progress">
                        <ol role="list" className="flex space-x-8">
                            <li className="flex items-center">
                                <span className="flex items-center text-sm font-medium">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white">1</span>
                                    <span className="ml-3 text-blue-600 font-semibold">Shipping</span>
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="flex items-center text-sm font-medium">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500">2</span>
                                    <span className="ml-3 text-gray-500">Payment</span>
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="flex items-center text-sm font-medium">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500">3</span>
                                    <span className="ml-3 text-gray-500">Review</span>
                                </span>
                            </li>
                        </ol>
                    </nav>

                    <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center md:text-left">
                        Complete Your Order
                    </h2>

                    <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                        {/* Express Checkout Section */}
                        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm text-center">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">Express Checkout</h3>
                            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                                <button type="button" className="flex items-center justify-center py-2 px-4 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.png" alt="Apple Pay" className="h-5 mr-2" /> Apple Pay
                                </button>
                                <button type="button" className="flex items-center justify-center py-2 px-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-colors">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 mr-2" /> PayPal
                                </button>
                                <button type="button" className="flex items-center justify-center py-2 px-4 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-700 transition-colors">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Pay_Logo.svg" alt="Google Pay" className="h-5 mr-2 invert" /> Google Pay
                                </button>
                            </div>
                            <div className="relative flex py-5 items-center">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-800 mb-5">Contact Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={validateForm} // Validate on blur
                                        autoComplete="email"
                                        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'error-border' : 'border-gray-300'}`}
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && <p className="error-message">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number (Optional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        autoComplete="tel"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="e.g., +1 (555) 123-4567"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex items-center">
                                <input
                                    id="guest-checkout-radio"
                                    name="checkoutType"
                                    type="radio"
                                    value="guest-checkout-radio"
                                    checked={formData.checkoutType === 'guest-checkout-radio'}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <label htmlFor="guest-checkout-radio" className="ml-2 block text-base font-medium text-gray-700">
                                    Continue as Guest
                                </label>
                            </div>
                            <div className="mt-2 flex items-center">
                                <input
                                    id="login-checkout-radio"
                                    name="checkoutType"
                                    type="radio"
                                    value="login-checkout-radio"
                                    checked={formData.checkoutType === 'login-checkout-radio'}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <label htmlFor="login-checkout-radio" className="ml-2 block text-base font-medium text-gray-700">
                                    Log in to your account
                                </label>
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-800 mb-5">Shipping Address</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onBlur={validateForm}
                                        autoComplete="given-name"
                                        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.firstName ? 'error-border' : 'border-gray-300'}`}
                                        placeholder="John"
                                    />
                                    {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onBlur={validateForm}
                                        autoComplete="family-name"
                                        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.lastName ? 'error-border' : 'border-gray-300'}`}
                                        placeholder="Doe"
                                    />
                                    {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    onBlur={validateForm}
                                    autoComplete="street-address"
                                    className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.address ? 'error-border' : 'border-gray-300'}`}
                                    placeholder="123 Main Street"
                                />
                                {errors.address && <p className="error-message">{errors.address}</p>}
                            </div>
                            <div className="mt-4">
                                <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">Apartment, suite, etc. (optional)</label>
                                <input
                                    type="text"
                                    id="apartment"
                                    name="apartment"
                                    value={formData.apartment}
                                    onChange={handleChange}
                                    autoComplete="address-line2"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Apt 4B"
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        onBlur={validateForm}
                                        autoComplete="address-level2"
                                        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.city ? 'error-border' : 'border-gray-300'}`}
                                        placeholder="Anytown"
                                    />
                                    {errors.city && <p className="error-message">{errors.city}</p>}
                                </div>
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country/Region <span className="text-red-500">*</span></label>
                                    <select
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        onBlur={validateForm}
                                        autoComplete="country-name"
                                        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.country ? 'error-border' : 'border-gray-300'}`}
                                    >
                                        <option value="">Select country...</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="AU">Australia</option>
                                        {/* Add more countries as needed */}
                                    </select>
                                    {errors.country && <p className="error-message">{errors.country}</p>}
                                </div>
                                <div>
                                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">Postal code <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="zip"
                                        name="zip"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        onBlur={validateForm}
                                        autoComplete="postal-code"
                                        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.zip ? 'error-border' : 'border-gray-300'}`}
                                        placeholder="12345"
                                    />
                                    {errors.zip && <p className="error-message">{errors.zip}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Shipping Method */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-800 mb-5">Shipping Method</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <input
                                        id="standard-shipping"
                                        name="shippingMethod"
                                        type="radio"
                                        value="standard-shipping"
                                        checked={formData.shippingMethod === 'standard-shipping'}
                                        onChange={handleChange}
                                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    />
                                    <label htmlFor="standard-shipping" className="ml-3 block text-base font-medium text-gray-700">
                                        Standard Shipping (5-7 business days) - <span className="font-semibold">$45.00</span>
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="express-shipping"
                                        name="shippingMethod"
                                        type="radio"
                                        value="express-shipping"
                                        checked={formData.shippingMethod === 'express-shipping'}
                                        onChange={handleChange}
                                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    />
                                    <label htmlFor="express-shipping" className="ml-3 block text-base font-medium text-gray-700">
                                        Express Shipping (2-3 business days) - <span className="font-semibold">$85.00</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Payment Information */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-800 mb-5">Payment Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">Card number <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="card-number"
                                        name="cardNumber"
                                        value={formData.cardNumber}
                                        onChange={handleChange}
                                        onBlur={validateForm}
                                        placeholder="XXXX XXXX XXXX XXXX"
                                        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.cardNumber ? 'error-border' : 'border-gray-300'}`}
                                    />
                                    {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="col-span-2">
                                        <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700 mb-1">Expiration date (MM/YY) <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="expiration-date"
                                            name="expirationDate"
                                            value={formData.expirationDate}
                                            onChange={handleChange}
                                            onBlur={validateForm}
                                            placeholder="MM/YY"
                                            className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.expirationDate ? 'error-border' : 'border-gray-300'}`}
                                        />
                                        {errors.expirationDate && <p className="error-message">{errors.expirationDate}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="cvv"
                                            name="cvv"
                                            value={formData.cvv}
                                            onChange={handleChange}
                                            onBlur={validateForm}
                                            placeholder="XXX"
                                            className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.cvv ? 'error-border' : 'border-gray-300'}`}
                                        />
                                        {errors.cvv && <p className="error-message">{errors.cvv}</p>}
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="save-card"
                                        name="saveCard"
                                        type="checkbox"
                                        checked={formData.saveCard}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 rounded"
                                    />
                                    <label htmlFor="save-card" className="ml-2 block text-sm font-medium text-gray-700">
                                        Save this card for future purchases
                                    </label>
                                </div>
                            </div>
                            {/* Trust Signals */}
                            <div className="mt-6 flex flex-wrap justify-center items-center space-x-4">
                                <img src="https://placehold.co/80x30/ffffff/000000?text=SSL" alt="SSL Secure" className="h-8" />
                                <img src="https://placehold.co/80x30/ffffff/000000?text=Verified" alt="Verified by Visa" className="h-8" />
                                <img src="https://placehold.co/80x30/ffffff/000000?text=PCI" alt="PCI Compliant" className="h-8" />
                            </div>
                        </div>

                        {/* Place Order Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-xl text-xl font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition duration-150 hover:scale-105"
                            >
                                Place Order
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Column: Order Summary */}
                <div className="md:w-1/3 bg-gray-50 p-8 rounded-2xl shadow-inner border border-gray-200 md:sticky md:top-12 md:h-fit">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4 border-gray-200">Your Order</h3>

                    <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200">
                        <img src="https://placehold.co/120x120/e0e0e0/555555?text=Bed+Rack" alt="Adjustable Heavy-Duty Bed Rack" className="w-28 h-28 rounded-lg object-cover shadow-md" />
                        <div>
                            <p className="text-xl font-semibold text-gray-800 leading-tight">Adjustable Heavy-Duty Bed Rack</p>
                            <p className="text-gray-600 text-sm mt-1">Universal Fit, Black Powder Coat</p>
                            <p className="text-lg font-bold text-blue-600 mt-2">$599.99</p>
                            <p className="text-gray-500 text-sm">Qty: 1</p>
                        </div>
                    </div>

                    {/* Discount/Promo Code Input */}
                    <div className="mb-6">
                        <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700 mb-2">Have a discount code?</label>
                        <div className="flex">
                            <input type="text" id="promo-code" name="promo-code" className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter code" />
                            <button type="button" className="px-6 py-2 bg-gray-200 text-gray-700 rounded-r-lg hover:bg-gray-300 transition-colors font-medium">
                                Apply
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4 text-lg">
                        <div className="flex justify-between text-gray-700">
                            <span>Subtotal:</span>
                            <span id="summary-subtotal">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span>Shipping:</span>
                            <span id="summary-shipping">${shippingCost.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span>Tax (estimated):</span>
                            <span id="summary-tax">${estimatedTax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-2xl font-extrabold text-gray-900 pt-4 border-t-2 border-gray-300">
                            <span>Order Total:</span>
                            <span id="summary-total">${orderTotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 text-center">
                        Shipping costs are calculated based on your address and selected method.
                    </p>
                    <p className="text-sm text-gray-500 mt-2 text-center">
                        You will not be charged until the final step.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;
