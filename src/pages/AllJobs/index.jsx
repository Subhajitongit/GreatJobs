import React, { useState, useEffect } from "react";
import Card from "../../components/card";
import mutations from "../../mutations/mutations";
import FormModal from "../../components/formModal";
import EditFormModal from "../../components/editFormModal";

const AllJobs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateIsModalOpen] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    mutations.getData().then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenEditModal = async () => {
    setUpdateIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="font-['Poppins'] bg-cardBorder h-full min-h-screen">
      {/* ------ Header with create job button ------ */}
      <div className="flex justify-between p-4">
        <div
          className="bg-primary px-12 py-2 rounded-lg border-2 text-white border-cardBorder hover:cursor-pointer hover:bg-white hover:text-primary hover:border-primary"
          onClick={handleOpenModal}
        >
          <h1 className="font-light">Create Job</h1>
        </div>
      </div>
      {/* ------ Header ends ------ */}

      {/* ------ Content Begins ------ */}
      <div className="max-w-screen-3xl min-h-screen h-full mx-auto px-4 sm:px-12 pb-4">
        {isModalOpen && <FormModal onClose={handleCloseModal} />}
        {isUpdateModalOpen && (
          <EditFormModal
            onClose={() => {
              setUpdateIsModalOpen(false);
            }}
            selectedCard={selectedCard}
          />
        )}

        {loading ? (
          <div className="flex min-h-screen w-full justify-center items-center">
            <svg
              class="animate-spin -ml-1 mr-3 h-16 w-16 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                stroke="currentColor"
                stroke-width="4"
                cx="12"
                cy="12"
                r="10"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : (
          <div className="mt-4 grid sm:px-1 grid-cols-1 sm:grid-cols-2 gap-8">
            {data.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                jobTitle={item.jobTitle}
                companyName={item.companyName}
                industry={item.industry}
                location={item.location}
                remoteType={item.remoteType}
                minExperience={item.minExperience}
                maxExperience={item.maxExperience}
                minSalary={item.minSalary}
                maxSalary={item.maxSalary}
                totalEmployee={item.totalEmployee}
                applyType={item.applyType}
                onOpen={handleOpenEditModal}
                setSelectedCard={setSelectedCard}
              />
            ))}
          </div>
        )}
      </div>
      {/* ------ Content ends ------ */}
    </div>
  );
};

export default AllJobs;
