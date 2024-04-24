import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import ListCaredPage from "@/app/(dashboard)/todo-list/list-card/page";
import AddNewTaskComponent from "@/components/AddNewTaskComponent";

export default function TodoListPage() {
    return (
        <main className="w-full h-full flex mt-5 mx-5">
            <div className="w-[60%]">
                <ListBoardComponentHeader/>
                <ListCaredPage/>
                <div>

                </div>
            </div>

            <div className="w-[40%] mx-10">
                <MonthlyStatisticsComponent/>
                <div className="col-span-4 w-full mt-[90%] flex justify-end">
                    <AddNewTaskComponent/>
                </div>
            </div>
        </main>
    );
}
