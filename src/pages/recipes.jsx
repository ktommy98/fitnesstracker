import React, { useState } from "react";
import { Flex, Heading, Text, Button, Image } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

const recipes = [
  {
    title: "French Toast",
    image: "/images/french_toast.jpg",
    serving: "1",
    ingredients: [
      "250g tojásfehérje (kb. 7-8 M-es tojásból)",
      "50 ml cukormentes mandulatej",
      "2 pipetta vaníliás FlavDrops / Vanília aroma",
      "2 teáskanál őrölt fahéj",
      "4 szelet kenyér (kb. 150g - max 250 kcal/100g)",
      "Sütőspray",
      "Toppingok: kalóriamentes szirup / mogyoróvaj por / light joghurt / gyümölcsök",
    ],
    preparation:
      "Tedd egy tálba a tojásfehérjét, mandulatejet, aromát, édesítőt és jól keverd össze. Süsd meg a kenyereket serpenyőben, majd ízlés szerint tálald.",
    nutrition: {
      calories: "500 Kcal",
      protein: "37.5g",
      carbs: "79g",
      fat: "3g",
    },
  },
  {
    title: "Eper Ízű Zabsüti",
    image: "/images/strawberry_cookie.jpg",
    serving: "8 darab",
    ingredients: [
      "75g zab",
      "20g fehérjepor - Natural strawberry myprotein soy protein isolate",
      "120g banán",
      "20g cukrozatlan mandula tej",
      "10g málna ízű étcsoki",
    ],
    preparation:
      "A zabot, fehérjeport, banán pépet és mandulatejet keverd össze, majd formázz belőlük 8 darab golyót. Egy sütőpapírral bélelt tepsibe helyezd a golyókat, nyomd le a tetejüket, és szórd rá a csoki darabokat. 180 fokon süsd kb. 25-30 percig.",
    nutrition: {
      calories: "63 Kcal / darab",
      protein: "3.6g",
      carbs: "9.1g",
      fat: "1.3g",
    },
  },
  {
    title: "Sajtos Omlett Édesburgonyával",
    image: "/images/sweet_potato_omlette.jpg",
    serving: "1",
    ingredients: [
      "300g édesburgonya",
      "200g tojásfehérje",
      "1 egész tojás",
      "25g light trappista sajt",
    ],
    preparation:
      "Keverd össze a tojásfehérjét és a tojást, fűszerezd. Süsd serpenyőben. Az édesburgonyát süsd mikróban 7 percig vagy sütőben.",
    nutrition: {
      calories: "490 Kcal",
      protein: "40g",
      carbs: "63g",
      fat: "7.5g",
    },
  },
  {
    title: "Almás Protein Palacsinta",
    image: "/images/apple_protein_pancake.jpg",
    serving: "1",
    ingredients: [
      "200g tojásfehérje",
      "30g zab",
      "200g alma",
      "60g sovány krémtúró",
      "20g myprotein vitafiber",
      "5g sütőpor",
    ],
    preparation:
      "Turmixold össze az alapanyagokat. Hűtsd 3-4 órát vagy süsd azonnal. Serpenyőben süsd kb. 1-2 percig oldalanként.",
    nutrition: {
      calories: "400 Kcal",
      protein: "32.5g",
      carbs: "60g",
      fat: "2.5g",
    },
  },
  {
  title: "Jelly Mousse",
    image: "/images/high-protein-jello-mousse.jpg",
    serving: "1",
    ingredients: [
      "250g sovány krémtúró (Aldi - New Lifestyle 66 kcal/100g)",
      "10g fehérjepor (vaníliás Myprotein Impact Whey vagy vegán fehérjepor)",
      "10g zselatin",
      "100g áfonya/eper/málna",
      "Édesítőszer, FlavDrops",
    ],
    preparation:
      "Tedd a krémtúrót egy tálba és adj hozzá annyi vizet, hogy összekeverve krémes állaga legyen, majd add hozzá a fehérjeport és édesítsd ízlés szerint. Ha szeretnéd, bele turmixolhatsz a krémbe egy kicsit a gyümölcsből, hogy egy jó színt adjon neki. Keverd össze a zselatint egy kis forró vízzel és amikor teljesen feloldódott, fokozatosan kevergetve add hozzá a túrókrémet, majd szórd bele a gyümölcsöt és alaposan keverd össze. Helyezd a hűtőbe 3-4 órára, amíg megszilárdul.",
    nutrition: {
      calories: "315 Kcal",
      protein: "48g",
      carbs: "25g",
      fat: "1.5g",
    },
  },
  {
    title: "Thai Csirkés Rizstészta",
    image: "/images/thai_noodles.jpg",
    serving: "2",
    ingredients: [
      "120g rizstészta",
      "200g csirkemell",
      "300g csiperkegomba",
      "100g vöröshagyma",
      "100g bébirépa",
      "100g zöldbab",
      "100g wok mix zöldség",
      "50ml szójaszósz - Chin-Su márka",
      "3ml olívaolaj",
      "2g szezámmag",
      "Fűszerek: só, bors, fokhagymapor, thai fűszerek, Sriracha/chili szósz",
    ],
    preparation:
      "Főzd meg a rizstésztát a csomagolás szerint. Egy serpenyőben olívaolajon párold a hagymát, majd add hozzá a csirkét apró kockára vágva. Ezután add hozzá a gombát és a zöldségeket, és főzd, amíg a csirke és gomba kiengedett leve elfő. Fűszerezd ízlés szerint, majd keverd hozzá a rizstésztát és a szójaszószt, és pirítsd 1 percig. Ha szeretnéd, adj hozzá egy kevés Sriracha szószt. A végén szórd meg szezámmaggal.",
    nutrition: {
      calories: "483 Kcal (1 adag)",
      protein: "44.4g",
      carbs: "68.2g",
      fat: "4g",
    },
  },
];

