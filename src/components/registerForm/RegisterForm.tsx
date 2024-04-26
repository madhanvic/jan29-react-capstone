import React, { useState } from "react";
import Input from "../ui/Input";
import { FormErrorInterface, FormStateInteface } from "../../interfaces";

const initialState: FormStateInteface = {
  name: {
    value: "",

    validator() {
      if (this.value.length === 0 || this.value === "") {
        return {
          result: false,
          message: "Field is required",
        };
      }

      return {
        result: true,
        message: null,
      };
    },
  },
  userName: {
    value: "",

    validator() {
      if (this.value.length === 0 || this.value === "") {
        return {
          result: false,
          message: "Field is required",
        };
      }
      return {
        result: true,
        message: null,
      };
    },
  },
  email: {
    value: "",

    validator() {
      if (this.value.length === 0 || this.value === "") {
        return {
          result: false,
          message: "Field is required",
        };
      }

      if (!/^[a-z]{3,}[a-z.0-9]{0,}(@\w+)(\.[a-z]{2,3})$/.test(this.value)) {
        return {
          result: false,
          message: "Please enter valid email address",
        };
      }

      return {
        result: true,
        message: null,
      };
    },
  },
  mobile: {
    value: "",

    validator() {
      if (this.value.length === 0 || this.value === "") {
        return {
          result: false,
          message: "Field is required",
        };
      }
      if (!/^[0-9]{10}$/.test(this.value)) {
        return {
          result: false,
          message: "Please enter atleast 10 digit",
        };
      }
      return {
        result: true,
        message: null,
      };
    },
  },
  shareMyRegistrationData: {
    value: false,
    validator() {
      if (this.value === false) {
        return {
          result: false,
          message: "Check this box if you want to proceed",
        };
      }
      return {
        result: true,
        message: null,
      };
    },
  },
};

const initialErrorState = {
  name: null,
  userName: null,
  email: null,
  mobile: null,
  shareMyRegistrationData: null,
};

const RegisterForm = () => {
  const [formData, setFormData] = useState<FormStateInteface>(initialState);
  const [error, setError] = useState<FormErrorInterface>(initialErrorState);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const keys = Object.keys(formData);

    const results = keys.map((key) => {
      if (
        key === "name" ||
        key === "userName" ||
        key === "mobile" ||
        key === "email" ||
        key === "shareMyRegistrationData"
      ) {
        const response = formData[key].validator();
        if (!response.result) {
          setError((prevState) => {
            return {
              ...prevState,
              [key]: response.message,
            };
          });
          return false;
        }
        setError((prevState) => {
          return {
            ...prevState,
            [key]: null,
          };
        });
        return true;
      }
    });
    const overallResults = results.every((result) => result === true);
    if (!overallResults) return;
    const data = JSON.stringify({
      name: formData["name"],
      userName: formData["userName"],
      email: formData["email"],
      mobile: formData["mobile"],
      shareMyRegistrationData: formData["shareMyRegistrationData"],
    });
    localStorage.setItem("formData", data);
    setError(initialErrorState);
    setFormData(initialState);
  };
  const onChangeHandler = ({ key, value }: { key: string; value: string }) => {
    if (
      key === "name" ||
      key === "userName" ||
      key === "mobile" ||
      key === "email"
    ) {
      setFormData((prevState) => {
        const prevStateEntries = Object.entries(prevState);
        const clonedPrevState = prevStateEntries.reduce(
          (previousValue, currentValue) => {
            return {
              ...previousValue,
              [currentValue[0]]: currentValue[1],
            };
          },
          prevState
        );

        return {
          ...clonedPrevState,
          [key]: {
            ...clonedPrevState[key],
            value: value,
          },
        };
      });
    }
  };
  const onCheckBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.getAttribute("name");
    if (key === "shareMyRegistrationData") {
      setFormData((prevState) => {
        const prevStateEntries = Object.entries(prevState);
        const clonedPrevState = prevStateEntries.reduce(
          (previousValue, currentValue) => {
            return {
              ...previousValue,
              [currentValue[0]]: currentValue[1],
            };
          },
          prevState
        );

        return {
          ...clonedPrevState,
          [key]: {
            ...clonedPrevState[key],
            value: e.target.checked,
          },
        };
      });
    }
  };

  return (
    <form className="register__form" onSubmit={submitHandler} noValidate>
      <div className="inputWrapper">
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={formData["name"]["value"]}
          setValue={onChangeHandler}
          error={error["name"]}
        />
        <Input
          type="text"
          placeholder="UserName"
          name="userName"
          value={formData["userName"]["value"]}
          setValue={onChangeHandler}
          error={error["userName"]}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData["email"]["value"]}
          setValue={onChangeHandler}
          error={error["email"]}
        />
        <Input
          type="number"
          placeholder="Mobile"
          name="mobile"
          value={formData["mobile"]["value"]}
          setValue={onChangeHandler}
          error={error["mobile"]}
        />
      </div>
      <div className="register__form--checkbox--container">
        <div className="register__form--checkbox--wrapper">
          <input
            type="checkbox"
            name="shareMyRegistrationData"
            id="shareMyRegistrationData"
            checked={formData["shareMyRegistrationData"]["value"]}
            onChange={onCheckBoxHandler}
          />
          <label htmlFor="shareMyRegistrationData">
            Share my registration data with Superapp
          </label>
        </div>
        {error["shareMyRegistrationData"] !== null && (
          <small className="error__msg">
            {error["shareMyRegistrationData"]}
          </small>
        )}
      </div>
      <button type="submit">SIGN UP</button>
    </form>
  );
};

export default RegisterForm;
