import React from "react";
import { apiUrl, clientBaseURLImages } from "config";
import { addToCart } from "../store/cart/actions";
import { useDispatch } from "react-redux";

const Recipt = ({finalOrder}) => {

  return (
    <div id="invoice-POS" style={{width:"min-content"}}>
    	<div id="top">
      		<div style={{float:"center"}}>
				<img src="/assets/images/Logo.jpg" width={120} height={15} />
			</div>
    	</div> <br/>
    
    	<div id="mid">
      		<div class="info">
       			 <p> 
					<b>Name</b> : <br/>
					<b>Email</b>   : JohnDoe@gmail.com<br/>
					<b>Phone</b>   : 555-555-5555<br/>
        		</p>
      		</div>
    	</div>
    
    	<div>
			<div id="table">
				<table style={{height:"200px", overflow:"auto"}}>
					<tr class="tabletitle">
						<td class="item"><h2>Item</h2></td>
						<td class="Hours"><h2>Qty</h2></td>
						<td class="Rate"><h2>Sub Total</h2></td>
					</tr>

					<tr class="service">
						<td class="tableitem"><p class="itemtext">Communication</p></td>
						<td class="tableitem"><p class="itemtext">5</p></td>
						<td class="tableitem"><p class="itemtext">$375.00</p></td>
					</tr>

					<tr class="service">
						<td class="tableitem"><p class="itemtext">Asset Gathering</p></td>
						<td class="tableitem"><p class="itemtext">3</p></td>
						<td class="tableitem"><p class="itemtext">$225.00</p></td>
					</tr>

					<tr class="service">
						<td class="tableitem"><p class="itemtext">Design Development</p></td>
						<td class="tableitem"><p class="itemtext">5</p></td>
						<td class="tableitem"><p class="itemtext">$375.00</p></td>
					</tr>

					<tr class="service">
						<td class="tableitem"><p class="itemtext">Animation</p></td>
						<td class="tableitem"><p class="itemtext">20</p></td>
						<td class="tableitem"><p class="itemtext">$1500.00</p></td>
					</tr>

					<tr class="service">
						<td class="tableitem"><p class="itemtext">Animation Revisions</p></td>
						<td class="tableitem"><p class="itemtext">10</p></td>
						<td class="tableitem"><p class="itemtext">$750.00</p></td>
					</tr>


					<tr class="tabletitle">
						<td></td>
						<td class="Rate"><h2>tax</h2></td>
						<td class="payment"><h2>$419.25</h2></td>
					</tr>

					<tr class="tabletitle">
						<td></td>
						<td class="Rate"><h2>Total</h2></td>
						<td class="payment"><h2>$3,644.25</h2></td>
					</tr>
				</table>
			</div>
		</div>
			<div id="legalcopy">
				<h6 class="legal"><strong>Thank you for your business!</strong>  
					Payment is expected within 31 days; please process this invoice within that time. 
					There will be a 5% interest charge per month on late invoices. 
				</h6>
			</div>		
	</div>
  );
};

export default Recipt;
