import React from "react";
import { useDispatch } from "react-redux";
import { filterGenre, filterPlatform, getGames, orderAZ, orderZA } from "../../redux/actions";

import "./Filter.css"


export default function Filter(){

    let dispatch = useDispatch();

    return(
        <div className="filter-td">
             <section className="ftco-section">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="table-wrap">
						<table className="table">
					    <thead className="thead-primary">
					      <tr>
					        <th>Platform</th>
					        <th>Genre</th>
					        <th>Order by...</th>
					      </tr>
					    </thead>
					    <tbody>
					      <tr>
					        <th><a onClick={() => dispatch(filterPlatform("PC (Windows)"))} className="btn btn-primary">PC</a></th>
					        <td><a onClick={() => dispatch(filterGenre("Shooter"))} className="btn btn-primary">Shooter</a></td>
					        {/* <td><a onClick={() => currentGames.sort((a, b) => a.title.localeCompare(b.title))} className="btn btn-primary">A-Z</a></td> */}
                  <td><a onClick={() => dispatch(orderAZ())} className="btn btn-primary">A - Z</a></td>
					      </tr>
					      <tr>
					        <th><a onClick={() => dispatch(filterPlatform("Web Browser"))} className="btn btn-primary">Web Browser</a></th>
					        <td><a onClick={() => dispatch(filterGenre("Strategy"))} className="btn btn-primary">Strategy</a></td>
					        <td><a onClick={() => dispatch(orderZA())} className="btn btn-primary">Z - A</a></td>
					      </tr>
                          <tr>
                            <td></td>
                            <td><a onClick={() => dispatch(getGames())} className="btn btn-second">RESET FILTERS</a></td>
                            <td></td>
                          </tr>
					    </tbody>
					  </table>
					</div>
				</div>
			</div>
		</div>
	</section>
        </div>
    )
}