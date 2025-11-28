import { use } from "react";
import { AuthContext } from "../../context/context";

const Registration = () => {
  const { userCreate } = use(AuthContext);

  const handleFromData = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    userCreate(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-11/12 mx-auto h-screen flex items-center justify-center">
      <form
        onSubmit={handleFromData}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className=" text-center font-bold">Registration</legend>

        <label className="label">Full Name</label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Full Name"
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />

        <button className="btn btn-neutral mt-4">Registration</button>
      </form>
    </div>
  );
};

export default Registration;
