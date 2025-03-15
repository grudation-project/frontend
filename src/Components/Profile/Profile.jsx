import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
});

export default function ProfileUpdate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const [photo, setPhoto] = useState(null);

  function save(data) {
    console.log("Updated Data:", { ...data, photo });
  }

  function handlePhotoChange(e) {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  }

  return (
    <div className=" p-6 flex flex-col  ">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Edit Profile</h2>

      {/* Form Container */}
      <form onSubmit={handleSubmit(save)} className="w-full max-w-4xl mt-4 space-y-6">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              {...register("firstName")}
              placeholder="Enter your first name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.firstName && <small className="text-red-500">{errors.firstName.message}</small>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              {...register("lastName")}
              placeholder="Enter your last name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.lastName && <small className="text-red-500">{errors.lastName.message}</small>}
          </div>
        </div>

        {/* Email & Photo Upload */}
        <div className="grid grid-cols-2 gap-6 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              {...register("email")}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && <small className="text-red-500">{errors.email.message}</small>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Photo</label>
            <div className="flex items-center space-x-3">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className="bg-black text-white text-sm px-5 py-2 rounded-lg cursor-pointer"
              >
                Browse
              </label>
              <input
                type="text"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-white"
                placeholder="No file chosen"
                disabled
              />
              {photo && <img src={photo} alt="Profile Preview" className="w-12 h-12 rounded-full border shadow-md" />}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-4 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </form>

    </div>
  );
}
