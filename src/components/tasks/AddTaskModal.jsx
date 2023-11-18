import { useForm } from "react-hook-form";
import Modal from "../ui/Model";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";


const AddTaskModal = ({isOpen,setIsOpen}) => {
    const {register,handleSubmit,reset} =useForm() 
    const dispatch =useDispatch()

    const onSubmit=(data)=>{
        dispatch(addTask(data))
        onCancel()
    }

    const onCancel=()=>{
        reset() 
        setIsOpen(false)
    
    }
    return (
        <div>
             <Modal
             isOpen={isOpen}
              setIsOpen={setIsOpen} 
              title='Add Task'
            >  

           <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3">
                <label htmlFor="title">Title</label>
                <input className="w-full rounded-md" type="text" id="title" {...register('name')}/>
                <label htmlFor="description">Description</label>
                <input className="w-full rounded-md" type="text" id="description" {...register('description')}/>
                <label htmlFor="email">Email</label>
                <input className="w-full rounded-md" type="text" id="email" {...register('email')}/>
                <label htmlFor="details">Details</label>
                <input className="w-full rounded-md" type="text" id="details" {...register('details')}/>
                <label htmlFor="date">Date</label>
                <input className="w-full rounded-md" type="date" id="date" {...register('date')}/>
                <label htmlFor="about">About</label>
                <input className="w-full rounded-md" type="text" id="about" {...register('about')}/>
                </div>
               <div className=" flex gap-5 mt-10">
               <button type="submit" className="btn btn-primary"> Submit</button>
                <button onClick={()=>onCancel()} type="button" className="btn btn-danger">Chancel</button>
               </div>
           </form>
            
            </Modal>
        </div>
    );
};

export default AddTaskModal;