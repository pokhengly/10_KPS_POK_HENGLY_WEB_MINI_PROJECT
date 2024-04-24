import React from "react";

export function ListCaredPage() {
    return (
        <div className="w-full mb-4 mt-5">
            <div className="bg-yellow-200 h-32 rounded-2xl px-4 py-5 flex justify-between ">
                <div className="flex gap-4 ">
                    <div className="bg-white w-[89px] flex flex-col items-center justify-center rounded-2xl">
                        <span className="text-red-500 text-md">MON</span>
                        <span className="text-3xl text-slate-800">18</span>
                    </div>
                    <div className="self-center ml-3">
                        <h3 className="font-semibold text-lg mb-2">Slack Integration</h3>
                        <p className="text-slate-700 text-sm font-thin">Add a field in the portal to let the user<br/>connect their Slack account.</p>
                    </div>
                </div>
                <div className="self-end">
                    <a className="px-10 py-3 font-semibold text-xs rounded-lg bg-white text-slate-800 capitalize">
                        Todo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ListCaredPage;