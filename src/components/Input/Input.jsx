import React, { useState } from "react";

import "./Input.scss";

const Input = ({ placeholder, clickHandler, buttonText }) => {
    const [value, setValue] = useState("");

    return (
        <div className="todo__input">
            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder={placeholder}
            />
            <button
                onClick={() => {
                    clickHandler(value);
                    setValue("");
                }}
            >
                <i>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 1V15"
                            stroke="black"
                            stroke-width="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M1 8H15"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </i>
                <span>{buttonText}</span>
            </button>
        </div>
    );
};

export default Input;
