import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import "./NewFolder.scss";
import Input from "../Input/Input";
import Badge from "../Badge/Badge";

const NewFolder = () => {
    const colors = useSelector((state) => state.list.colors);
    const dispatch = useDispatch();
    const [selectedColor, setSelectedColor] = useState(1);

    const addFolder = (value) => {
        if (!value) {
            alert("Enter folder name");
            return;
        }

        dispatch({
            type: "ADD_LIST",
            payload: {
                name: value,
                id: uuidv4(),
                colorId: selectedColor,
            },
        });
    };

    return (
        <div className="todo__add-folder">
            <div className="todo__colors">
                {colors.map((color) => (
                    <Badge
                        onClick={() => setSelectedColor(color.id)}
                        key={color.id}
                        color={color.hex}
                        className={selectedColor === color.id && '_active-color'}
                    />
                ))}
            </div>
            <Input
                placeholder="Folder name"
                buttonText="Add Folder"
                clickHandler={addFolder}
            />
        </div>
    );
};

export default NewFolder;
