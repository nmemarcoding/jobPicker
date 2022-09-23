import "./Job.css"

const Job = (data) => {
    return (
        <div>
            <div className="card">
                    <img src={data.jobImg} alt="" className="card-img" />
                    <div className="workerContainer">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="user-img" />
                        <div className="name-container">
                            <div className="">nima</div>
                            <div>level 2 seller</div>
                        </div>
                    </div>
                    <p className="description">i will develop and design responsive react erb app</p>
                    <p className="rate">⭐️ 5.0</p>
                    <div className="priceContainer">
                        <div className="like">♡</div>
                        <div className="price"><small>STARTING AT</small> $490  </div>
                    </div>
                </div>
        </div>
    );
}

export default Job;
