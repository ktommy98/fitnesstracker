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
        { src: "/media/chest1.gif", title: "Flat Dumbbell Press" },
        { src: "/media/chest2.webp", title: "Incline Dumbbell Press" },
        { src: "/media/chest3.gif", title: "Bench Press" },
        { src: "/media/chest4.gif", title: "Chest Fly" },
      ]);
    } if (inputText.toLowerCase()=== "triceps") {
      setImagesToShow([
        { src: "/media/triceps1.gif", title: "Triceps Kickbacks" },
        { src: "/media/triceps2.gif", title: "Dips" },
        { src: "/media/triceps3.gif", title: "Triceps Pushdowns" },
        { src: "/media/triceps4.gif", title: "Rope Pushovers" },
      ]);
    } if (inputText.toLowerCase()=== "shoulders") {
      setImagesToShow([
        { src: "/media/shoulder1.gif", title: "Dumbbel Cuban Press" },
        { src: "/media/shoulder2.gif", title: "Front Delts Raises" },
        { src: "/media/shoulder3.gif", title: "Dumbbell Seated Front Raise" },
      ]);
    } if (inputText.toLowerCase()=== "back") {
      setImagesToShow([
        { src: "/media/back1.webp", title: "Deadlift" },
        { src: "/media/back2.webp", title: "Dumbbell Row" },
        { src: "/media/back3.webp", title: "T-Bar Row" },
      ]);
    } if (inputText.toLowerCase()=== "biceps") {
      setImagesToShow([
        { src: "/media/biceps1.gif", title: "Curls" },
        { src: "/media/biceps2.gif", title: "Rope Hammer Curls" },
        { src: "/media/biceps3.gif", title: "Straight Bar Curls" },
        { src: "/media/biceps4.gif", title: "Alternating Hammer Curls" },
        { src: "/media/biceps5.gif", title: "Machine Curls" },
      ]);
    } if (inputText.toLowerCase()=== "abs") {
      setImagesToShow([
        { src: "/media/abs1.webp", title: "Abs" },
        { src: "/media/abs2.gif", title: "Situps" },
        { src: "/media/abs3.gif", title: "Decline Situps" },
        { src: "/media/abs4.webp", title: "Decline Situps with Weight" },
      ]);
    } if (inputText.toLowerCase()=== "legs") {
      setImagesToShow([
        { src: "/media/legs6.gif", title: "Front Squats" },
        { src: "/media/legs1.gif", title: "Squats" },
        { src: "/media/legs2.gif", title: "Lunges" },
        { src: "/media/legs3.jfif", title: "Seated Calf Raises" },
        { src: "/media/legs4.webp", title: "Standing Calf Raises" },
        { src: "/media/legs5.gif", title: "Standing Calf Raises with Dumbbells" },
      ]);
    }
  };

  return (
    <Flex direction="column" alignItems="center" padding="2rem">
      <Heading level={1}>Find the Best Exercise for You!</Heading>

      {/* Beviteli mező */}
      <TextField
        placeholder="Enter your workout goal...(chest,biceps...)"
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

       {/* E-book ajánlás belső navigációval */}
       <Text fontSize="1.2rem" fontWeight="bold" marginTop="2rem" textAlign="center">
        If you want to learn from the best, try one of our ebooks:
      </Text>

      <Flex direction="column" alignItems="center" marginTop="1rem" gap="0.5rem">
        <Button 
          onClick={() => navigate("/Ebook1")}
          variation="link"
          style={{ fontSize: "1.2rem", fontWeight: "bold", textDecoration: "none", color: "#6A0DAD" }}
        >
          Jay Cutler Get Shredded EXTREME Edition
        </Button>
        </Flex>
        <Flex direction="column" alignItems="center" marginTop="1rem" gap="0.5rem">
        <Button 
          onClick={() => navigate("/Ebook2")}
          variation="link"
          style={{ fontSize: "1.2rem", fontWeight: "bold", textDecoration: "none", color: "#6A0DAD" }}
        >
          Jay Cutler Mass-Ter Plan
        </Button>
        </Flex>
    </Flex>
  );
}
