import React from "react";
import { Flex, Heading, Text, Button, Table, TableRow, TableCell } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

export default function WorkoutPlan() {
  const navigate = useNavigate();

  return (
    <Flex direction="column" alignItems="center" padding="2rem">
      <Heading level={1}>Get Shredded</Heading>
      <Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
        <Heading level={2}>#1 Start Right</Heading>
        <Text>
          Getting the start right with your diet is essential especially when you’re shooting for more extreme fat loss because you need to:
        </Text>
        <ul style={{ color: "#000", lineHeight: "1.6", marginLeft: "20px" }}>
          <li>Leave enough space to cut calories back as you get leaner</li>
          <li>Avoid your metabolism slowing down too soon (which happens when you under eat)</li>
          <li>Have enough fuel to keep your high volume workouts super intense so you keep your muscle and burn fat effectively</li>
        </ul>
        <Text>
          When people start fat loss diets I create they will always say they feel really full - that is by design because it means your metabolism has to speed up, which is the perfect way to start your dieting phase.
        </Text>
        <Text>
          For this specific program you actually have a 2 week “primer phase” which gives you more calories to raise your calorie ceiling and make sure you’re truly ready to get the most from this extreme fat loss program.
        </Text>
        <Text>
          Remember, we have 16 weeks this time to crush it, every phase is just as important as the other - first up, we have to get that start right.
        </Text>

        <Heading level={2}>#2 Consistency Really Matters</Heading>
        <Text>
          On a diet you can’t afford to miss meals, especially at the start.
        </Text>
        <Text>
          Each phase of this 16 week diet has been carefully put together to take your body through an extreme fat loss phase. If you don’t nail every meal that means you’re leaving gaps in the plan which will slow down your results!
        </Text>
        <Text>
          Missing meals will lead to lower intensity in the gym, which puts your muscle mass at risk and it also reduces your fat loss potential. Missing meals will also make your metabolism slow down prematurely (it will gradually slow down in a calorie deficit anyway, so you can’t miss meals to exacerbate this!).
        </Text>

        <Heading level={2}>#3 Guess Nothing!</Heading>
        <Text>
          To get extreme fat loss results inside 16 weeks you are going to have to get used to tracking every meal, which means weighing everything. You can’t expect to get crazy results by guessing your protein, carbs and fats. If you do this, you will get things wrong and that will have a huge impact on your progress.
        </Text>
        <Text>
          Here is a simple example of how guessing just one meal a day could be the difference between progressing and not at the end of the week.
        </Text>
        <Text>
          If you’re supposed to have 40g of carbohydrates in your evening meal (this is just an example) and you guess and end up having 60g of carbs, that’s an extra 140g over the week. That is an extra 560 calories per week just by guessing ONE meal.
        </Text>
        <Text>
          Now imagine you guess 2 meals or 3 meals per day. Stats tell us that people underestimate how many calories they eat by around 50% on average, so do not rely on guesswork over the next 16 weeks, it will hold your results back.
        </Text>

        <Heading level={2}>#4 Your Carbohydrate Needs</Heading>
        <Text>
          Going very low carbs is a big mistake for fat loss in my opinion because…
        </Text>
        <ul style={{ color: "#000", lineHeight: "1.6", marginLeft: "20px" }}>
          <li>Metabolic output is protected with carbohydrate intake because of their influence on the thyroid (which governs your metabolism).</li>
          <li>Carbohydrates protect your muscles from catabolism, they are “protein sparing.”</li>
          <li>Carbohydrates keep the muscles full by attracting water into the muscle cell - you carry more size like this, so your skin is tighter and your overall aesthetics are better.</li>
          <li>The high volume training you’re using on my plan kicks your ass, so you need the carbs to recover and have enough energy to train hard.</li>
        </ul>

        <Heading level={2}>#5 Only Have Essential Fats</Heading>
        <Text>
          I always prefer to keep carbs and protein high and fats quite low. Fats are twice as calorie dense (9 calories per gram, protein and carbs are only 4 per gram) so if your fats are too high that means your food volume is going to be lower to compensate for the high calorie density.
        </Text>

        <Heading level={2}>#6 Incremental Changes</Heading>
        <Text>
          Of course, when dieting you have to cut down the calories at some point to create more of a deficit. This is because your metabolism will gradually slow down and your body will get accustomed to the diet, training and cardio.
        </Text>

        <Heading level={2}>#7 Protein Never Changes</Heading>
        <Text>
          Protein never changes because it ensures muscle protein synthesis levels remain high, which helps preserve your muscle tissue. As your carbohydrates drop you start to lose that protein sparing effect, therefore it becomes even more important to keep your amino acid supply (from protein) high.
        </Text>

        <Heading level={2}>#8 The 3-4 Day Rule</Heading>
        <Text>
          Over the next 16 weeks you will be having a higher carb day every 3-4 days. With the cardio, intense workouts and dieting protocol I am giving you it is essential because “high days” keep your metabolism churning.
        </Text>

        <Heading level={2}>#9 You Don’t Deserve Cheat Meals</Heading>
        <Text>
          I always see people make comments like “I reward myself with a cheat meal every week” or “I like to pig out once a week.” This is a bad mindset. You don’t deserve a cheat meal because you’re working hard, that is what you’re supposed to do!
        </Text>

        <Heading level={2}>#10 Low Days</Heading>
        <Text>
          On this program there are “low carb” days, particularly as the program progresses. These are there to create short drops in your calorie deficit just to create a bigger opportunity for fat loss.
        </Text>

        <Heading level={2}>#11 Veggies Will Help!</Heading>
        <Text>
          Veggie content is super important for health because they are so abundant in micronutrients - they are also super low in calories. I would actually not even count the calories from veggies into your daily totals.
        </Text>

        <Heading level={2}>#12 You Have To Stay Hydrated…</Heading>
        <Text>
          When you’re dehydrated your hunger goes up, your energy goes down and you feel bad. Your body works better with more water, you are stronger, you have more energy and you perform better.
        </Text>

        <Heading level={2}>#13 Reset Your Totals</Heading>
        <Text>
          Over the 16 week diet I need you to reset your totals every Sunday for the week ahead. Your body weight is changing as you diet down which means the totals you start with might change as the program goes on.
        </Text>

        <Heading level={2}>#14 Double Cardio</Heading>
        <Text>
          Double cardio is great for spiking the metabolism twice per day, and it also helps create a bigger energy deficit as you can imagine. It is very important the timing of each session is correct!
        </Text>

        <Heading level={2}>#15 Training Intensification Methods</Heading>
        <Text>
          On this program, you will notice that I have added extra intensification methods into the workouts as the program goes on, especially in the final 4 weeks. These protocols are there to help push your body harder and get more extreme results which is exactly what this program is designed to do!
        </Text>

        <Heading level={2}>#16 Review & Track Your Gym Performance</Heading>
        <Text>
          For extreme results you need to be really focused on every aspect of the program, including what your performance is like in the gym. You need measurable progress so that your body has a reason to progress and change for the better.
        </Text>

        <Heading level={2}>#17 Maximizing Your Deload Weeks</Heading>
        <Text>
          Deload weeks are still intense, you just do fewer sets but you’re still aiming to go as heavy as you can within the rep range I set you, while keeping to the rep tempo and rest periods.
        </Text>

        <Heading level={2}>#18 Get Your Sleep Right!</Heading>
        <Text>
          One of the biggest things so many people struggle with is sleeping properly. This will make it much harder to lose fat because your cortisol levels will be too high, your energy will be low which impacts intensity, and your hunger will also probably be up.
        </Text>

        <Heading level={2}>#19 Manage Stress Properly</Heading>
        <Text>
          Dieting for 16 weeks with intense training is stressful enough, so you can’t afford to tolerate a ton of stress in other areas of your life at the same time - you need to get good at managing it properly.
        </Text>
      

      <Heading level={2}>Workout Plan</Heading>



        {/* Monday - Chest & Triceps */}
        <Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
        <Heading level={2}>Monday - Chest & Triceps</Heading>
        <Table variation="bordered" width="100%"  style={{
            backgroundColor: "#ffffff",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
            marginTop: "1rem",
          }}>
          <TableRow style={{ backgroundColor: "#f2f2f2", color: "#333" }}>
            <TableCell as="th">Exercise</TableCell>
            <TableCell as="th">Sets x Reps</TableCell>
            <TableCell as="th">Rest</TableCell>
            <TableCell as="th">Notes</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Incline Machine Press "feel" sets</TableCell>
            <TableCell>4 x 10-12 reps</TableCell>
            <TableCell>30 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Flat Dumbbell Press</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Incline Dumbbell Press</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Low Pulley Cable Cross-Overs</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dips</TableCell>
            <TableCell>3 x 10-12 reps</TableCell>
            <TableCell>30 seconds</TableCell>
            <TableCell>2 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rope Pushdowns "feel sets"</TableCell>
            <TableCell>4 x 10-12 reps</TableCell>
            <TableCell>30 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Close Grip Bench Press</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Single Arm Cable Kickbacks</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
        </Table>
        
      </Flex>

      {/* Tuesday - Back & Biceps */}
      <Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
        <Heading level={2}>Tuesday - Back & Biceps</Heading>
        <Table variation="bordered" width="100%"  style={{
            backgroundColor: "#ffffff",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
            marginTop: "1rem",
          }}>
          <TableRow style={{ backgroundColor: "#f2f2f2", color: "#333" }}>
            <TableCell as="th">Exercise</TableCell>
            <TableCell as="th">Sets x Reps</TableCell>
            <TableCell as="th">Rest</TableCell>
            <TableCell as="th">Notes</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wide Grip Pulldowns “feel sets”</TableCell>
            <TableCell>4 x 10-12 reps</TableCell>
            <TableCell>30 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rack Pulls</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Reverse Grip Pulldowns</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Narrow Seated Cable Rows</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rope Straight Arm Pulldowns</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>30 seconds</TableCell>
            <TableCell>2 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>EZ Bar Curls (close grip) “feel sets”</TableCell>
            <TableCell>4 x 10-12 reps</TableCell>
            <TableCell>30 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Seated Bilateral Dumbbell Curls</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rope Hammer Curls</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
        </Table>
        
      </Flex>
  
          
          <Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
          <Heading level={2}>Wednesday - Day Off</Heading>
            <Table Table variation="bordered" width="100%"  style={{
            backgroundColor: "#ffffff",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
            marginTop: "1rem",
          }}>
            <TableRow style={{ backgroundColor: "#f2f2f2", color: "#333" }}>
            </TableRow>
            </Table>
          </Flex>

           {/* Thursday - Calves & Shoulders */}
      <Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
        <Heading level={2}>Thursday - Calves & Shoulders</Heading>
        <Table variation="bordered" width="100%"  style={{
            backgroundColor: "#ffffff",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
            marginTop: "1rem",
          }}>
          <TableRow style={{ backgroundColor: "#f2f2f2", color: "#333" }}>
            <TableCell as="th">Exercise</TableCell>
            <TableCell as="th">Sets x Reps</TableCell>
            <TableCell as="th">Rest</TableCell>
            <TableCell as="th">Notes</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Standing 1.5 Rep Calf Raises</TableCell>
            <TableCell>6 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Single Standing Calf Raises</TableCell>
            <TableCell>6 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Seated Side Dumbbell Raises “feel sets”</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>30 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dumbbell Press</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>60 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Arnold Press</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Upright Cable Rows</TableCell>
            <TableCell>4 x 10-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>2 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Single Arm Side Cable Raises (arm behind back)</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Standing Cable Face Pulls</TableCell>
            <TableCell>4 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
        </Table>
      </Flex>

                 {/* Friday - Legs */}
                 <Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
        <Heading level={2}>Friday - Legs</Heading>
        <Table variation="bordered" width="100%"  style={{
            backgroundColor: "#ffffff",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
            marginTop: "1rem",
          }}>
          <TableRow style={{ backgroundColor: "#f2f2f2", color: "#333" }}>
            <TableCell as="th">Exercise</TableCell>
            <TableCell as="th">Sets x Reps</TableCell>
            <TableCell as="th">Rest</TableCell>
            <TableCell as="th">Notes</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Leg Extension “feel sets”</TableCell>
            <TableCell>4 x 10-12 reps</TableCell>
            <TableCell>30 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Leg Press</TableCell>
            <TableCell>5 x 8-12 reps</TableCell>
            <TableCell>60 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bulgarian Split Squats</TableCell>
            <TableCell>5 x 8-12 reps</TableCell>
            <TableCell>30 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Squats</TableCell>
            <TableCell>5 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lying Leg Curl “feel sets”</TableCell>
            <TableCell>5 x 10-12 reps</TableCell>
            <TableCell>30 seconds</TableCell>
            <TableCell>2 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Seated Leg Curls</TableCell>
            <TableCell>5 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>2 second negatives</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Walking Lunges</TableCell>
            <TableCell>5 x 8-12 reps</TableCell>
            <TableCell>45 seconds</TableCell>
            <TableCell>3 second negatives</TableCell>
          </TableRow>
        </Table>
      </Flex>

      <Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
          <Heading level={2}>Saturday - Day Off</Heading>
            <Table Table variation="bordered" width="100%"  style={{
            backgroundColor: "#ffffff",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
            marginTop: "1rem",
          }}>
            <TableRow style={{ backgroundColor: "#f2f2f2", color: "#333" }}>
            </TableRow>
            </Table>
          </Flex>

          <Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
          <Heading level={2}>Sunday - Day Off</Heading>
            <Table Table variation="bordered" width="100%"  style={{
            backgroundColor: "#ffffff",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
            marginTop: "1rem",
          }}>
            <TableRow style={{ backgroundColor: "#f2f2f2", color: "#333" }}>
            </TableRow>
            </Table>
          </Flex>

</Flex>

      {/* Back to Main Page button */}
      <Button
        onClick={() => navigate("/")}
        variation="primary"
        style={{ marginTop: "2rem", backgroundColor: "#4635B1", color: "white" }}
      >
        Back to Main Page
      </Button>
    </Flex>
  );
}
