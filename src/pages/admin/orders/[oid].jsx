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
  const [status, setStatus] = useState();
  const { orders } = useSelector((state) => state);
  const { allOrders, singleOrder } = orders;
  console.log(orders, "or", singleOrder);
  const token =  window.localStorage.getItem('@token');
  useEffect(() => {
    if (!oid) {
      return;
    }

    const featchOnLoad = async () => {
      const payload = {
        id: oid,
        token
      }
      dispatch(getOneOrderStart(payload));
    };
    featchOnLoad();
  }, [oid]);



  const sum =
    singleOrder &&
    singleOrder?.orderItems?.reduce(function (sum, item) {
      return sum + item.price * item.quantity;
    }, 0);

  const updateOrderStatus = () => {
   console.log("hi")
    const order = singleOrder;
    order.status = status
    const payload = {
      data: order,
      token
    }
    dispatch(updateOrderStart(payload));
  };

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
              <a href="/admin/orders" className="permal-link">
                Order List
              </a>
            </li>
            <li className="nav-item">
              <span className="current-page">
                <b>Orders Details</b>
              </span>
            </li> </ul><br/>
            <div style={{ float: "left" }}>
              <a
                data-cy="link-new-report"
                href="/admin/orders"
                className="new-report btn btn-warning gap-2 btn-sm"
              >
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                &nbsp;&nbsp;BACK
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
                                width="150"
                                src="/assets/images/Logo.jpg"
                                alt="Invoice logo"
                              />
                            </div>
                            <br />
                            <div style={{ paddingLeft: "15px", color:"#b19a1a" }}>
                              <b>Date & Time :</b> 2022-11-15 11.30 P.M <br/>
                                Order No: EU826113958
                            </div>
                          </div><br/> <br/>

                          <div class="col-lg-6">
                            <div class="invoice-from">
                              <ul class="list-unstyled text-right">
                                <li><i><b>Food Cart (Pvt) Ltd.</b></i></li>
                                <li>No 68/13A 3rd Cross street, 11</li>
                                <li>Kandy</li>
                                <li>Sri Lanka</li>
                              </ul>
                            </div>
                          </div>

                          <div class="col-lg-12">
                            <div className="row pb-3 p-1">
                              <div className="col-md-6 text-left">
                                <div>
                                  <div class="col-md-12">
                                    <strong style={{ color: "#676767" }}>
                                      BILLING NAME | CONTACT NO
                                    </strong>
                                    <ul class="list-unstyled mb0">
                                      <li>
                                        {singleOrder.billingAddress?.name} |{" "}
                                        {singleOrder.billingAddress?.mobile}
                                      </li>
                                    </ul> <br/>
                                    <strong style={{ color: "#676767" }}>
                                      BILLING ADDRESS | CITY | POSTAL CODE
                                    </strong>
                                    <ul class="list-unstyled mb0">
                                      <li>
                                        {singleOrder.billingAddress ?.addressLine1},{" "}
                                        {singleOrder.billingAddress ?.addressLine2 }{" "}
                                        | {singleOrder.billingAddress?.city}, |{" "}
                                        {singleOrder.billingAddress?.postalCode}
                                      </li>
                                    </ul>
                                    <br />
                                    <strong style={{ color: "#90910ff2" }}>
                                      SHIPPING NAME | CONTACT NO
                                    </strong>
                                    <ul class="list-unstyled mb0">
                                      <li>
                                        {singleOrder.shippingAddress?.name} |{" "}
                                        {singleOrder.shippingAddress?.mobile}
                                      </li>
                                    </ul>
                                    <strong style={{ color: "#90910ff2" }}>
                                      SHIPPING ADDRESS | CITY | POSTAL CODE
                                    </strong>
                                    <ul class="list-unstyled mb0">
                                      <li>
                                        {singleOrder.shippingAddress?.addressLine1 } ,{" "}
                                        {singleOrder.shippingAddress?.addressLine2}{" "}
                                        | {singleOrder.shippingAddress?.city} |{" "}
                                        {singleOrder.shippingAddress?.postalCode }
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-6 text-left">
                                <div class="invoice-details mt25">
                                  <div class="well" style={{border:"none", paddingTop:"1px", backgroundColor:"#f6f7e9", borderRadius:"5px"}}>
                                    <ul class="list-unstyled">
                                      <li>
                                        <strong>Invoice : </strong> #936988
                                      </li>
                                      <li>
                                        <strong>Invoice Date :</strong> Monday,
                                        October 10th, 2022
                                      </li>
                                      <li>
                                        <strong>Due Date :</strong> Thursday,
                                        December 01st, 2022
                                      </li>
                                      <li>
                                        <strong>Status : </strong>{" "}
                                        <span class="label label-danger">
                                          {singleOrder.status}
                                        </span>
                                      </li>
                                    </ul>
                                    <div
                                      style={{
                                        borderStyle: "dotted",
                                        border: "dashed red",
                                        marginTop: "10px",
                                        padding: "5px",
                                      }}
                                    >
                                      <hr />
                                      <strong>Status Update:</strong>
                                      <br /> {" "}
                                      <input
                                        type="radio"
                                        id="processing"
                                        name="order_status"
                                        value="processing"
                                        onChange={() => setStatus("processing")}
                                      />
                                       {" "}
                                      <label for="processing">Processing</label>
                                      <br /> {" "}
                                      <input
                                        type="radio"
                                        id="shipped"
                                        name="order_status"
                                        value="shipped"
                                        onChange={() => setStatus("shipped")}
                                      />
                                        <label for="shipped"> Shipped </label>
                                      <br /> {" "}
                                      <input
                                        type="radio"
                                        id="delivered"
                                        name="order_status"
                                        value="delivered"
                                        onChange={() => setStatus("delivered")}
                                      />
                                        <label for="delivered">Delivered</label>
                                      <button
                                        onClick={() => updateOrderStatus()}
                                        className="btn btn-success gap-2 btn-sm"
                                        style={{
                                          float: "right",
                                          borderRadius: "5px",
                                        }}
                                      >
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
                                    <tr style={{ backgroundColor: "#ecf0e2"}}>
                                      <th class="per70 text-center">
                                        <b>Name</b>
                                      </th>
                                      <th class="per70 text-center">
                                        <b>Image</b>
                                      </th>
                                      <th class="per5 text-center">
                                        <b> Unit Price</b>
                                      </th>
                                      <th class="per5 text-center">
                                        <b>Qty</b>
                                      </th>
                                      <th class="per25 text-center">
                                        <b>Amount</b>
                                      </th>
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
                                               {product.price}.00
                                            </td>
                                            <td class="text-center">
                                              {product.quantity}
                                            </td>
                                            <td class="text-right">{" "}
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
                                        Sub Total
                                      </th>
                                      <th class="text-right"> {sum}.00</th>
                                    </tr>
                                    <tr>
                                      <th colspan="4" class="text-right">
                                        Discount
                                      </th>
                                      <th class="text-right"> 00.00</th>
                                    </tr>
                                    <tr>
                                      <th colspan="4" class="text-right">
                                        Service Charge
                                      </th>
                                      <th class="text-right"> 00.00</th>
                                    </tr>
                                    <tr>
                                      <th colspan="4" class="text-right">
                                        <b>Total Amount </b>
                                      </th>
                                      <th class="text-right">
                                        <b>LKR {sum}.00</b>
                                      </th>
                                    </tr>
                                  </tfoot>
                                </table>
                              </div>
                              <p style={{float:"right", fontSize:"12px"}}>All amounts are in Sri lankan rupees (LKR)</p>
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
