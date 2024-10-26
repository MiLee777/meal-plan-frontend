import axios from 'axios';

const myUrl = 'https://meal-plan-backend-swvt.onrender.com';

const getAllMeals = (setMeal) => {
  axios.get(myUrl)
    .then(({ data }) => {
      console.log(data)
      setMeal(data)
    });
}

const addMeal = (title, setTitle, setMeal) => {
  // if (!title) {
  //   alert("Please provide a meal title"); // Предотвращение отправки пустого значения
  //   return;
  // }
  axios.post(`${myUrl}/saveMeals`, { title })
    .then((data) => {
      console.log(data)
      setTitle('')
      getAllMeals(setMeal)
    })
}

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
  axios.put(`${myUrl}/updateMeal`, { _id: mealId, title })
    .then((data) => {
      console.log(data)
      setTitle('')
      setEditing(false)
      getAllMeals(setMeal)
    })
}

const deleteMeal = (_id, setMeal) => {
  axios.post(`${myUrl}/deleteMeal`, { _id })
    .then((data) => {
      console.log(data)
      getAllMeals(setMeal)
    })
}

export { getAllMeals, addMeal, editMeal, deleteMeal };