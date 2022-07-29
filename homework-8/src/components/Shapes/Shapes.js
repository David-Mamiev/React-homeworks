import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


import { useFormik } from "formik";
import * as yup from "yup";

import "./style.scss";

const typesFigure = ["BOX", "POLYGON", "SPHERE", "PLANE", "CYLINDER"];

let createObjectValidateScheme = yup.object().shape({
    name: yup.string().required("You need to fill this up!"),
    type: "",
    position: yup.string().required("You need to fill this up!")
        .matches(
            /^\d{1,3},\d{1,3},\d{1,3}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    rotation: yup.string().required("You need to fill this up!")
        .matches(
            /^\d{1,3},\d{1,3},\d{1,3}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    scale: yup.string().required("You need to fill this up!"),
    color: "",
    wireframe: false,
    visibleOnScene: false
})

export function Shapes() {
    const { values, handleSubmit, handleChange, errors } = useFormik({
        validationSchema: createObjectValidateScheme,
        initialValues: {
            name: "",
            type: "",
            position: "",
            rotation: "",
            scale: "",
            color: "",
            wireframe: false,
            visibleOnScene: false
        },
        onSubmit(values, helpers) {
            console.log(values);
            helpers.resetForm();
        },
    });

    return (
        <div className="shapes">
            <h2 className="shapes__title">Shapes</h2>
            <pre>{JSON.stringify(values)}</pre>
            <pre>{JSON.stringify(errors)}</pre>
            <form className="shapes__form" onSubmit={handleSubmit}>
                <div className="shapes__input-div">
                    <TextField variant="standard" label="Name"
                        className="shapes__text-input shapes__input" onChange={handleChange} />
                </div>
                <div className="shapes__input-type">
                    <FormControl variant="standard">
                        <InputLabel color="primary" id="type">Type</InputLabel>
                        <Select
                            labelId="type"
                            sx={{width: 270}}
                            value={values.type}
                            onChange={handleChange}
                            label="Type"
                        >
                            <MenuItem value="BOX">BOX</MenuItem>
                            <MenuItem value={"POLYGON"}>POLYGON</MenuItem>
                            <MenuItem value={"SPHERE"}>SPHERE</MenuItem>
                            <MenuItem value={"PLANE"}>PLANE</MenuItem>
                            <MenuItem value={"CYLINDER"}>CYLINDER</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="shapes__input-div">
                    <TextField variant="standard" label="Position" className="shapes__text-input shapes__input" onChange={handleChange} />
                    <p className="shapes__error">{errors.position}</p>
                </div>
                <div className="shapes__input-div">
                    <TextField variant="standard" label="Rotation" className="shapes__text-input shapes__input" onChange={handleChange} />
                    <p className="shapes__error">{errors.rotation}</p>
                </div>
                <div className="shapes__input-div">
                    <TextField variant="standard" label="Scale" className="shapes__text-input shapes__input" onChange={handleChange} />
                    <p className="shapes__error">{errors.scale}</p>
                </div>
                <div className="shapes__input-div">
                    <TextField variant="standard" label="Color" className="shapes__text-input shapes__input" onChange={handleChange} />
                    <p className="shapes__error">{errors.color}</p>
                </div>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Wireframe" onChange={handleChange} />
                    <FormControlLabel control={<Checkbox />} label="Visible on Scene" onChange={handleChange} />
                </FormGroup>
                <Button variant="outlined" type="submit"
                    id="shapes__button">
                    Save
                </Button>
            </form>
        </div>
    )
}