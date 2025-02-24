"use client";
import { Info } from "lucide-react";
import React, { useEffect, useState } from "react";
import Select from "react-select";

interface BrandsUsersClientProps {
  userId: string;
  accessToken: string;
}

const BrandForm = ({ userId, accessToken }: BrandsUsersClientProps) => {
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
        const response = await fetch(`../api/brands_industries`,{
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
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

    if (accessToken) {
      fetchIndustries();
    } else {
      setError("Access token not available");
    }
  }, [accessToken]);

  // Consultar Propiedades Marca
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `../api/brands_properties?default_property=true`,{
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Error al cargar las propiedades de la marca");
        }
        const result = await response.json();

        const countryProperty = {
          name: "country",
          title: "País",
          placeholder: "Selecciona un país",
          type: "select",
          options: Object.entries(countries).map(([code, name]) => ({
            value: code,
            label: name,
          })),
        };
        setBrandProperties([
          countryProperty,
          ...result.filter((property: any) => property.name !== "country"),
        ]);
      } catch (error: any) {
        setError(error.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchProperties();
    } else {
      setError("Token de acceso no disponible");
    }
  }, [accessToken, countries]);

  // Consultar Paises
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch(`../api/countries`,{
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
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
  }, [accessToken]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBusinessModelChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setFormData((prev) => {
      const currentBusinessModel = Array.isArray(prev.business_model)
        ? prev.business_model
        : [];

      const updatedBusinessModel = currentBusinessModel.includes(value)
        ? currentBusinessModel.filter((model) => model !== value)
        : [...currentBusinessModel, value];

      return {
        ...prev,
        business_model: updatedBusinessModel,
      };
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

  const TooltipLabel = ({
    text,
    tooltip,
  }: {
    text: string;
    tooltip: string;
  }) => (
    <div className="relative flex items-center">
      <span className="text-gray-700 mr-2 block font-medium">{text}</span>
      <div className="group relative">
        <Info className="text-gray-500 hover:text-gray-700 h-5 w-5 cursor-pointer" />
        <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 rounded-lg bg-black px-3 py-1 text-sm text-white opacity-0 shadow-lg transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100">
          {tooltip}
        </div>
      </div>
    </div>
  );

  const steps = [
    {
      label: "Tell us about your brand",
      content: (
        <>
          <div className="mb-4">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              <TooltipLabel text="Brand Name" tooltip="Ingresa el nombre de tu marca. Este será el nombre que se mostrará en el sitio " />
            </label>
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              className="w-full rounded border border-stroke bg-gray py-3 pl-5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
              placeholder="Enter your brand name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              <TooltipLabel text="Industry" tooltip="El nombre de tu industria" />
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full rounded border border-stroke bg-gray py-3 pl-5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
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
          </div>
          {brandProperties.find((property) => property.name === "country") && (
            <div className="mb-4">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                <TooltipLabel text="Country" tooltip="País donde esta tu marca" />
              </label>
              {/* <Select
                  name={formData.name}
                  value={formData.name}
                  options={Object.entries(countries).map(([code, name]) => ({
                    value: code,
                    label: name,
                  }))}
                  onChange={(selectedOption) => {
                    setFormData({
                      ...formData,
                      [formData.name]: selectedOption?.value || "",
                    });
                  }}
                  className="w-full"
                  placeholder="Select a country"
                /> */}
              <select
                name="country"
                value={formData.country || ""}
                onChange={handleChange}
                className="w-full rounded border border-stroke bg-gray py-3 pl-5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                required
              >
                <option value="" disabled>
                  Select a country
                </option>

                {brandProperties
                  .find((property) => property.name === "country")
                  ?.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
            </div>
          )}
        </>
      ),
    },
    {
      label: "Give your brand personality",
      content: (
        <>
          {brandProperties
            .filter((property) => property.name !== "country") // Excluir "País"
            .map((property) => (
              <div className="mb-4" key={property.name}>
                {property.name === "business_model" ? (
                  <div className="flex flex-col gap-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      <TooltipLabel text={property.title} tooltip={property.description}/>
                    </label>
                    <div className="flex space-x-4">
                      <label
                        className={`flex flex-grow cursor-pointer flex-col items-center rounded-lg border p-4 ${
                          formData.business_model.includes("B2B")
                            ? "border-blue-500 bg-blue-100"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          value="B2B"
                          checked={formData.business_model.includes("B2B")}
                          onChange={handleBusinessModelChange}
                          className="hidden"
                        />
                        {/* <Image
                          src={b2bImage}
                          alt="B2B"
                          className="mb-2 h-16 w-16 object-contain"
                        /> */}
                        <picture>
                          {/* Imagen para modo oscuro */}
                          <source srcSet="/images/B2B-white.png" media="(prefers-color-scheme: dark)" />
                          {/* Imagen para modo claro */}
                          <img src="/images/B2B-black.png" alt="Imagen B2B Black" width={100} height={45} />
                        </picture>
                      </label>

                      <label
                        className={`flex flex-grow cursor-pointer flex-col items-center rounded-lg border p-4 ${
                          formData.business_model.includes("B2C")
                            ? "border-blue-500 bg-blue-100"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          value="B2C"
                          checked={formData.business_model.includes("B2C")}
                          onChange={handleBusinessModelChange}
                          className="hidden"
                        />
                        {/* <Image
                          src={b2cBlackImage}
                          alt="B2C"
                          className="mb-2 h-16 w-16 object-contain"
                        /> */}
                        <picture>
                          {/* Imagen para modo oscuro */}
                          <source srcSet="/images/B2C-white.png" media="(prefers-color-scheme: dark)" />
                          {/* Imagen para modo claro */}
                          <img src="/images/B2C-black.png" alt="Imagen B2C Black" width={100} height={45} />
                        </picture>
                      </label>
                    </div>
                  </div>
                ) : property.name === "description" ? (
                  <>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      <TooltipLabel text={property.title} tooltip={property.description}
                      />
                    </label>
                    <textarea
                      name={property.name}
                      value={formData[property.name] || ""}
                      onChange={handleChange}
                      className="w-full rounded border border-stroke bg-gray py-3 pl-5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      placeholder={property.placeholder}
                    />
                  </>
                ) : (
                  <>
                    <TooltipLabel
                      text={property.title}
                      tooltip={property.description}
                    />
                    <input
                      type="text"
                      name={property.name}
                      value={formData[property.name] || ""}
                      onChange={handleChange}
                      className="w-full rounded-lg border px-6 py-4"
                      placeholder={property.placeholder}
                    />
                  </>
                )}
              </div>
            ))}
        </>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:border-strokedark dark:bg-boxdark">
        <h2 className="mb-4 text-2xl font-bold text-center text-black dark:text-white">
          {steps[step - 1].label}
        </h2>
        <p className="text-gray-600 mb-6">
          Step {step} of {steps.length}
        </p>
        <div className="bg-gray-300 mb-6 h-2 w-full rounded-full">
          <div
            className="h-2 rounded-full bg-blue-600"
            style={{ width: `${(step / steps.length) * 100}%` }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {steps[step - 1].content}
          </div>

          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white"
              >
                Back
              </button>
            )}
            {step < steps.length && (
              <button
                type="button"
                onClick={nextStep}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white"
              >
                Next
              </button>
            )}
            {step === steps.length && (
              <button
                type="submit"
                className="rounded-lg bg-green-600 px-4 py-2 text-white"
              >
                {loading ? "Creating..." : "Create brand"}
              </button>
            )}
          </div>
        </form>

        {success && (
          <p className="mt-4 text-green-500">Brand created successfully!</p>
        )}
        {error && <p className="text-red-500 mt-4">Error: {error}</p>}
      </div>
    </div>
  );
};

export default BrandForm;
