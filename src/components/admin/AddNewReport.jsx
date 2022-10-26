import PreviewReport from "../PreviewReport";
import Form from "../Form";

const AddNewReport = ({
  validateBeforeSave,
  removeImage,
  files,
  message,
  register,
  onSubmit,
  vehicleOptions,
  handleFile,
  onChangeVehicleMakeModels,
  onChangeInput,
  otherInfo,
  vMakeModels,
  errors,
  showForm,
  setShowForm,
}) => {

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-2/2 px-3 mb-2 md:mb-0">
        <Form
          vehicleOptions={vehicleOptions}
          handleFile={handleFile}
          register={register}
          onChangeVehicleMakeModels={onChangeVehicleMakeModels}
          onChangeInput={onChangeInput}
          otherInfo={otherInfo}
          files={files}
          message={message}
          removeImage={removeImage}
          validateBeforeSave={validateBeforeSave}
          errors={errors}
        />
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className={`modal ${showForm}`}>
        <div className="modal-box">
          <PreviewReport
            vMakeModels={vMakeModels}
            files={files}
            otherInfo={otherInfo}
            onSubmit={onSubmit}
            setShowForm={setShowForm}
          />
        </div>
      </div>
    </div>
  );
};

export default AddNewReport;
