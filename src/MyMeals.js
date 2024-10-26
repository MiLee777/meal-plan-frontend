import { RiEdit2Fill, RiDeleteBin7Fill } from "react-icons/ri";

export const MyMeals = ({ text, updateInInput, deleteMeal }) => {
  return (
    <div>
      <p>{ text }</p>
      <RiEdit2Fill onClick={updateInInput}></RiEdit2Fill>
      <RiDeleteBin7Fill onClick={deleteMeal}></RiDeleteBin7Fill>
    </div>
  )
}