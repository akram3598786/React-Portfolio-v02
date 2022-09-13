import "./Todo.css";
import React from "react";


function ShowTodos(todos) {    
    return todos.map((todo) => {
        let { title, status } = todo;
        return <>
            {status ?
                <div className="row">
                    <p className="green">{title}</p>
                    <button className="btn_green todo_btn">Make Uncomplete</button>
                </div>
                : <div className="row">
                    <p className="red">{title}</p>
                    <button className="btn_red todo_btn">Make Complete</button>
                </div>
            }
        </>
    });
}
export { ShowTodos };