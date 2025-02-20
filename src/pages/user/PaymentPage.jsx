import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { axiosInstance } from "../../config/axiosInstance";

// Load Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51QuXJcJtI0egxZJ9jBc1EUw9fpSKU1CbOjnA0lkm3Ys9mBGVdrTHXVQE5qZc5Rj8EnGHY7y0tsnqjAa5iikauHyz009olmYRvH");

const CheckoutForm = ({ clientSecret }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [paymentId, setPaymentId] = useState(null);

    // Fetch Payment Intent status on page load
    useEffect(() => {
        if (!clientSecret || !stripe) return;

        const checkPaymentStatus = async () => {
            const paymentIntentId = clientSecret.split("_secret")[0]; // Extract ID from clientSecret
            const { paymentIntent, error } = await stripe.retrievePaymentIntent(clientSecret);

            if (error) {
                setMessage(error.message);
            } else if (paymentIntent.status === "succeeded") {
                setSuccess(true);
                setPaymentId(paymentIntentId);
                setMessage("Payment already completed.");
            }
        };

        checkPaymentStatus();
    }, [clientSecret, stripe]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage("");

        if (!stripe || !elements) {
            setMessage("Stripe is not fully loaded yet.");
            setLoading(false);
            return;
        }

        const { paymentIntent, error } = await stripe.confirmPayment({
            elements,
            confirmParams: { return_url: window.location.origin },
            redirect: "if_required",
        });

        if (error) {
            setMessage(error.message);
        } else if (paymentIntent.status === "succeeded") {
            await axiosInstance.get("/user/create-order")
            setSuccess(true);
            setPaymentId(paymentIntent.id);
            setMessage("Payment successful!");
        } else {
            setMessage("Payment processing...");
        }

        setLoading(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-8 rounded-xl shadow-2xl bg-white bg-opacity-90 backdrop-blur-lg border border-gray-200 max-w-lg w-full relative"
        >
            {success && <Confetti numberOfPieces={200} />}

            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">💳 Secure Payment</h2>

            {success ? (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-green-600"
                >
                    <h3 className="text-xl font-bold">🎉 Payment Successful!</h3>
                    <p>Transaction ID:</p>
                    <p className="font-mono text-gray-800 bg-gray-100 rounded-lg p-2">{paymentId}</p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <PaymentElement className="p-3 border rounded-xl shadow-sm bg-gray-50" />
                    </motion.div>

                    <motion.button
                        type="submit"
                        disabled={!stripe || loading}
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        className={`w-full text-white py-3 px-4 rounded-xl text-lg font-semibold transition ${
                            loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500"
                        }`}
                    >
                        {loading ? (
                            <span className="animate-spin border-t-2 border-white rounded-full h-5 w-5 inline-block"></span>
                        ) : (
                            "Pay Now"
                        )}
                    </motion.button>

                    {message && <p className="text-center text-red-500">{message}</p>}
                </form>
            )}
        </motion.div>
    );
};

export default function PaymentPage() {
    const [searchParams] = useSearchParams();
    const clientSecret = searchParams.get("cid");

    const options = { clientSecret, appearance: { theme: "stripe" } };

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-15.7rem)] bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-6">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-7xl font-bold text-white mb-6 text-center"
            >
               Pay
            </motion.h1>

            {clientSecret ? (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm clientSecret={clientSecret} />
                </Elements>
            ) : (
                <p className="text-red-400 text-lg">Invalid payment request.</p>
            )}
        </div>
    );
}
