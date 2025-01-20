"use client";
import React, { useEffect, useState } from "react";

interface BrandsUsersClientProps {
  userId: string;
}

const BrandForm = ({ userId }: BrandsUsersClientProps) => {
  const [industries, setIndustries] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    brandName: "",
    brandDescription: "",
    brandVoice: "",
    brandTagline: "",
    industry: "",
  });
  const [step, setStep] = useState(1); // Controla el paso actual
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        setLoading(true);
        const response = await fetch(`../api/brands_industries`);
        if (!response.ok) {
          throw new Error("Error al cargar las industrias");
        }
        const result = await response.json();
        setIndustries(result);
      } catch (error: any) {
        setError(error.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const raw = JSON.stringify({
      name: formData.brandName,
      industry_id: formData.industry,
      brand_properties: {
        color: formData.brandTagline,
        size: formData.brandVoice,
      },
      user_id: userId,
    });

    try {
      const response = await fetch("../api/brands", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: raw,
      });

      if (!response.ok) {
        throw new Error("Error al crear la marca.");
      }
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      label: "Brand Name",
      content: (
        <input
          type="text"
          name="brandName"
          value={formData.brandName}
          onChange={handleChange}
          className="w-full rounded-lg border py-4 px-6"
          placeholder="Enter your brand name"
          required
        />
      ),
    },
    {
      label: "Brand Description",
      content: (
        <textarea
          name="brandDescription"
          value={formData.brandDescription}
          onChange={handleChange}
          className="w-full rounded-lg border py-4 px-6"
          placeholder="Describe your brand's mission, values, and vision."
          required
        />
      ),
    },
    {
      label: "Brand Voice",
      content: (
        <input
          type="text"
          name="brandVoice"
          value={formData.brandVoice}
          onChange={handleChange}
          className="w-full rounded-lg border py-4 px-6"
          placeholder="How do you want your brand to speak?"
          required
        />
      ),
    },
    {
      label: "Brand Tagline",
      content: (
        <input
          type="text"
          name="brandTagline"
          value={formData.brandTagline}
          onChange={handleChange}
          className="w-full rounded-lg border py-4 px-6"
          placeholder="Create a catchy and memorable tagline."
          required
        />
      ),
    },
    {
      label: "Industry",
      content: (
        <select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full rounded-lg border py-4 px-6"
          required
        >
          <option value="" disabled>
            Select an industry
          </option>
          {industries.map((ind) => (
            <option key={ind.id} value={ind.id}>
              {ind.name}
            </option>
          ))}
        </select>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Create Your Brand</h2>
        <p className="mb-6 text-gray-600">Step {step} of {steps.length}</p>
        <div className="w-full bg-gray-300 rounded-full h-2 mb-6">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${(step / steps.length) * 100}%` }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              {steps[step - 1].label}
            </label>
            {steps[step - 1].content}
          </div>

          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg"
              >
                Back
              </button>
            )}
            {step < steps.length && (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Next
              </button>
            )}
            {step === steps.length && (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Submit
              </button>
            )}
          </div>
        </form>

        {success && <p className="mt-4 text-green-500">Brand created successfully!</p>}
        {error && <p className="mt-4 text-red-500">Error: {error}</p>}
      </div>
    </div>
  );
};

export default BrandForm;
