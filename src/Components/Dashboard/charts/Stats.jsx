/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell } from "recharts";
import { FaUsers, FaTicketAlt } from "react-icons/fa"; // Ticket icon

const COLORS = ["#0D1B44", "#E5E7EB"];
const StatsCards = ({ stats }) => {
    return (
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between relative transition-all duration-300 hover:shadow-2xl"
                    style={{
                        borderRadius: "16px",
                        border: "1px solid #D1D5DB",
                        boxShadow: "0px 4px 10px rgba(13, 27, 68, 0.2)", // Soft blue glow
                    }}
                >
                    {/* Left: Label & Value */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-gray-600 font-medium">
                            {stat.label}
                            {stat.label === "Users" ? (
                                <FaUsers className="text-gray-400 text-lg" />
                            ) : (
                                <FaTicketAlt className="text-gray-400 text-lg" />
                            )}
                        </div>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    </div>

                    {/* Right: Circular Progress Bar */}
                    <div className="relative left-2 w-16 h-16 flex items-center justify-center">
                        {/* Outer Shadow Circle */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: "radial-gradient(circle, rgba(0,0,0,0.1) 20%, transparent 70%)",
                                boxShadow: "0px 4px 10px rgba(13, 27, 68, 0.4)",
                            }}
                        ></div>

                        {/* Pie Chart */}
                        <PieChart width={64} height={64}>
                            <Pie
                                data={[
                                    { name: "Completed", value: stat.percentage },
                                    { name: "Remaining", value: 100 - stat.percentage },
                                ]}
                                cx="50%"
                                cy="50%"
                                innerRadius={22}
                                outerRadius={30}
                                dataKey="value"
                                startAngle={90}
                                endAngle={-270}
                            >
                                <Cell fill={COLORS[0]} />
                                <Cell fill={COLORS[1]} />
                            </Pie>
                        </PieChart>

                        {/* Percentage Text Inside Circle */}
                        <span className="absolute text-sm font-semibold text-gray-900">
                            {stat.percentage.toFixed(0)}%
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
