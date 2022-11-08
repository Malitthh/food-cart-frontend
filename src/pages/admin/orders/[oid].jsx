import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  getOneOrderStart,
  updateOrderStart,
} from "../../../store/orders/actions";
import NavBar from "src/components/admin/NavBar";

const SingleOrder = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { oid } = router.query;
  const [reportData, setReportData] = useState();
  const { orders } = useSelector((state) => state);
  const { allOrders, singleOrder } = orders;
  console.log(orders, "or", singleOrder);
  // const featchOnLoad = async () => {
  //   dispatch(getOneOrderStart(oid));
  // };

  // useEffect(() => {
  //   featchOnLoad();
  // }, [oid]);

  useEffect(() => {
    if (!oid) {
      return;
    }

    const featchOnLoad = async () => {
      dispatch(getOneOrderStart(oid));
    };
    featchOnLoad();
  }, [oid]);

  console.log(router.query, "QQ");

  const sum =
    singleOrder &&
    singleOrder?.orderItems?.reduce(function (sum, item) {
      return sum + item.price * item.quantity;
    }, 0);

  return (
    <div className="min-h-full">
      <NavBar />

      <div className="container">
        <nav className="biolife-nav">
          <ul>
            <li className="nav-item">
              <a href="/admin" className="permal-link">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <span className="current-page">Orders</span>
            </li>
          </ul>
          <div style={{ float: "right" }}>
            <a
              data-cy="link-new-report"
              href="/admin/orders"
              className="new-report btn btn-primary gap-2 btn-sm"
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
              BACK
            </a>
          </div>
        </nav>
      </div>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="container mx-2">
            <div className="overflow-x-auto">
              <div class="container bootdey">
                <div class="row invoice row-printable">
                  <div class="col-md-10">
                    <div class="panel panel-default plain" id="dash_0">
                      <div class="panel-body p30">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="invoice-logo">
                              <img
                                width="100"
                                src="/assets/images/Logo.jpg"
                                alt="Invoice logo"
                              />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="invoice-from">
                              <ul class="list-unstyled text-right">
                                <li>Dash LLC</li>
                                <li>2500 Ridgepoint Dr, Suite 105-C</li>
                                <li>Austin TX 78754</li>
                                <li>VAT Number EU826113958</li>
                              </ul>
                            </div>
                          </div>

                          <div class="col-lg-12">
                            <div className="row pb-5 p-5">
                              <div className="col-md-3">
                                <p className="font-weight-bold mb-4">
                                  <b>Billing Address</b>
                                </p>
                                <p className="mb-1">
                                  {singleOrder.billingAddress?.name}
                                </p>
                                <p>{singleOrder.billingAddress?.mobile}</p>
                                <p className="mb-1">
                                  {singleOrder.billingAddress?.addressLine1},{" "}
                                  {singleOrder.billingAddress?.addressLine2}
                                </p>
                                <p className="mb-1">
                                  {singleOrder.billingAddress?.city},{" "}
                                  {singleOrder.billingAddress?.postalCode}
                                </p>
                              </div>

                              <div className="col-md-3 text-left">
                                <p className="font-weight-bold mb-4">
                                  <b>Shipping Address</b>
                                </p>
                                <p className="mb-1">
                                  {singleOrder.shippingAddress?.name}
                                </p>
                                <p>{singleOrder.shippingAddress?.mobile}</p>
                                <p className="mb-1">
                                  {singleOrder.shippingAddress?.addressLine1},{" "}
                                  {singleOrder.shippingAddress?.addressLine2}
                                </p>
                                <p className="mb-1">
                                  {singleOrder.shippingAddress?.city},{" "}
                                  {singleOrder.shippingAddress?.postalCode}
                                </p>
                              </div>

                              <div className="col-md-6 text-left">
                                <div class="invoice-details mt25">
                                  <div class="well">
                                    <ul class="list-unstyled mb0">
                                      <li>
                                        <strong>Invoice</strong> #936988
                                      </li>
                                      <li>
                                        <strong>Invoice Date:</strong> Monday,
                                        October 10th, 2022
                                      </li>
                                      <li>
                                        <strong>Due Date:</strong> Thursday,
                                        December 01st, 2022
                                      </li>
                                      <li>
                                        <strong>Status:</strong>{" "}
                                        <span class="label label-danger">
                                          Pending
                                        </span>
                                      </li>
                                   
                                    </ul>
                                    <div style={{ borderStyle: 'dotted', border: 'dashed red', marginTop: '10px', padding: '5px'}}>
                                        <hr />
                                        <strong>Status Update:</strong>
                                        <br />
                                         {" "}
                                        <input
                                          type="radio"
                                          id="pending"
                                          name="order_status"
                                          value="pending"
                                        />
                                          <label for="pending">Pending</label>
                                        <br />
                                         {" "}
                                        <input
                                          type="radio"
                                          id="cancel"
                                          name="order_status"
                                          value="cancel"
                                        />
                                          <label for="cancel">Cancel </label>
                                        <br />
                                         {" "}
                                        <input
                                          type="radio"
                                          id="complete"
                                          name="order_status"
                                          value="complete"
                                        />
                                         {" "}
                                        <label for="complete">Complete</label>
                                        <button className="btn btn-primary gap-2 btn-sm" style={{ float: 'right'}}>
                                          Update Order Status
                                        </button>
                                      </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="invoice-items">
                              <div class="table-responsive">
                                <table class="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th class="per70 text-center">Name</th>
                                      <th class="per70 text-center">Image</th>
                                      <th class="per5 text-center">
                                        Unit Price
                                      </th>
                                      <th class="per5 text-center">Qty</th>
                                      <th class="per25 text-center">Total</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {singleOrder &&
                                      singleOrder.orderItems?.map(
                                        (product, key) => (
                                          <tr>
                                            <td>{product.productName}</td>
                                            <td class="text-center">
                                              <img
                                                src={product.image}
                                                height={32}
                                                width={32}
                                              />
                                            </td>
                                            <td class="text-right">
                                              LKR {product.price}.00
                                            </td>
                                            <td class="text-center">
                                              {product.quantity}
                                            </td>
                                            <td class="text-right">
                                              LKR{" "}
                                              {product.price * product.quantity}
                                              .00
                                            </td>
                                          </tr>
                                        )
                                      )}
                                  </tbody>
                                  <tfoot>
                                    <tr>
                                      <th colspan="4" class="text-right">
                                        Sub Total:
                                      </th>
                                      <th class="text-right">LKR {sum}.00</th>
                                    </tr>
                                    <tr>
                                      <th colspan="4" class="text-right">
                                        TAX:
                                      </th>
                                      <th class="text-right">LKR 00.00</th>
                                    </tr>
                                    <tr>
                                      <th colspan="4" class="text-right">
                                        Credit:
                                      </th>
                                      <th class="text-right">LKR 00.00</th>
                                    </tr>
                                    <tr>
                                      <th colspan="4" class="text-right">
                                        Total:
                                      </th>
                                      <th class="text-right">
                                        <b>LKR {sum}.00</b>
                                      </th>
                                    </tr>
                                  </tfoot>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default SingleOrder;
