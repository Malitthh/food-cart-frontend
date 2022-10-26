/**
 * Preview of the damage report
 * @param {*} param0
 * @returns
 */
import ImageGallery from "react-image-gallery";

const PreviewReport = ({
  vMakeModels,
  files,
  otherInfo,
  onSubmit,
  setShowForm,
}) => {
  const images = [];

  files.map((file, key) => {
    images.push({
      original: URL.createObjectURL(file),
      thumbnail: URL.createObjectURL(file),
    });
  });

  return (
    <div className="card w-full">
      <figure className="px-1 pt-1">
        <ImageGallery items={images} originalHeight={10} />
      </figure>
      <div className="card-body">
        <div className="px-1">
          <div className="w-full">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <h6 className="my-1 font-bold leading-tight uppercase text-xs text-slate-500">
                  Summary
                </h6>
                <div className="card-actions items-left flex flex-wrap justify-left md:hidden">
                  <dl className="mt-4">
                    <dt className="mb-1 leading-normal text-sm text-slate-700">
                      <i className="fas fa-user text-3xs mr-3"></i> Customer Name
                    </dt>
                    <dd className="mb-2 ml-7">
                      <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">
                       {otherInfo && otherInfo.customerName}
                      </p>
                    </dd>
                    <dt className="mb-1 leading-normal text-sm text-slate-700">
                      <i className="fas fa-phone text-3xs mr-3"></i> Mobile No
                    </dt>
                    <dd className="mb-2 ml-7">
                      {" "}
                      <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">
                        {otherInfo && otherInfo.mobileNo}
                      </p>
                    </dd>
                    <dt className="mb-1 leading-normal text-sm text-slate-700">
                      <i className="fas fa-car text-3xs mr-3"></i>Make
                    </dt>
                    <dd className="mb-2 ml-7">
                      {" "}
                      <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">
                        {vMakeModels && (
                          <img
                            src={`https://vl.imgix.net/img/${vMakeModels.make
                              .replace(/\W+/g, "-")
                              .toLowerCase()}-logo.png`}
                            alt={vMakeModels.make}
                            className="h-3 inline-block mr-2"
                          />
                        )}
                        {vMakeModels && vMakeModels.make}
                      </p>
                    </dd>
                    <dt className="mb-1 leading-normal text-sm text-slate-700">
                      <i className="fas fa-car text-3xs mr-3"></i>Model
                    </dt>
                    <dd className="mb-2 ml-7">
                      {" "}
                      <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">
                        {vMakeModels && vMakeModels.model}
                      </p>
                    </dd>
                    <dt className="mb-1 leading-normal text-sm text-slate-700">
                      <i className="fas fa-car text-3xs mr-3"></i> Vehicle No
                    </dt>
                    <dd className="mb-2 ml-7">
                      {" "}
                      <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">
                        {otherInfo && otherInfo.vehicleNo}
                      </p>
                    </dd>
                    <dt className="mb-1 leading-normal text-sm text-slate-700">
                      <i className="fas fa-car text-3xs mr-3"></i> Description
                    </dt>
                  </dl>
                </div>
                <ul className="flex flex-col pl-0 mb-0 rounded-lg hidden md:block">
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-1 bg-white border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                    <div className="flex items-center">
                      <a className="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-slate-700 border-transparent bg-transparent text-center align-middle font-bold uppercase text-slate-700 transition-all hover:opacity-75">
                        <i className="fas fa-user text-3xs"></i>
                      </a>
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-slate-700">
                          Customer Name
                        </h6>
                        <span className="leading-tight text-xs"></span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">
                        {otherInfo && otherInfo.customerName}
                      </p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-1 bg-white border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                    <div className="flex items-center">
                      <button className="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-slate-700 border-transparent bg-transparent text-center align-middle font-bold uppercase text-slate-700 transition-all hover:opacity-75">
                        <i className="fas fa-phone text-3xs"></i>
                      </button>
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-slate-700">
                          Mobile No
                        </h6>
                        <span className="leading-tight text-xs"></span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">
                        {otherInfo && otherInfo.mobileNo}
                      </p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-1 bg-white border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                    <div className="flex items-center">
                      <button className="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-slate-700 border-transparent bg-transparent text-center align-middle font-bold uppercase text-slate-700 transition-all hover:opacity-75">
                        <i className="fas fa-car text-3xs"></i>
                      </button>
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-slate-700">
                          Make
                        </h6>
                        <span className="leading-tight text-xs"></span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">
                        {vMakeModels && (
                          <img
                            src={`https://vl.imgix.net/img/${vMakeModels.make
                              .replace(/\W+/g, "-")
                              .toLowerCase()}-logo.png`}
                            alt={vMakeModels.make}
                            className="h-6 inline-block mr-2"
                          />
                        )}
                        {vMakeModels && vMakeModels.make}
                      </p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                    <div className="flex items-center">
                      <button className="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-slate-700 border-transparent bg-transparent text-center align-middle font-bold uppercase text-slate-700 transition-all hover:opacity-75">
                        <i className="fas fa-car text-3xs"></i>
                      </button>
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-slate-700">
                          Model
                        </h6>
                        <span className="leading-tight text-xs"></span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">
                        {vMakeModels && vMakeModels.model}
                      </p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                    <div className="flex items-center">
                      <button className="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-slate-700 border-transparent bg-transparent text-center align-middle font-bold uppercase text-slate-700 transition-all hover:opacity-75">
                        <i className="fas fa-car text-3xs"></i>
                      </button>
                      <div className="flex flex-col">
                        <h6 className="mb-1 leading-normal text-sm text-slate-700">
                          Vehicle No
                        </h6>
                        <span className="leading-tight text-xs"></span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">
                        {otherInfo && otherInfo.vehicleNo}
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="mt-10">Description</p>
                <p className="mb-10 text-xs">
                  {otherInfo && otherInfo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-actions items-center flex flex-wrap justify-center">
        <label
          onClick={() => setShowForm("")}
          htmlhtmlFor="my-modal"
          className="btn btn-warning w-32"
        >
          Edit
        </label>
        <label data-cy="confirm-new-report-btn" onClick={() => onSubmit()} className="btn btn-success w-32">
          Confirm
        </label>
      </div>
    </div>
  );
};

export default PreviewReport;
