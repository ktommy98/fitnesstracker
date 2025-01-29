import { useState } from "react";
import {
  Authenticator,
  Button,
  Text,
  TextField,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import "@aws-amplify/ui-react/styles.css";
import { GiCook, GiWeightLiftingUp, GiBroccoli, GiSuspicious } from "react-icons/gi";
import outputs from "../amplify_outputs.json";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import Recipes from "./pages/recipes";
import Workoutplan from "./pages/WorkoutPlan/workoutplan";
import Profile from "./pages/Profile/profile";


Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export default function App() {
  const [userInfo, setUserInfo] = useState({
    gender: "",
    age: "",
    height: "",
    weight: "",
    goalWeight: "",
    activityLevel: "",
  });

  const [isUserInfoComplete, setIsUserInfoComplete] = useState(false);
  const [dailyCalories, setDailyCalories] = useState(0);

  const handleUserInfoSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);

    const gender = form.get("gender");
    const age = parseFloat(form.get("age"));
    const height = parseFloat(form.get("height"));
    const weight = parseFloat(form.get("weight"));
    const activityLevel = form.get("activityLevel");

    const newUserInfo = {
      gender,
      age,
      height,
      weight,
      goalWeight: form.get("goalWeight"),
      activityLevel,
    };

    setUserInfo(newUserInfo);

    const bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    const calculatedCalories = bmr * activityMultiplier[activityLevel];
    setDailyCalories(calculatedCalories.toFixed(0));
    setIsUserInfoComplete(true);
  };

  const handleProfileUpdate = (updatedInfo) => {
    setUserInfo(updatedInfo);
    const bmr =
      updatedInfo.gender === "male"
        ? 10 * updatedInfo.weight + 6.25 * updatedInfo.height - 5 * updatedInfo.age + 5
        : 10 * updatedInfo.weight + 6.25 * updatedInfo.height - 5 * updatedInfo.age - 161;

    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    const calculatedCalories = bmr * activityMultiplier[updatedInfo.activityLevel];
    setDailyCalories(calculatedCalories.toFixed(0));
  }

  const foodData = {
    rice: { calories: 130, carbs: 28.2, protein: 2.7, fat: 0.3 },
    chicken: { calories: 165, carbs: 0, protein: 31, fat: 3.6 },
    apple: { calories: 52, carbs: 14, protein: 0.3, fat: 0.2 },
    banana: { calories: 89, carbs: 22.8, protein: 1.1, fat: 0.3 },
    egg: { calories: 68, carbs: 0.6, protein: 6, fat: 5 },
    salmon: { calories: 208, carbs: 0, protein: 20, fat: 13 },
    potato: { calories: 77, carbs: 17.6, protein: 2, fat: 0.1 },
    avocado: { calories: 160, carbs: 8.5, protein: 2, fat: 14.7 },
    almond: { calories: 575, carbs: 21.6, protein: 21.2, fat: 49.9 },
    yogurt: { calories: 59, carbs: 3.6, protein: 10, fat: 0.4 },
    peanutButter: { calories: 588, carbs: 20, protein: 25, fat: 50 },
    broccoli: { calories: 34, carbs: 6.6, protein: 2.8, fat: 0.4 },
    cheese: { calories: 402, carbs: 1.3, protein: 25, fat: 33 },
    oats: { calories: 389, carbs: 66.3, protein: 16.9, fat: 6.9 },
    tofu: { calories: 144, carbs: 3.9, protein: 15.7, fat: 8.1 },
    steak: { calories: 271, carbs: 0, protein: 25.9, fat: 19.4 },
    milk: { calories: 42, carbs: 5, protein: 3.4, fat: 1 },
    spinach: { calories: 23, carbs: 3.6, protein: 2.9, fat: 0.4 },
    cucumber: { calories: 16, carbs: 3.6, protein: 0.7, fat: 0.1 },
    carrot: { calories: 41, carbs: 9.6, protein: 0.9, fat: 0.2 },
    lentils: { calories: 116, carbs: 20, protein: 9, fat: 0.4 },
    chickpeas: { calories: 164, carbs: 27.4, protein: 8.9, fat: 2.6 },
    turkey: { calories: 135, carbs: 0, protein: 30, fat: 1 },
    pork: { calories: 242, carbs: 0, protein: 27, fat: 14 },
    cod: { calories: 82, carbs: 0, protein: 18, fat: 0.7 },
  };
  
  

  const [mealType, setMealType] = useState("breakfast");
  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
  });

  const calculateCalories = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const foodName = form.get("foodName").toLowerCase();
    const amount = parseFloat(form.get("amount"));

    if (!foodData[foodName]) {
      alert("Food not found in database.");
      return;
    }

    const foodInfo = foodData[foodName];
    const calories = ((foodInfo.calories / 100) * amount).toFixed(2);
    const carbs = ((foodInfo.carbs / 100) * amount).toFixed(2);
    const protein = ((foodInfo.protein / 100) * amount).toFixed(2);
    const fat = ((foodInfo.fat / 100) * amount).toFixed(2);

    setMeals((prevMeals) => ({
      ...prevMeals,
      [mealType]: [
        ...prevMeals[mealType],
        {
          name: foodName,
          amount,
          calories,
          carbs,
          protein,
          fat,
        },
      ],
    }));

    event.target.reset();
  };

  const deleteFood = (meal, indexToDelete) => {
    setMeals((prevMeals) => ({
      ...prevMeals,
      [meal]: prevMeals[meal].filter((_, index) => index !== indexToDelete),
    }));
  };

  const calculateTotals = () => {
    const allMeals = Object.values(meals).flat();
    const totalCalories = allMeals.reduce((sum, food) => sum + parseFloat(food.calories), 0);
    const totalCarbs = allMeals.reduce((sum, food) => sum + parseFloat(food.carbs), 0);
    const totalProtein = allMeals.reduce((sum, food) => sum + parseFloat(food.protein), 0);
    const totalFat = allMeals.reduce((sum, food) => sum + parseFloat(food.fat), 0);

    return {
      totalCalories,
      totalCarbs,
      totalProtein,
      totalFat,
    };
  };

  const { totalCalories, totalCarbs, totalProtein, totalFat } = calculateTotals();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
    <Authenticator>
      {({ signOut }) => (
        <>
          {!isUserInfoComplete ? (
            <Flex
              className="user-info-form"
              as="form"
              onSubmit={handleUserInfoSubmit}
              direction="column"
              alignItems="center"
            >
              <Heading level={2}>Enter Your Information</Heading>
              <select name="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <TextField
                name="age"
                placeholder="Age"
                type="number"
                required
              />
              <TextField
                name="height"
                placeholder="Height (cm)"
                type="number"
                required
              />
              <TextField
                name="weight"
                placeholder="Weight (kg)"
                type="number"
                required
              />
              <TextField
                name="goalWeight"
                placeholder="Goal Weight (kg)"
                type="number"
                required
              />
              <select name="activityLevel" required>
                <option value="">Select Activity Level</option>
                <option value="sedentary">Sedentary</option>
                <option value="light">Lightly Active</option>
                <option value="moderate">Moderately Active</option>
                <option value="active">Active</option>
                <option value="veryActive">Very Active</option>
              </select>
              <Button type="submit" variation="primary">
                Submit
              </Button>
            </Flex>
          ) : (
            <Flex direction="row" width="100%" height="150vh">
            <Flex
              as="nav"
              direction="column"
              backgroundColor="#1230AE"
              padding="1rem"
              width="15%"
              boxShadow="2px 0 5px rgba(209, 204, 213, 0.99) 0)"
              gap="1rem"
            >
              <Link to="/recipes">
              <Flex alignItems="center" gap="10px" cursor="pointer">
                <GiCook size={40} color="#C68FE6" />
                <Text fontWeight="bold" style={{ color: "#fff" }}>Recipes</Text>
              </Flex>
              </Link>
              <Link to="/workoutplan">
              <Flex alignItems="center" gap="10px" cursor="pointer">
                <GiWeightLiftingUp size={40} color="#C68FE6"/>
                <Text fontWeight="bold" style={{ color: "#fff" }}>Workout Plan</Text>
              </Flex>
              </Link>
              <Link to="/profile">
                          <Flex alignItems="center" gap="10px" cursor="pointer">
                            <GiSuspicious size={40} color="#C68FE6"/>
                            <Text fontWeight="bold" style={{ color: "#fff" }}>Profile</Text>
                          </Flex>
                        </Link>
                        <Button onClick={signOut}
              style={{ marginTop: "57rem", backgroundColor: "#FFF7F7", color: "black" }}>
                Sign Out
              </Button>
            </Flex>
            

            <Flex
              className="App"
              justifyContent="center"
              alignItems="center"
              direction="column"
              width="70%"
              margin="0 auto"
            >
              <Heading level={1} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <GiBroccoli size={60} color="#16C47F"/> Food Tracker
              </Heading>
              <Text>Your Daily Calorie Goal: {dailyCalories} kcal</Text>

              <Flex
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                padding="2rem"
                width="100%"
                backgroundColor="#f7f7f7"
                borderRadius="12px"
                marginBottom="2rem"
                boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
              >
                <Flex direction="column" alignItems="center">
                  <Text fontSize="2rem" fontWeight="bold">{totalCalories.toFixed(0)}</Text>
                  <Text>Eaten</Text>
                </Flex>
                <Flex direction="column" alignItems="center">
                  <Text fontSize="2rem" fontWeight="bold">{(dailyCalories - totalCalories).toFixed(0)}</Text>
                  <Text>Remaining</Text>
                </Flex>
                <Flex direction="column" alignItems="center">
                  <Text fontSize="2rem" fontWeight="bold">0</Text>
                  <Text>Burned</Text>
                </Flex>
              </Flex>

              <Flex
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                padding="1rem"
                width="100%"
                backgroundColor="#f7f7f7"
                borderRadius="12px"
                marginBottom="2rem"
                boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
              >
                <Flex direction="column" alignItems="center">
                  <Text fontSize="1rem">Carbs</Text>
                  <Text fontSize="1.2rem" fontWeight="bold">{totalCarbs.toFixed(0)} / 258 g</Text>
                </Flex>
                <Flex direction="column" alignItems="center">
                  <Text fontSize="1rem">Protein</Text>
                  <Text fontSize="1.2rem" fontWeight="bold">{totalProtein.toFixed(0)} / 103 g</Text>
                </Flex>
                <Flex direction="column" alignItems="center">
                  <Text fontSize="1rem">Fat</Text>
                  <Text fontSize="1.2rem" fontWeight="bold">{totalFat.toFixed(0)} / 68 g</Text>
                </Flex>
              </Flex>

              <Flex justifyContent="center" gap="1rem" margin="2rem 0">
              <Button
                variation={mealType === "breakfast" ? "primary" : "default"}
                onClick={() => setMealType("breakfast")}
                style={{
                  backgroundColor: mealType === "breakfast" ? "#8a2be2" : "#d8bfd8",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >Breakfast</Button>

<Button
                variation={mealType === "lunch" ? "primary" : "default"}
                onClick={() => setMealType("lunch")}
                style={{
                  backgroundColor: mealType === "lunch" ? "#8a2be2" : "#d8bfd8",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >Lunch</Button>

                <Button
                variation={mealType === "dinner" ? "primary" : "default"}
                onClick={() => setMealType("dinner")}
                style={{
                  backgroundColor: mealType === "dinner" ? "#8a2be2" : "#d8bfd8",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >Dinner</Button>

                <Button
                variation={mealType === "snacks" ? "primary" : "default"}
                onClick={() => setMealType("snacks")}
                style={{
                  backgroundColor: mealType === "snacks" ? "#8a2be2" : "#d8bfd8",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >Snacks</Button>

              </Flex>

              <View as="form" margin="3rem 0" onSubmit={calculateCalories}>
                <Flex
                  direction="column"
                  justifyContent="center"
                  gap="2rem"
                  padding="2rem"
                >
                  <TextField
                    name="foodName"
                    placeholder="Food Name (e.g., rice, chicken, apple)"
                    label="Food Name"
                    labelHidden
                    variation="quiet"
                    required
                  />
                  <TextField
                    name="amount"
                    placeholder="Amount (g, ml, etc.)"
                    label="Amount"
                    type="number"
                    labelHidden
                    variation="quiet"
                    required
                  />

              <Button
                type="submit"
                variation="primary"
                style={{
                  backgroundColor: "#8a2be2", 
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                Add to {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
              </Button>

                </Flex>
              </View>

              <Divider />
              <Heading level={2}>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</Heading>
              <Grid
                className="grid"
                margin="3rem 0"
                autoFlow="column"
                justifyContent="center"
                gap="2rem"
                alignContent="center"
              >
                {meals[mealType].map((food, index) => (
                  <Flex
                    key={index}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="1rem"
                    border="1px solid #ddd"
                    padding="1.5rem"
                    borderRadius="8px"
                    className="box"
                  >
                    <Heading level={3}>{food.name}</Heading>
                    <Text>{food.amount}g</Text>
                    <Text>Calories: {food.calories} kcal</Text>
                    <Text>Carbs: {food.carbs}g</Text>
                    <Text>Protein: {food.protein}g</Text>
                    <Text>Fat: {food.fat}g</Text>
                    <Button
                      variation="destructive"
                      onClick={() => deleteFood(mealType, index)}
                    >
                      Delete
                    </Button>
                  </Flex>
                ))}
              </Grid>
             
            </Flex>
            </Flex>
          )}
        </>
      )}
    </Authenticator>
          }
          />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/workoutplan" element={<Workoutplan />} />
        <Route path="/profile" element={<Profile userInfo={userInfo} onUpdate={handleProfileUpdate} />} />
        </Routes>
      </Router>
  );
}
