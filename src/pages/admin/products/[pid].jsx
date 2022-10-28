import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from "src/components/admin/NavBar";
import ImageGallery from "react-image-gallery";

const SingleProduct = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [reportData, setReportData] = useState();
  
  // Read the json file related with pid
  useEffect(() => {
    fetch(`/db/${pid}.json`)
      .then((response) => {
        return response.json(); //parse json
      })
      .then((data) => {
        setReportData(data);
      });
  }, [pid, reportData]);

  const images = [];

  // set image data to send image slider
  if (reportData)
    reportData.photo.map((file) => {
      images.push({
        original: file.url,
        thumbnail: file.url,
      });
    });

  return (
    <div className="min-h-full">
      <NavBar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <div className="float-right">
            <a data-cy="back-btn" href="/" className="btn gap-2 btn-sm">
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              Back
            </a>
          </div>
          <h2 className="text-1xl font-bold tracking-tight text-gray-900">
            Damage Report
          </h2>
          <h6>REF NO: {pid && pid.toUpperCase()}</h6>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap">
            <div className="container mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 px-3">
                  <ImageGallery items={images} originalHeight={10} />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <div className="w-full">
                    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                      <div className="flex-auto p-4">
                        <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">
                          Summary
                        </h6>
                        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                          <li className="relative flex justify-between px-4 py-2 pl-0 mb-1 bg-white border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                            <div className="flex items-center">
                              <button className="leading-pro ease-soft-in text-xs bg-150 w-6.35 h-6.35 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-slate-700 border-transparent bg-transparent text-center align-middle font-bold uppercase text-slate-700 transition-all hover:opacity-75">
                                <i className="fas fa-user text-3xs"></i>
                              </button>
                              <div className="flex flex-col">
                                <h6 className="mb-1 leading-normal text-sm text-slate-700">
                                  Customer Name
                                </h6>
                                <span className="leading-tight text-xs"></span>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                              <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">
                                {reportData && reportData.customer.customerName}
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
                                {reportData && reportData.customer.mobileNo}
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
                                {reportData && (
                                  <img
                                    src={`https://vl.imgix.net/img/${reportData.vehicle.make
                                      .replace(/\W+/g, "-")
                                      .toLowerCase()}-logo.png`}
                                    alt={reportData.vehicle.make}
                                    className="h-6 inline-block mr-2"
                                  />
                                )}
                                {reportData && reportData.vehicle.make}
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
                                {reportData && reportData.vehicle.model}
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
                                {reportData && reportData.vehicle.vehicleNo}
                              </p>
                            </div>
                          </li>
                        </ul>
                        <p className="mt-10">Description</p>
                        <p className="mb-10 text-xs">
                          {reportData && reportData.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleProduct;
