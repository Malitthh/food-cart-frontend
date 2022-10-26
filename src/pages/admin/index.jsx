import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "src/components/admin/NavBar";
import PreviousReports from "src/components/admin/PreviousReports";

const Home = () => {
  // set damage report data to usestate
  const [damageReportsData, setDamageReportsData] = useState([]);
  // get damage reports from state
  const { damageReports, auth  } = useSelector((state) => state);

  console.log(auth, "auth")

  // useEffect(() => {
  //   // get uuid's from state and loop it and read files in db folder
  //   const fileList = damageReports.getData;
  //   fileList.forEach((file) => {
  //     fetch(`/db/${file.uuid}.json`)
  //       .then((response) => {
  //         return response.json(); //parse json
  //       })
  //       .then((data) => {
  //         let modifyData = data;
  //         // adding uuid to the objects to identfy them
  //         modifyData.uuid = file.uuid;
  //         setDamageReportsData((damageReportsData) => [
  //           ...damageReportsData,
  //           modifyData,
  //         ]);
  //       });
  //   });
  // }, []);

  return (
    <div className="min-h-full">
      <NavBar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <div className="float-right">
            <a data-cy="link-new-report" href="/reports/new-report" className="new-report btn btn-primary gap-2 btn-sm">
                <i className="fa fa-plus" aria-hidden="true"></i>
                New Report
            </a>
          </div>
          <h1 className="text-1xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* <PreviousReports damageReportsData={damageReportsData} /> */}
        </div>
      </main>
    </div>
  );
};

export default Home;
