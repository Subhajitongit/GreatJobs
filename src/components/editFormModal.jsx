import React, { useState } from "react";
import mutations from "../mutations/mutations";

const EditFormModal = ({ onClose, selectedCard }) => {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);

  const [formData, setFormData] = useState(selectedCard);

  //   Form Validation function
  const validateForm = (values) => {
    const errors = {};

    if (!values.jobTitle) {
      errors.jobTitle = "Job title is required";
    }

    if (!values.companyName) {
      errors.companyName = "Company name is required";
    }

    if (!values.industry) {
      errors.industry = "Industry is required";
    }

    return errors;
  };

  //   Form update function
  const handleSubmit = (event) => {
    event.preventDefault();

    mutations.updateData(selectedCard.id, formData);
  };

  //   Populate Form data function
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div
      className="flex overflow-y-auto backdrop-blur-sm overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-screen"
      onClick={() => {
        onClose();
      }}
    >
      <div className="relative justify-center p-2 w-full max-w-2xl flex h-fit">
        <div
          className="relative p-4 w-11/12 bg-card border-2 border-cardBorder rounded-lg shadow sm:p-5"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {step1 && (
            <>
              <div className="flex justify-between items-center pb-1 mb-4 rounded-t sm:mb-5 dark:border-gray-600">
                <h1 className="text-xl font-normal text-gray-900">Edit job</h1>
                <div className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                  <span className="font-normal text-base">Step 1</span>
                </div>
              </div>

              <form>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Job title
                      <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 placeholder-placeholder border border-cardBorder text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="ex. UI UX Designer"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Company name
                      <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 placeholder-placeholder border border-cardBorder text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="ex. Google"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Industry
                      <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 placeholder-placeholder border border-cardBorder text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="ex. Information Technology"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 placeholder-placeholder border border-cardBorder text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="ex. Chennai"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Remote type
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 placeholder-placeholder border border-cardBorder text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="ex. In-office"
                      name="remoteType"
                      value={formData.remoteType}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-16">
                  <button
                    className={`text-white inline-flex items-center bg-primary hover:cursor-pointer focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                    onClick={() => {
                      var err = validateForm(formData);
                      if (!err.companyName && !err.industry && !err.jobTitle) {
                        setStep2(true);
                        setStep1(false);
                        console.log(formData);
                      } else console.log(validateForm(formData));
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            </>
          )}

          {step2 && (
            <>
              <div className="flex justify-between items-center pb-1 mb-4 rounded-t sm:mb-5 dark:border-gray-600">
                <h1 className="text-xl font-normal text-gray-900">Edit job</h1>
                <div className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                  <span className="font-normal text-base">Step 2</span>
                </div>
              </div>

              <form>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Experience
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="number"
                        className="bg-gray-50 placeholder-placeholder border border-cardBorder text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="Minimum"
                        name="minExperience"
                        value={formData.minExperience}
                        onChange={handleChange}
                      />
                      <input
                        type="number"
                        className="bg-gray-50 placeholder-placeholder border border-cardBorder text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="Maximum"
                        name="maxExperience"
                        value={formData.maxExperience}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Salary
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        className="bg-gray-50 placeholder-placeholder border border-cardBorder text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="Minimum"
                        name="minSalary"
                        value={formData.minSalary}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        className="bg-gray-50 placeholder-placeholder border border-cardBorder text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="Maximum"
                        name="maxSalary"
                        value={formData.maxSalary}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Total employee
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 placeholder-placeholder border border-cardBorder text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="ex. 100-200"
                      name="totalEmployee"
                      value={formData.totalEmployee}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Apply type
                    </label>
                    <div className="grid grid-cols-2 gap-4 w-max pt-1">
                      <div className="flex items-center mr-4">
                        <input
                          id="inline-radio"
                          type="radio"
                          name="applyType"
                          value={true}
                          onChange={handleChange}
                          required={true}
                          checked={formData.applyType === "true" ? true : false}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="inline-radio"
                          className="ml-2 text-sm font-medium text-placeholder"
                        >
                          Quick apply
                        </label>
                      </div>

                      <div className="flex items-center mr-4">
                        <input
                          id="inline-checked-radio"
                          type="radio"
                          name="applyType"
                          value={false}
                          onChange={handleChange}
                          required={true}
                          checked={formData.applyType === "true" ? false : true}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="inline-checked-radio"
                          className="ml-2 text-sm font-medium text-placeholder"
                        >
                          External apply
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-20">
                  <button
                    className="text-white inline-flex  items-center bg-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={(e) => {
                      console.log(formData);
                      handleSubmit(e);
                      onClose();
                    }}
                  >
                    Save
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditFormModal;
