import { Link } from "react-router-dom";
import "./Job.css"

const Job = ({data}) => {
   
    return (
        <div>
            <div className="card">
                    <Link to="/job/:id">
                    <img  src="" alt="" className="card-img" />
                    </Link>
                    <div className="workerContainer">
                        
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="user-img" />
                     
                        <div className="name-container">
                            <div className="">{data.owner.username}</div>
                            <div>level 2 seller</div>
                        </div>
                    </div>
                    <p className="description">{data.desc}</p>
                    <p className="rate">⭐️ 5.0</p>
                    <div className="priceContainer">
                        <div className="like">♡</div>
                        <div className="price"><small>STARTING AT</small> ${data.price}  </div>
                    </div>
                </div>
        </div>
    );
}

export default Job;