export default function Recipes() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const recipesPerPage = 2;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(recipes.length / recipesPerPage));
  };

  const prevPage = () => {
    setCurrentPage((prev) =>
      prev === 0 ? Math.ceil(recipes.length / recipesPerPage) - 1 : prev - 1
    );
  };

  return (
    <Flex direction="column" alignItems="center" padding="2rem">
      <Heading level={1}>Receptek</Heading>

      <Flex direction="row" wrap="wrap" justifyContent="center" gap="2rem" width="100%">
        {recipes
          .slice(currentPage * recipesPerPage, currentPage * recipesPerPage + recipesPerPage)
          .map((recipe, index) => (
            <Flex
              key={index}
              direction="column"
              alignItems="center"
              padding="1rem"
              border="1px solid #ccc"
              borderRadius="10px"
              width="45%"
            >
              <Heading level={2}>{recipe.title}</Heading>
              <Image
                src={recipe.image}
                alt={recipe.title}
                style={{ maxWidth: "400px", maxHeight: "400px", borderRadius: "10px" }}
              />
              <Text>
                <strong>Adag:</strong> {recipe.serving}
              </Text>
              <Text>
                <strong>Hozzávalók:</strong>
                <ul>
                  {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              </Text>
              <Text>
                <strong>Elkészítés:</strong> {recipe.preparation}
              </Text>
              <Text>
                <strong>Tápértékek:</strong>
                <ul>
                  <li>Kalória: {recipe.nutrition.calories}</li>
                  <li>Fehérje: {recipe.nutrition.protein}</li>
                  <li>Szénhidrát: {recipe.nutrition.carbs}</li>
                  <li>Zsír: {recipe.nutrition.fat}</li>
                </ul>
              </Text>
            </Flex>
          ))}
      </Flex>

      <Flex direction="row" gap="1rem" marginTop="2rem">
  <Button
    onClick={prevPage}
    variation="primary"
    style={{
      backgroundColor: "#FF5733", // Narancsos-piros
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    }}
  >
    Last
  </Button>
  <Button
    onClick={nextPage}
    variation="primary"
    style={{
      backgroundColor: "#3498DB", // Kék
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    }}
  >
    Next
  </Button>
</Flex>

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
