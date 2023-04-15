import React from "react";
import mutations from "../mutations/mutations";

const Card = ({
  id,
  jobTitle,
  companyName,
  industry,
  location,
  remoteType,
  minExperience,
  maxExperience,
  minSalary,
  maxSalary,
  totalEmployee,
  applyType,
  onOpen,
  setSelectedCard,
}) => {
  // function to delete job
  const handleDelete = (event) => {
    event.preventDefault();

    mutations.deleteData(id);
  };

  return (
    <div className="flex rounded-lg border border-gray-200 bg-card p-5 dark:border-cardBorder dark:bg-gray-800 lg:p-4">
      <div className="bg-dark flex justify-center items-center h-16 w-14 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="50"
          width="30"
          id="netflix"
        >
          <path
            fill="#AD080F"
            d="m10.17 13.46-.01 5.06c0 4.81-.01 5.08-.06 5.08-.18 0-1.7.1-2.21.15-.33.03-1 .1-1.48.16-.49.06-.89.1-.9.09 0-.01-.01-5.41-.01-12.01V0l4.67 13.46zM18.49.01h-4.63l-.01 5.31v5.329l4.63 13.341c.02-.01.02-5.42.02-12.01L18.49.01z"
          ></path>
          <path
            fill="#DF0D12"
            d="M18.48 23.99h-.04c-.08 0-.24-.01-.43-.03-1.07-.13-2.48-.26-3.62-.31-.37-.02-.68-.04-.69-.04 0 0-.29-.84-.84-2.41-.53-1.53-1.31-3.77-2.32-6.68l-.37-1.06L5.5 0h4.65l.2.57.88 2.53 7.25 20.89z"
          ></path>
        </svg>
      </div>

      <div className="ml-4 mt-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-medium">{jobTitle}</h1>
          <h1 className="text-base sm:text-lg">
            {companyName} - {industry}
          </h1>
          <h1 className="text-base sm:text-lg text-placeholder ">
            {location} ({remoteType})
          </h1>
        </div>

        <div className="pt-6 flex flex-col gap-2">
          <h1 className="text-sm sm:text-base">
            Part-Time (9.00 am - 5.00 pm IST)
          </h1>
          <h1 className="text-sm sm:text-base">
            Experience ({minExperience}-{maxExperience} years)
          </h1>
          <h1 className="text-sm sm:text-base">
            INR (₹) {minSalary} - {maxSalary} / Month
          </h1>
          <h1 className="text-sm sm:text-base">{totalEmployee} employees</h1>
        </div>

        <div className="pt-6 flex flex-row gap-2">
          {applyType === "true" ? (
            <div className="bg-primary px-8 py-2 rounded-lg border-2 text-white border-cardBorder hover:cursor-pointer hover:bg-white hover:text-primary hover:border-primary">
              <h1 className="font-light text-sm">Apply Now</h1>
            </div>
          ) : (
            <div className="bg-white px-8 py-2 rounded-lg border-2 text-primary border-primary hover:cursor-pointer hover:bg-primary hover:text-white hover:border-cardBorder">
              <h1 className="font-light text-sm">External Apply</h1>
            </div>
          )}
        </div>

        <div className="pt-6 flex flex-row gap-2 xl:hidden lg:block md:block sm:block">
          <div
            className="bg-primary px-8 py-2 rounded-lg text-white hover:cursor-pointer hover:bg-white hover:text-primary sm:mb-1"
            onClick={() => {
              setSelectedCard({
                id,
                jobTitle,
                companyName,
                industry,
                location,
                remoteType,
                minExperience,
                maxExperience,
                minSalary,
                maxSalary,
                totalEmployee,
                applyType,
              });
              onOpen();
            }}
          >
            <h1 className="font-light text-sm">Edit</h1>
          </div>
          <div
            className="bg-error px-8 py-2 rounded-lg text-white hover:cursor-pointer hover:bg-white hover:text-error"
            onClick={(e) => {
              handleDelete(e);
            }}
          >
            <h1 className="font-light text-sm">Delete</h1>
          </div>
        </div>
      </div>

      <div className="flex h-fit ml-auto justify-end hidden xl:block lg:hidden md:hidden sm:hidden">
        <div className="pt-6 flex flex-row gap-2 h-fit">
          <div
            className="h-10 w-10 bg-primary p-2 rounded-lg border-2 text-white border-cardBorder hover:cursor-pointer hover:bg-white hover:text-primary hover:border-primary"
            onClick={() => {
              setSelectedCard({
                id,
                jobTitle,
                companyName,
                industry,
                location,
                remoteType,
                minExperience,
                maxExperience,
                minSalary,
                maxSalary,
                totalEmployee,
                applyType,
              });
              onOpen();
            }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              ></path>
            </svg>
          </div>

          <div
            className="h-10 w-10 bg-error p-2 rounded-lg border-2 text-white border-cardBorder hover:cursor-pointer hover:bg-white hover:text-error hover:border-error"
            onClick={(e) => {
              handleDelete(e);
            }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
