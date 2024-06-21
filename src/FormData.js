import "./FormData.css";

export default function FormData() {
  return (
    <>
      
      <div className="form">
        <h1>Register New Device</h1>
        <form>
          {/* <label for="name">Name:</label> */}
          <input
            /* ref={id_value} */
            type="text"
            name="ID"
            placeholder="ID..."
          ></input>
          <input
           /*  ref={name_value} */
            type="text"
            name="name"
            placeholder="Name..."
          ></input>
          <button  type="button">
            Add
          </button>
        </form>
      </div>
    </>
  );
}