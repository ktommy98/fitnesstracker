import React, { useState } from "react";
import { Flex, Heading, TextField, Button } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

export default function Profile({ userInfo, onUpdate }) {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);

    const age = parseInt(form.get("age"), 10);
    const height = parseFloat(form.get("height"));
    const weight = parseFloat(form.get("weight"));
    const goalWeight = parseFloat(form.get("goalWeight"));

    // Validation logic
    if (age < 0 || age > 100) {
      setErrorMessage("Age must be between 0 and 100.");
      return;
    }
    if (height < 0 || height > 270) {
      setErrorMessage("Height must be between 0 and 270 cm.");
      return;
    }
    if (weight < 0) {
      setErrorMessage("Weight cannot be negative.");
      return;
    }
    if (goalWeight < 0) {
      setErrorMessage("Goal weight cannot be negative.");
      return;
    }

    setErrorMessage(""); // Clear error message if validation passes

    const updatedInfo = {
      gender: form.get("gender"),
      age: age,
      height: height,
      weight: weight,
      goalWeight: goalWeight,
      activityLevel: form.get("activityLevel"),
    };

    onUpdate(updatedInfo);
  };

  return (
    <Flex direction="column" alignItems="center" padding="2rem">
      <Heading level={1}>Profile</Heading>
      <form onSubmit={handleProfileUpdate}>
        {errorMessage && (
          <div style={{ color: "red", marginBottom: "1rem" }}>{errorMessage}</div>
        )}
        <TextField
          name="age"
          placeholder="Age"
          type="number"
          defaultValue={userInfo.age}
          required
        />
        <TextField
          name="height"
          placeholder="Height (cm)"
          type="number"
          defaultValue={userInfo.height}
          required
        />
        <TextField
          name="weight"
          placeholder="Weight (kg)"
          type="number"
          defaultValue={userInfo.weight}
          required
        />
        <TextField
          name="goalWeight"
          placeholder="Goal Weight (kg)"
          type="number"
          defaultValue={userInfo.goalWeight}
          required
        />
        <select name="activityLevel" defaultValue={userInfo.activityLevel} required>
          <option value="">Select Activity Level</option>
          <option value="sedentary">Sedentary</option>
          <option value="light">Lightly Active</option>
          <option value="moderate">Moderately Active</option>
          <option value="active">Active</option>
          <option value="veryActive">Very Active</option>
        </select>
        <Button type="submit" variation="primary"
        style={{ marginTop: "1rem", backgroundColor: "#0073e6", color: "#fff" }}>
          Update Profile
        </Button>
      </form>
      <Button
        onClick={() => navigate("/")}
        variation="primary"
        style={{ marginTop: "1rem", backgroundColor: "#0073e6", color: "#fff" }}
      >
        Back to Main Page
      </Button>
    </Flex>
  );
}
