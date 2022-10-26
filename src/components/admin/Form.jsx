import Select from "react-select";

/**
 * This is the form component which we input data
 * @param {*} param0 
 * @returns 
 */

const Form = ({
  vehicleOptions,
  handleFile,
  onChangeVehicleMakeModels,
  onChangeInput,
  otherInfo,
  message,
  files,
  removeImage,
  errors,
  validateBeforeSave,
}) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body text-left">
        <form role="form">
        <h6 className="mb-4 font-bold leading-tight uppercase text-xs text-slate-500 text-center">
            - Vehicle Details -
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 z-90">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlhtmlFor="grid-first-name"
              >
                Make & Model
              </label>
              <Select 
                styles={{ zIndex: 99 }}
                options={vehicleOptions}
                onChange={(e) => onChangeVehicleMakeModels(e)}
              />
              <p className="text-red-500 text-xs italic">
                {errors && errors["vMakeModel"]}
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="mb-2 ml-1 font-bold text-xs text-slate-700">
                Vehicle No
              </label>
              <input
                onChange={onChangeInput}
                type="text"
                value={otherInfo.vehicleNo}
                id="vehicleNo"
                name="vehicleNo"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              />
              <p className="text-red-500 text-xs italic">
                {errors && errors["vehicleNo"]}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlhtmlFor="grid-customer-name"
              >
                Customer Name
              </label>
              <input
                type="text"
                onChange={onChangeInput}
                value={otherInfo.customerName}
                id="customerName"
                name="customerName"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              />
              <p className="text-red-500 text-xs italic">
                {errors && errors["customerName"]}
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlhtmlFor="grid-mobile-no"
              >
                Mobile No
              </label>
              <input
                type="text"
                onChange={onChangeInput}
                value={otherInfo.mobileNo}
                id="mobileNo"
                name="mobileNo"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              />
              <p className="text-red-500 text-xs italic">
                {errors && errors["mobileNo"]}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">
              <label className="mb-2 ml-1 font-bold text-xs text-slate-700">
                Description
              </label>
              <div className="mb-4" onChange={onChangeInput}>
                <textarea
                  id="description"
                  name="description"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                >
                  {otherInfo.description}
                </textarea>
                <p className="text-red-500 text-xs italic">
                  {errors && errors["description"]}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-wrap">
            <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0 z-30">
              <label className="mb-2 ml-1 font-bold text-xs text-slate-700">
                Photo
              </label>
              <div className="mb-4">
                <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                  {message}
                </span>
                <div className="h-16 w-full relative border-2 items-center rounded-md cursor-pointer bg-gray-300 border-gray-400 border-dotted">
                  <input
                    type="file"
                    onChange={handleFile}
                    className="h-full w-full bg-green-200 opacity-0 z-10 absolute"
                    multiple="multiple"
                    name="files[]"
                    id="crashImages"
                  />
                  <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
                    <div className="flex flex-col">
                      <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                      <span className="text-[12px]">{`Drag and Drop a file`}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {files.map((file, key) => {
                    return (
                      <div key={key} className="overflow-hidden relative">
                        <i
                          onClick={() => {
                            removeImage(file.name);
                          }}
                          className="fa fa-close absolute right-1 hover:text-white cursor-pointer"
                        ></i>
                        <img
                          className="h-20 w-auto rounded-md"
                          src={URL.createObjectURL(file)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div> */}
          <div className="float-right">
            <button
              data-cy="save-new-report-btn"
              onClick={(e) => validateBeforeSave(e)}
              className="btn btn-accent"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
