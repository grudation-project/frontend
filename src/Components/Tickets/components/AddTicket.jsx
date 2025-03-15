/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddTicket({ onAdd, onCancel }) {
    const [subject, setSubject] = useState("");

    return (
        <div className="p-6 mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Create New Ticket</h1>
            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Ticket Subject</label>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter ticket subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <div className="flex space-x-4">
                    <button
                        onClick={() => onAdd(subject)}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg"
                    >
                        Submit
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
