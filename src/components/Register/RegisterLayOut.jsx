import React, { useState } from "react";
import { useDispatch } from "react-redux";
import RegisterIntro from "../Register/RegisterIntro";
import FormGeneral from "./RegisterForm/FormGeneral";
import PrevRegisterGuide from "./RegisterForm/PrevRegisterGuide";
import { addGuide } from "../../store/guidesSlice";

const RegisterLayOut = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    number: "",
    destinatary: "",
    origin: "",
    destiny: "",
    date: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGuide = {
      number: formData.number.trim(),
      destinatary: formData.destinatary.trim(),
      origin: formData.origin.trim(),
      destiny: formData.destiny.trim(),
      date: formData.date,
      status: formData.status,
      history: [
        {
          date: new Date().toLocaleString(),
          status: formData.status,
        },
      ],
    };

    if (
      !newGuide.number ||
      !newGuide.destinatary ||
      !newGuide.origin ||
      !newGuide.destiny ||
      !newGuide.date ||
      !newGuide.status
    ) {
      alert("Favor de ingresar todos los datos al formulario");
      return;
    }

    dispatch(addGuide(newGuide));

    setFormData({
      number: "",
      destinatary: "",
      origin: "",
      destiny: "",
      date: "",
      status: "",
    });
  };

  return (
    <>
      <RegisterIntro />
      <FormGeneral formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
      <PrevRegisterGuide />
    </>
  );
};

export default RegisterLayOut;
