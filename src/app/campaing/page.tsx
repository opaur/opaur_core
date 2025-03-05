"use client";
import React, { useState, useEffect } from "react";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function CampaignFeature() {
  // Table Component
  const MyTable = () => {
    const [data, setData] = useState<Array<{
      id: number;
      name: string;
      email: string;
    }>>([]);

    const dummyData = [
      { id: 1, name: "John Doe", email: "johndoe@example.com" },
      { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
      { id: 3, name: "Sam Brown", email: "sambrown@example.com" },
      { id: 4, name: "Lucy Green", email: "lucygreen@example.com" },
      { id: 5, name: "Tom White", email: "tomwhite@example.com" },
    ];

    useEffect(() => {
      setData(dummyData);
    }, []);

    const columns: ColumnDef<{
      id: number;
      name: string;
      email: string;
    }>[] = [
      {
        header: "ID",
        accessorKey: "id",
        cell: (info) => info.getValue(),
      },
      {
        header: "Name",
        accessorKey: "name",
        cell: (info) => info.getValue(),
      },
      {
        header: "Email",
        accessorKey: "email",
        cell: (info) => info.getValue(),
      },
    ];

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    return (
      // Same container styling as your form/cards
      <div className="mt-6 px-10 mx-auto py-10 rounded-lg border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-boxdark">
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm text-black dark:text-white">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-2 border-b border-stroke dark:border-strokedark bg-gray-200 dark:bg-gray-700 text-left font-medium dark:text-white"
                    >
                      {header.column.columnDef.header as React.ReactNode}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="transition-colors hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-2 border-b border-stroke dark:border-strokedark"
                    >
                      {cell.getValue() as React.ReactNode}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Form Handling Logic
  const [formData, setFormData] = useState({
    agentTask: "",
    phoneNumber: "",
    voice: "",
    additionalPrompt: "",
  });

  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [formCompleted, setFormCompleted] = useState(false);

  const topics = [
    { label: "Follow-up", value: "follow-up" },
    { label: "Cold Call", value: "cold-call" },
    { label: "Reminder", value: "reminder" },
    { label: "Survey", value: "survey" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", { ...formData, selectedTopic });
    setFormCompleted(true);
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-6xl">
        <Breadcrumb pageName="Campaign Setup" />

       
          <div className="mx-auto px-10 py-10 rounded-lg border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-boxdark">
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-xl">
              Campaign Setup:
            </h2>
            <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
              Set up the parameters for your campaign.
            </p>

            {/* Topic Field as Non-Selectable Cards */}
            <div className="mb-6">
              <label className="block font-medium text-black dark:text-white mb-2.5">
                Agent Task:
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {topics.map((topic) => (
                  <div
                    key={topic.value}
                    className={`cursor-pointer rounded-lg border p-4 text-center transition-all duration-300 ${
                      selectedTopic === topic.value
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300 bg-gray-100 text-black hover:bg-opacity-50 dark:border-strokedark dark:bg-gray-700 dark:text-white dark:hover:bg-opacity-50"
                    }`}
                    onClick={() => setSelectedTopic(topic.value)}
                  >
                    {topic.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Collapsible Form */}
            {!formCompleted && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Agent Task Field */}
                <div>
                  <label className="block font-medium text-black dark:text-white mb-2.5">
                    Agent Task Description:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="agentTask"
                      value={formData.agentTask}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Describe the task"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="block font-medium text-black dark:text-white mb-2.5">
                    Phone Number:
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                </div>

                {/* Voice Field */}
                <div>
                  <label className="block font-medium text-black dark:text-white mb-2.5">
                    Voice:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="voice"
                      value={formData.voice}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Voice type"
                      required
                    />
                  </div>
                </div>

                {/* Additional Prompt Field */}
                <div>
                  <label className="block font-medium text-black dark:text-white mb-2.5">
                    Additional Prompt:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="additionalPrompt"
                      value={formData.additionalPrompt}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Additional instructions or prompt"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition font-medium text-gray hover:bg-opacity-90 dark:hover:bg-opacity-80"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
      

        {/* Results Table */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Results</h2>
          <MyTable />
        </div>
      </div>
    </DefaultLayout>
  );
}
