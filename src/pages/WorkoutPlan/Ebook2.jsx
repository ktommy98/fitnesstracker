import React from "react";
import { Flex, Heading, Text, Button, Table, TableBody, TableCell, TableHead, TableRow } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

export default function Ebook2() {
  const navigate = useNavigate();

  return (
    <Flex direction="column" alignItems="center" padding="2rem">
      <Heading level={1}>Jay Cutler’s Mass-Ter Plan</Heading>
      <Text fontSize="1.2rem" textAlign="center" marginTop="1rem">
        This is the ultimate mass-building guide, designed to help you gain serious muscle with structured training and nutrition principles.
      </Text>

      <Text fontSize="1rem" textAlign="left" marginTop="1rem">
        Follow this structured 12-week program to maximize your gains. Below you’ll find an example of the workout schedule.
      </Text>

      {/* Workout Plan Table */}
      <Heading level={2} marginTop="2rem">Workout Plan</Heading>
      <Table variation="striped" marginTop="1rem">
        <TableHead>
          <TableRow>
            <TableCell as="th">Day</TableCell>
            <TableCell as="th">Workout</TableCell>
            <TableCell as="th">Key Exercises</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Monday</TableCell>
            <TableCell>Chest & Triceps</TableCell>
            <TableCell>Bench Press, Incline Dumbbell Press, Dips, Skull Crushers</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tuesday</TableCell>
            <TableCell>Back & Biceps</TableCell>
            <TableCell>Pull-Ups, Barbell Rows, Lat Pulldown, Hammer Curls</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wednesday</TableCell>
            <TableCell>Legs</TableCell>
            <TableCell>Squats, Leg Press, Romanian Deadlifts, Calf Raises</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Thursday</TableCell>
            <TableCell>Shoulders & Abs</TableCell>
            <TableCell>Overhead Press, Lateral Raises, Hanging Leg Raises</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Friday</TableCell>
            <TableCell>Arms</TableCell>
            <TableCell>Close-Grip Bench Press, Preacher Curls, Rope Pushdowns</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Saturday</TableCell>
            <TableCell>Legs & Core</TableCell>
            <TableCell>Front Squats, Deadlifts, Hanging Leg Raises, Planks</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sunday</TableCell>
            <TableCell>Rest</TableCell>
            <TableCell>Active Recovery / Stretching</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Button
        onClick={() => navigate("/workoutplan")}
        variation="primary"
        style={{
          marginTop: "2rem",
          backgroundColor: "#4635B1",
          color: "white",
        }}
      >
        Back to Workout Plan
      </Button>
    </Flex>
  );
}
