import React, { useState } from "react";
import { Flex, Heading, Button, TextField, Image, Text } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

export default function WorkoutPlan() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [imagesToShow, setImagesToShow] = useState([]);

  const handleSearch = () => {
    if (inputText.toLowerCase() === "chest") {
      setImagesToShow([
        { src: "/src/pages/WorkoutPlan/images/chest1.gif", title: "Flat Dumbbell Press" },
        { src: "/src/pages/WorkoutPlan/images/chest2.webp", title: "Incline Dumbbell Press" },
        { src: "/src/pages/WorkoutPlan/images/chest3.gif", title: "Bench Press" },
        { src: "/src/pages/WorkoutPlan/images/chest4.gif", title: "Chest Fly" },
      ]);
    } if (inputText.toLowerCase()=== "triceps") {
      setImagesToShow([
        { src: "/src/pages/WorkoutPlan/images/triceps1.gif", title: "Triceps Kickbacks" },
        { src: "/src/pages/WorkoutPlan/images/triceps2.gif", title: "Dips" },
        { src: "/src/pages/WorkoutPlan/images/triceps3.gif", title: "Triceps Pushdowns" },
        { src: "/src/pages/WorkoutPlan/images/triceps4.gif", title: "Rope Pushovers" },
      ]);
    } if (inputText.toLowerCase()=== "shoulders") {
      setImagesToShow([
        { src: "/src/pages/WorkoutPlan/images/shoulder1.gif", title: "Dumbbel Cuban Press" },
        { src: "/src/pages/WorkoutPlan/images/shoulder2.gif", title: "Front Delts Raises" },
        { src: "/src/pages/WorkoutPlan/images/shoulder3.gif", title: "Dumbbell Seated Front Raise" },
      ]);
    } if (inputText.toLowerCase()=== "back") {
      setImagesToShow([
        { src: "/src/pages/WorkoutPlan/images/back1.webp", title: "Deadlift" },
        { src: "/src/pages/WorkoutPlan/images/back2.webp", title: "Dumbbell Row" },
        { src: "/src/pages/WorkoutPlan/images/back3.webp", title: "T-Bar Row" },
      ]);
    } if (inputText.toLowerCase()=== "biceps") {
      setImagesToShow([
        { src: "/src/pages/WorkoutPlan/images/biceps1.gif", title: "Curls" },
        { src: "/src/pages/WorkoutPlan/images/biceps2.gif", title: "Rope Hammer Curls" },
        { src: "/src/pages/WorkoutPlan/images/biceps3.gif", title: "Straight Bar Curls" },
        { src: "/src/pages/WorkoutPlan/images/biceps4.gif", title: "Alternating Hammer Curls" },
        { src: "/src/pages/WorkoutPlan/images/biceps5.gif", title: "Machine Curls" },
      ]);
    } if (inputText.toLowerCase()=== "abs") {
      setImagesToShow([
        { src: "/src/pages/WorkoutPlan/images/abs1.webp", title: "Abs" },
        { src: "/src/pages/WorkoutPlan/images/abs2.gif", title: "Situps" },
        { src: "/src/pages/WorkoutPlan/images/abs3.gif", title: "Decline Situps" },
        { src: "/src/pages/WorkoutPlan/images/abs4.webp", title: "Decline Situps with Weight" },
      ]);
    } if (inputText.toLowerCase()=== "legs") {
      setImagesToShow([
        { src: "/src/pages/WorkoutPlan/images/legs6.gif", title: "Front Squats" },
        { src: "/src/pages/WorkoutPlan/images/legs1.gif", title: "Squats" },
        { src: "/src/pages/WorkoutPlan/images/legs2.gif", title: "Lunges" },
        { src: "/src/pages/WorkoutPlan/images/legs3.jfif", title: "Seated Calf Raises" },
        { src: "/src/pages/WorkoutPlan/images/legs4.webp", title: "Standing Calf Raises" },
        { src: "/src/pages/WorkoutPlan/images/legs5.gif", title: "Standing Calf Raises with Dumbbells" },
      ]);
    }
  };

  return (
    <Flex direction="column" alignItems="center" padding="2rem">
      <Heading level={1}>Find the Best Exercise for You!</Heading>

      {/* Beviteli mező */}
      <TextField
        placeholder="Enter your workout goal..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        width="100%"
        maxWidth="500px"
        marginTop="1rem"
      />

      {/* Search gomb */}
      <Button
        onClick={handleSearch}
        variation="primary"
        style={{
          marginTop: "1rem",
          backgroundColor: "#6A0DAD",
          color: "white",
        }}
      >
        Search
      </Button>

      {/* Képek egymás mellett */}
      {imagesToShow.length > 0 && (
        <Flex 
          direction="row" 
          justifyContent="center" 
          alignItems="center" 
          wrap="wrap"
          marginTop="2rem" 
          gap="2rem"
        >
          {imagesToShow.map((image, index) => (
            <Flex key={index} direction="column" alignItems="center">
              <Image
                src={image.src}
                alt={image.title}
                width="300px"
                borderRadius="10px"
              />
              <Text fontSize="1.5rem" fontWeight="bold" marginTop="1rem">
                {image.title}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}

      {/* Vissza a főoldalra gomb */}
      <Button
        onClick={() => navigate("/")}
        variation="primary"
        style={{
          marginTop: "2rem",
          backgroundColor: "#4635B1",
          color: "white",
        }}
      >
        Back to Main Page
      </Button>
    </Flex>
  );
}
