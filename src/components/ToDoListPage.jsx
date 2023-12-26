import Header from "./Header";
import Card from "./Card";
import TodoContainer from "./TodoContainer";

function ToDoListPage(){
    return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
        <Header />
        {/* card */}
        <div className="flex justify-between gap-7 flex-wrap my-5">
          <Card  bgcolor={"#8272DA"} title="23" subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title="December 26" subtitle={"11.11.11"} />
          <Card bgcolor={"#FCA201"} title="Bulit Using" subtitle={"React"} />
        </div>
        {/* todolist */}
         
         <TodoContainer/>




      </div>

    </div>
  );
}
export default ToDoListPage