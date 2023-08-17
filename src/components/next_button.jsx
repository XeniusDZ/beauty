import "./next_button.css"

export function Next_Arrow() {
    return(
        <div className="arrow-right circle flex justify-center items-center rounded-full h-8 w-8 bg-zinc-900 hover:border-2 border-black hover:bg-white">
            <div className="arrow_right"><div className="inside_arrow"></div></div>
        </div>
    );

}

export function Previous_Arrow() {
    return(
        <div className="arrow-left circle flex justify-center items-center rounded-full rotate-180 h-8 w-8 bg-zinc-900 hover:border-2 border-black hover:bg-white">
            <div className="arrow_right"><div className="inside_arrow"></div></div>
        </div>
    );

}