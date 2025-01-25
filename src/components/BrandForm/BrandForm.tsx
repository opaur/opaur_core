"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";

interface BrandsUsersClientProps {
  userId: string;
}

const BrandForm = ({ userId }: BrandsUsersClientProps) => {
  const [industries, setIndustries] = useState<any[]>([]);
  const [countries, setCountries] = useState<{ [key: string]: string }>({});
  const [brandProperties, setBrandProperties] = useState<any[]>([]);
  const [formData, setFormData] = useState<Record<string, any>>({
    brandName: "",
    industry: "",
    business_model: [],
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Consultar industrias
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

  // Consultar Propiedades Marca
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch(`../api/brands_properties?default_property=true`);
        if (!response.ok) {
          throw new Error("Error al cargar las propiedades de la marca");
        }
        const result = await response.json();
        setBrandProperties(result);
      } catch (error: any) {
        setError(error.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Consultar Paises
  useEffect(() => {x
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch(`../api/countries`);
        if (!response.ok) {
          throw new Error("Error al cargar los paises");
        }
        const result = await response.json();
        const countriesData = result[0]?.countries;
        if (countriesData) {
          setCountries(countriesData);
        } else {
          throw new Error("Invalid JSON structure");
        }
      } catch (error: any) {
        setError(error.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBusinessModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const currentModels = prev.business_model || [];
      if (checked) {
        return { ...prev, business_model: [...currentModels, value] };
      } else {
        return { ...prev, business_model: currentModels.filter((model: string) => model !== value) };
      }
    });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
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
        ...brandProperties.reduce((acc, property) => {
          acc[property.name] = formData[property.name] || "";
          return acc;
        }, {}),
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
    ...brandProperties.map((property) => ({
      label: property.title,
      content:
        property.name === "country" ? (
          <Select
            name={property.name}
            options={Object.entries(countries).map(([code, name]) => ({
              value: code,
              label: name,
            }))}
            onChange={(selectedOption) => {
              setFormData({
                ...formData,
                [property.name]: selectedOption?.value || "",
              });
            }}
            className="w-full"
            placeholder="Search and select a country"
          />
        ) : property.name === "business_model" ? (
          <div className="flex flex-col gap-2">
            <label>
              <input
                type="checkbox"
                value="B2B"
                checked={formData.business_model.includes("B2B")}
                onChange={handleBusinessModelChange}
              />
              B2B
            </label>
            <label>
              <input
                type="checkbox"
                value="B2C"
                checked={formData.business_model.includes("B2C")}
                onChange={handleBusinessModelChange}
              />
              B2C
            </label>
          </div>
        ) : (
          <input
            type="text"
            name={property.name}
            value={formData[property.name] || ""}
            onChange={handleChange}
            className="w-full rounded-lg border py-4 px-6"
            placeholder={`${property.placeholder}`}
          />
        ),
    })),
  ];

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Create Your Brand</h2>
        <p className="mb-6 text-gray-600">
          Step {step} of {steps.length}
        </p>
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
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
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
                {loading ? "Creating..." : "CREATE BRAND"}
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