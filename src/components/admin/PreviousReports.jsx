/**
 * This componenet use to show the previous damage reports in dashboard
 * getting damageReportsData as a prop
 * @param {*} param0
 * @returns
 */
const PreviousReports = ({ damageReportsData }) => {
  return (
    <div className="container mx-2">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Make & Model</th>
              <th>Customer Name</th>
              <th>Mobile No</th>
              <th>Vehicle No</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {damageReportsData &&
              damageReportsData.map((dr, key) => (
                <tr key={key} className={key % 2 === 1 ? "active" : ""}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img
                            src={`https://vl.imgix.net/img/${dr.vehicle.make
                              .replace(/\W+/g, "-")
                              .toLowerCase()}-logo.png`}
                          />
                        </div>
                      </div>
                      <div>
                        <p> {dr.vehicle.make} </p>
                        <p className="text-gray-500 text-sm font-semibold tracking-wide">
                          {dr.vehicle.model}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>{dr.customer.customerName}</td>
                  <td>{dr.customer.mobileNo}</td>
                  <td>{dr.vehicle.vehicleNo}</td>
                  <td>
                    <a
                      data-cy={`view-report-btn${key}`}
                      href={`reports/${dr.uuid}`}
                      className="inline-block px-6 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none leading-pro text-xs ease-soft-in bg-150 tracking-tight-soft bg-x-25 text-slate-400"
                    >
                      <i className="leading-tight fa fa-eye text-xs"></i>
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviousReports;
