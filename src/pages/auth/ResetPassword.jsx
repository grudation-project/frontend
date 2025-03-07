import { useState } from "react";
import LoginHeader from "../../Components/Navbar/LoginHeader";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!email) {
            setError("Email is required.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Handle form submission logic (e.g., API call)
        console.log("Password reset email sent to:", email);
        alert("If this email is registered, you will receive a reset link.");
    };

    return (
        <>
            <LoginHeader />
            <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
                {/* Reset Password Form */}
                <div className="w-full max-w-md text-center">
                    <h2 className="text-3xl font-extrabold text-black mb-3">Reset Your Password</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        We will send an email with instructions to reset your password.
                    </p>
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="text-left">
                            <label className="block text-base font-semibold text-gray-700 mb-1">Email</label>
                            <div className="relative mt-2">
                                <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
                                    required
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition text-lg"
                        >
                            Send Email
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ResetPassword;
