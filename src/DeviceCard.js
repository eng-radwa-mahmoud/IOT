import "./DeviceCard.css"

export default function DeviceCard() {

const Componet = [{identifier:"1", name:"led1", status:true},{identifier:"2", name:"led2", status:false} ]

const colorlist = Componet.map((cmp) => {
    return (
      <div
        key={cmp.identifier}
        className="card-list"
        onClick={() => {
          
        }}
      >
        <h1 className="card-item">
          <h3>
            <span
              style={{
                // fontSize: "30px",
                // width: "20px",
                // height: "20px",
                display: "inline",
                width: "20px",
                height: "20px",
                backgroundColor: "transparent",
              }}
            >
              {cmp.identifier}
            </span>{" "}
            {cmp.name}
          </h3>
          <div className="status">
            <span>status</span>
            <div
              className="arrow"
              style={{ backgroundColor: cmp.status ? "green" : "red" }}
            >
              {" "}
            </div>
          </div>
        </h1>
      </div>
    );
  })
  return (
    <>
      <div style={{ marginTop: "20px" ,marginRight:"500px"}}>{colorlist}</div>
      </>
  )
};