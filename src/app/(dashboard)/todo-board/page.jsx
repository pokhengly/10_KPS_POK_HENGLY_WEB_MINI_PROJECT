import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import TodoCardComponent from "@/components/TodoCardComponent";

export default function TodoBoardPage() {
    return (
        <main className="w-full h-full mt-5">
            <ListBoardComponentHeader/>
            <div className="w-full flex space-x-4">
                <TodoCardComponent/>
                <TodoCardComponent/>
                <TodoCardComponent/>
                <TodoCardComponent/>
            </div>
            <div className="w-full mt-10 flex justify-end">
                <AddNewTaskComponent/>
            </div>
        </main>
    );
}