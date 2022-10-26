import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { apiUrl } from "config";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { DamageReportSchema } from "../../../schema/productSchema";
import { useDispatch } from "react-redux";
import { addDamageReportStart } from "../../../store/products/actions";
import { toast } from "react-toastify";
import vehicles from "../../vehicles.json";
import NavBar from "src/components/admin/NavBar";

import axios from "axios";
import Select from "react-select";

const NewReport = () => {
  const vehicleOptions = [];

  const router = useRouter();
  const dispatch = useDispatch();

  const [vMakeModels, setVMakeModels] = useState({ make: "", model: "" });
  const [otherInfo, setOtherInfo] = useState({});
  const [files, setFile] = useState([]);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState();
  const [showForm, setShowForm] = useState("");
  /**
   * set image
   * @param {*} e
   * @returns
   */
  const handleImageFile = (e) => {
    setMessage("");
    let file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]["type"];
      const validImageTypes = [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/webp",
      ];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage("only images accepted");
      }
    }
  };

  /**
   * Remove added image before upload
   * @param {*} i
   */
  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };

  /**
   * set vehicle makde and model
   * @param {*} e
   */
  const onChangeVehicleMakeModels = (e) => {
    setVMakeModels({
      make: e.group,
      model: e.value,
    });

    validateField("vMakeModel", e.value);
  };

  /**
   * set customer name, mobile no and vehicle no
   * @param {*} e
   */
  const onChangeInput = (e) => {
    validateField(e.target.id, e.target.value);
    setOtherInfo({ ...otherInfo, [e.target.id]: e.target.value });
  };

  /**
   * loop vehicle.json and make options for react-select
   */
  const makeModels = () => {
    vehicles.map((v) => {
      let op = {
        label: v.name,
        options: [],
      };
      v.models.map((m) => {
        let row = {
          label: (
            <div className="flex px-2 py-1">
              <div>
                <img
                  src={`https://vl.imgix.net/img/${v.name
                    .replace(/\W+/g, "-")
                    .toLowerCase()}-logo.png`}
                  className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm w-9 rounded-xl"
                  alt="team7"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h6 className="mb-0 leading-normal text-sm">{m.name}</h6>
              </div>
            </div>
          ),
          value: m.name,
          group: v.name,
        };
        op.options.push(row);
      });
      vehicleOptions.push(op);
    });
  };

  makeModels();

  /**
   * OnSubmit method to invoke the database call
   */
  const onSubmit = async () => {
    const formData = new FormData();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const imgs = [];
    const imgUploadUrl = `${apiUrl}/upload`;

    // Todo: This isnt a proper implementation for a multiple upload since this will make multiple reqst to backend.
    // needs to do some changes to the API as well.
    // I'll keep it bit since I have a limited time
    for (var i = 0; i < files.length; i++) {
      formData.append("image", files[i]);
      formData.append("destination", "images");
      formData.append("create_thumbnail", true);

      const image = await axios.post(imgUploadUrl, formData, config);
      imgs.push(image.data);
    }

    let damageReport = {
      customer: {
        customerName: otherInfo.customerName,
        mobileNo: otherInfo.mobileNo,
      },
      photo: imgs,
      description: otherInfo.description,
      vehicle: {
        make: vMakeModels.make,
        model: vMakeModels.model,
        vehicleNo: otherInfo.vehicleNo,
      },
    };

    let newVehicle = {
      make: vMakeModels.make,
      model: vMakeModels.model,
      vehicleNo: otherInfo.vehicleNo,
      vehicleType: otherInfo.vehicleType,
    };

    dispatch(addDamageReportStart(damageReport));
    toast.success("Successfully Added !");
    setVMakeModels({ make: "", model: "" });
    setOtherInfo({});
    router.push("/");
  };

  /**
   * Validate Form
   * @param {*} e
   */

  const validateBeforeSave = (e) => {
    // create damageReport object to validate againts DamageReportSchema
    const drObject = {
      customerName: otherInfo.customerName,
      vehicleNo: otherInfo.vehicleNo,
      mobileNo: otherInfo.mobileNo,
      description: otherInfo.description,
      vMakeModel: vMakeModels.make,
    };

    const hasErrors = validateForm(drObject, DamageReportSchema);
    if (hasErrors) {
      setErrors(hasErrors);
      e.preventDefault();
      setShowForm("");
    } else {
      e.preventDefault();
      setShowForm("modal-open");
    }
  };

  /**
   * Validate single field on the fly
   * @param {*} name
   * @param {*} value
   */
  const validateField = (name, value) => {
    const errMsg = validateProperty(name, value, DamageReportSchema);

    if (errMsg) {
      errors[name] = errMsg;
    } else {
      delete errors[name];
    }
  };

  return (
    <div className="min-h-full">
      <NavBar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h2 className="text-1xl font-bold tracking-tight text-gray-900">
            Add Vehicle
          </h2>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body text-left">
              <form role="form">
                <h6 className="mb-4 font-bold leading-tight uppercase text-xs text-slate-500 text-center">
                  - Vehicle Details -
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 z-90">
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
                  <div className="w-full md:w-1/3 px-3">
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
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 z-90">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlhtmlFor="grid-first-name"
                    >
                      Vehicle Type
                    </label>
                    {/* <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a type</option>
                      <option value="lorry">Lorry</option>
                      <option value="bike">Bike</option>
                      <option value="van">Van</option>
                      <option value="threewheeler">ThreeWheeler</option>
                    </select> */}
                    <p className="text-red-500 text-xs italic">
                      {errors && errors["vMakeModel"]}
                    </p>
                  </div>
                </div>

                <h6 className="mb-4 font-bold leading-tight uppercase text-xs text-slate-500 text-center">
                  - Driver Details -
                </h6>
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
        </div>
      </main>
    </div>
  );
};

export default NewReport;
