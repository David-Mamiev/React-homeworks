import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { SchoolsApp } from "./components/SchoolsApp";

function App() {
    return (
        <>
            <Provider store={store}>
                {/* <Header /> */}
                <SchoolsApp />
            </Provider>
        </>
    );
}

export default App;


































// import "./App.css";
// import { Provider } from "react-redux";
// import { store } from "./store";
// import Header from "./components/Header";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import Button from '@mui/material/Button';


// let koginFormaValidationSchema = yup.object().shape({
//   email: yup.string().email("YOO EMAIL!").required("You need to fill this up!"),
//   password: yup.string().min(5).required("password"),
// });

// function App() {
//   const { values, handleSubmit, handleChange, errors } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit(values, helpers) {
//       console.log(values, helpers);
//       helpers.resetForm();
//     },
//   });

//   return (
//     <>
//       <pre> {JSON.stringify(values)} </pre>{" "}
//       {/ * < Provider store = { store } > * /}{" "}
//       <form className="form" onSubmit={handleSubmit}>
//         <label htmlFor="email"> email </label>{" "}
//         <input
//           type="email"
//           value={values.email}
//           onChange={handleChange}
//           name="email"
//           id="email"
//         >
//           {" "}
//         </input>{" "}
//         <label htmlFor="password"> password </label>{" "}
//         <input
//           type="password"
//           value={values.password}
//           onChange={handleChange}
//           id="password"
//           name="password"
//         >
//           {" "}
//         </input>{" "}
//         <button type="submit"> Log in </button>{" "}
//       </form>{" "}
//       <Button>Hello World</Button>
//       {/* </Provider> */}{" "}
//     </>
//   );
// }

// export default App;
