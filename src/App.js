import React, { useEffect, useState } from "react";
import List from "./components/List/List";
import NewFolder from "./components/NewFolder/NewFolder";

import "./App.scss";
import Tasks from "./components/Tasks/Tasks";
import { useSelector } from "react-redux";

function App() {
    const tasksList = useSelector(state => state.task.tasks)
    const folderList = useSelector(state => state.list.list)
    const [folders, setFolders] = useState(folderList)
    
    useEffect(() => {
        let itemActive = document.querySelector('._active')

        if(itemActive?.classList.contains('_show-all')) {
            setFolders(folderList)
        }
    },[folderList])

    const addActive = (e) => {
        let lastActiveElem = document.querySelector("._active");
        let newElem = e.target.closest(".todo__list-item")

        if(newElem && !e.target.closest('._remove')) {
            lastActiveElem?.classList.remove("_active");
            newElem.classList.add("_active");
        }
    };

    const showTasks = (e, id) => {
        
        if(e.target.closest('._show-all')) {
            setFolders(folderList)
        } else {
            setFolders(folderList.filter(e => e.id === id))
        }
    }

    const listItemClickHandler = (e, id) => {
        addActive(e)
        showTasks(e, id)
    }

    const findColor = (id, arr) => {
        return arr.filter(color => color.id === id)[0].hex;
    }

    return (
        <div className="todo-wrapper">
            <div className="todo">
                <div className="todo__sidebar">
                    <List 
                    clickHandler={listItemClickHandler}
                    findColor={findColor}
                    />
                    <NewFolder />
                </div>
                <div className="todo__tasks">
                    {folders.map(item => {
                        return (
                            <Tasks 
                            colorId={item.colorId}
                            folderName={item.name}
                            tasks={tasksList}
                            key={item.id}
                            idFolder={item.id}
                            findColor={findColor}
                            />
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
