import React from "react";
import { Flex, Heading, Text, Button } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";


export default function Recipes() {
  const navigate = useNavigate();

  return (
    <Flex direction="column" alignItems="center" padding="2rem">
      <Heading level={1}>Receptek</Heading>

      {/* Kalóriaszámítás alapok */}
      <Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
        <Heading level={2}>Kalóriaszámítás alapok</Heading>
        <Text>
          Először is szükséged van egy kiinduló pontra - ehhez tökéletes az oldalunkon
          is megtalálható TDEE Kalkulátor. Az itt megadott adataid alapján kapsz egy
          értéket amit először követned kell. A pontos kalóriaszükséglet
          megállapításához ez azonban kevés! Amit viszont tenned kell, minden reggel
          wc-zés után (hogy minél pontosabb értékeket kapj) ráállni a mérlegre és
          feljegyezni magadnak a súlyodat akár a telefonba akár egy kis noteszbe és
          ezt 2 hétig folytatni úgy, hogy közben végig az adott napi kalóriabevitelhez
          tartod magad. Két hét elteltével már látszani fog, hogy pontosan milyen
          hatással is van a testedre az a kalóriamennyiség amit eszel. Fontos, hogy
          kellő ideig csináld, hiszen napi szinten simán lehet akár 0.5 - 1 kg eltérés is a
          súlyodban, ez teljesen normális - ettől ne rémülj meg, tartsd magad az
          étrendhez.
        </Text>
        <Text>
  Miután letelt a 2 hét, nagyjából látni fogod, hogy a kalkulátorból kapott
  kalóriamennyiség milyen hatással van a súlyodra.
</Text>
<ul style={{ color: "#000", lineHeight: "1.6", marginLeft: "20px" }}>
  <li>
    <strong>Tegyük fel, hogy maradt annyi amennyivel kezdtél:</strong> Gratulálok, elsőre
    sikerült belőni a szintentartáshoz szükséges kalóriáidat, ezt a célodtól
    függően változtathatod. (fogyáshoz csökkentsd, hízáshoz növeld)
  </li>
  <li>
    <strong>Ha csökkent a súlyod:</strong> akkor több kalóriát égetsz el, mint amennyit
    beviszel. Tehát a szintentartáshoz szükséges kalóriamennyiséged
    magasabb a kalkulátorból kapott értéknél.
  </li>
  <li>
    <strong>Ha nőtt a súlyod:</strong> akkor kalória többletben voltál, tehát kevesebb
    kalóriát égetsz el a napjaid során, mint amennyit beviszel.
  </li>
</ul>


      </Flex>

      {/* French Toast recept */}
      <Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
        <Heading level={2}>French Toast</Heading>
        <img
          src="/images/french_toast.jfif"
          alt="French Toast"
          style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
        />
        <Text>
          <strong>Adag:</strong> 1
        </Text>
        <Text>
          <strong>Hozzávalók:</strong>
          <ul>
            <li>250g tojásfehérje (kb. 7-8 M-es tojásból)</li>
            <li>50 ml cukormentes mandulatej</li>
            <li>2 pipetta vaníliás FlavDrops / Vanília aroma</li>
            <li>2 teáskanál őrölt fahéj</li>
            <li>4 szelet kenyér (kb. 150g - max 250 kcal/100g)</li>
            <li>Sütőspray</li>
            <li>Toppingok: kalóriamentes szirup / mogyoróvaj por / light joghurt / gyümölcsök</li>
          </ul>
        </Text>
        <Text>
          <strong>Elkészítés:</strong>
          <p>
            Tedd egy tálba a tojásfehérjét, mandulatejet, aromát, édesítőt és jól keverd össze.
            Süsd meg a kenyereket serpenyőben, majd ízlés szerint tálald.
          </p>
        </Text>
        <Text>
          <strong>Tápértékek:</strong>
          <ul>
            <li>1 adag: 500 Kcal</li>
            <li>Fehérje: 37.5g</li>
            <li>Szénhidrát: 79g</li>
            <li>Zsír: 3g</li>
          </ul>
        </Text>
      </Flex>

      {/* Eper ízű zabsüti recept */}
      <Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
        <Heading level={2}>Eper Ízű Zabsüti</Heading>
        <img
          src="/src/images/strawberry_cookie.jpg"
          alt="Eper Ízű Zabsüti"
          style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
        />
        <Text>
          <strong>Adag:</strong> 8 darab
        </Text>
        <Text>
          <strong>Hozzávalók:</strong>
          <ul>
            <li>75g zab</li>
            <li>20g fehérjepor - Natural strawberry myprotein soy protein isolate</li>
            <li>120g banán</li>
            <li>20g Tesco cukrozatlan mandula tej - Alpro/Happy/Tesco márka</li>
            <li>10g málna ízű étcsoki - dm Bio</li>
          </ul>
        </Text>
        <Text>
          <strong>Elkészítés:</strong>
          <p>
            A zabot, fehérjeport, banán pépet és mandulatejet keverd össze, majd formázz belőlük 8 darab golyót.
            Egy sütőpapírral bélelt tepsibe helyezd a golyókat, nyomd le a tetejüket, és szórj a zabsütik tetejére az étcsoki darabokból.
            Helyezd 180 fokos sütőbe és süsd kb 25-30 percig.
          </p>
        </Text>
        <Text>
          <strong>Tápértékek a fenti említett mennyiségek esetén:</strong>
          <ul>
            <li>1 darab esetén: 63 kcal</li>
            <li>Zsír: 1.3g</li>
            <li>Szénhidrát: 9.1g</li>
            <li>Fehérje: 3.6g</li>
          </ul>
        </Text>
      </Flex>

      {/* Sajtos Omlett Édesburgonyával recept */}
<Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
  <Heading level={2}>Sajtos Omlett Édesburgonyával</Heading>
  <img
    src="/src/images/sweet_potato_omlette.jfif"
    alt="Sajtos Omlett Édesburgonyával"
    style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
  />
  <Text>
    <strong>Adag:</strong> 1
  </Text>
  <Text>
    <strong>Hozzávalók:</strong>
    <ul>
      <li>300g édesburgonya (2 közepes)</li>
      <li>200g tojásfehérje (kb. 6 db M-es tojásból)</li>
      <li>1 egész tojás</li>
      <li>25g light trappista sajt</li>
    </ul>
  </Text>
  <Text>
    <strong>Elkészítés:</strong>
    <p>
      Keverd össze egy tálban/shaker-ben a tojásfehérjét és a tojást, ízlés szerint fűszerezd. Tedd a serpenyőbe közepes lángon, és süsd meg. Az édesburgonyát közben tedd mikróba 7 percre vagy süsd meg sütőben.
    </p>
  </Text>
  <Text>
    <strong>Tápértékek:</strong>
    <ul>
      <li>1 adag: 490 Kcal</li>
      <li>Fehérje: 40g</li>
      <li>Szénhidrát: 63g</li>
      <li>Zsír: 7.5g</li>
    </ul>
  </Text>
</Flex>

{/* Almás Protein Palacsinta recept */}
<Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
        <Heading level={2}>Almás Protein Palacsinta</Heading>
        <img
          src="/src/images/apple_protein_pancake.jfif"
          alt="Almás Protein Palacsinta"
          style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
        />
        <Text>
          <strong>Adag:</strong> 1 (akár felezheted is)
        </Text>
        <Text>
          <strong>Hozzávalók:</strong>
          <ul>
            <li>200g tojásfehérje (kb 6db M-es tojásból)</li>
            <li>30g zab</li>
            <li>200g alma</li>
            <li>60g sovány krémtúró - New lifestyle</li>
            <li>20g myprotein vitafiber</li>
            <li>5g sütőpor</li>
          </ul>
        </Text>
        <Text>
          <strong>Elkészítés:</strong>
          <p>
            Vágd az almát kisebb darabokra, hogy könnyebb legyen turmixolni. Egy turmixgépben először őröld le a zabot (zablisztet is használhatsz-így nem kell őrölni), majd add hozzá a többi hozzávalót és turmixold addig amíg minden jól össze nem keveredik és nem lesz homogén. Hogy jobban tartják fogni, tedd 3-4 órára a hűtőbe (nem kötelező, sütheted is rögtön). Tefj fel egy palacsintasütőt közepes lángra, fújd be sütőspray-vel. Helyezd bele a tésztát és süsd 1-2 percig majd fordítsd át és süsd fél-1 percig. Tálald a palacsintákat, tetszésleges feltétekkel.
          </p>
        </Text>
        <Text>
          <strong>Tápértékek a fenti említett mennyiségek esetén:</strong>
          <ul>
            <li>1 adag: 400 Kcal</li>
            <li>Fehérje: 32.5g</li>
            <li>Szénhidrát: 60g</li>
            <li>Zsír: 2.5g</li>
          </ul>
        </Text>
      </Flex>

{/* Gyümölcs Fehérjebomba Jelly Mousse */}
<Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
        <Heading level={2}>Gyümölcs Fehérjebomba Jelly Mousse</Heading>
        <img
          src="/src/images/fruit_jelly_mousse.jfif"
          alt="Gyümölcs Fehérjebomba Jelly Mousse"
          style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
        />
        <Text>
          <strong>Adag:</strong> 1
        </Text>
        <Text>
          <strong>Hozzávalók:</strong>
          <ul>
            <li>250g sovány krémtúró (Aldi - New Lifestyle 66 kcal/100g)</li>
            <li>10g fehérjepor (én vaníliás Myprotein Impact Whey-t használtam, használhatsz vegánt is)</li>
            <li>10g zselatin</li>
            <li>100g áfonya/eper/málna + édesítőszer, FlavDrops</li>
          </ul>
        </Text>
        <Text>
          <strong>Elkészítés:</strong>
          <p>
            Tedd a krémtúrót egy tálba és adj hozzá annyi vizet, hogy összekeverve krémes állagú legyen majd add hozzá a fehérjeport és édesítőt ízlés szerint.
            Ha szeretnéd, belé turmixolhatsz a krémbe egy kicsit a gyümölcsből, hogy egy jó színt adjon neki.
            Keverd össze a zselatint egy kis forró vízzel és amikor teljesen feloldódott, fokozatosan kevergetve add hozzá a túrókrémhez majd szórd bele a gyümölcsöket és alaposan keverd össze.
            Helyezd a hűtőbe 3-4 órára, amíg megszilárdul.
          </p>
        </Text>
        <Text>
          <strong>Tápértékek a fenti említett mennyiségek esetén:</strong>
          <ul>
            <li>315 Kcal</li>
            <li>Fehérje: 48g</li>
            <li>Szénhidrát: 25g</li>
            <li>Zsír: 1.5g</li>
          </ul>
        </Text>
      </Flex>

{/* Thai Tészta */}
<Flex direction="column" alignItems="center" padding="2rem" width="100%" maxWidth="800px">
  <Heading level={2}>Thai Tészta</Heading>
  <img
    src="/src/images/thai_noodles.jfif"
    alt="Thai Tészta"
    style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
  />
  <Text>
    <strong>Adag:</strong> 2
  </Text>
  <Text>
    <strong>Hozzávalók:</strong>
    <ul>
      <li>120g rizstészta</li>
      <li>200g csirkemell</li>
      <li>300g csiperkegomba</li>
      <li>100g vöröshagyma</li>
      <li>100g bébirépa</li>
      <li>100g wok mix zöldség</li>
      <li>50ml szójaszósz - Chin-Su márkát használunk</li>
      <li>3ml olívaolaj</li>
      <li>2g szezámmag</li>
      <li>só, bors, fokhagyma por, thai fűszerek</li>
      <li>egy csepp Sriracha vagy chili szósz</li>
    </ul>
  </Text>
  <Text>
    <strong>Elkészítés:</strong>
    <p>
      A rizstésztát a csomagolás alapján tedd fel főni. Ezzel egyidőben már az olívaolajon párold a hagymát, ezt követve pedig dobd rá a csirkét, amit
      mi egyébként simán apró kockára szoktunk vágni. Addig süsd, amíg az összes felsorolt zöldség (ez általában fagyasztott) ki nem olvad, és tedd hozzá
      az összes zöldséget. Az utolsó 2-3 percre öntsd hozzá a szójaszószt és az ízesítő anyagokat (a szezámmag, és egy csepp chiliszósz szigorúan az
      utolsó lépés természetesen ehetnél) mindezekhez egy külön keverő, amiben alaposan keverjük el.
    </p>
  </Text>
  <Text>
    <strong>Tápértékek a fenti említett mennyiségek esetén:</strong>
    <ul>
      <li>1 adag esetén: 483 kcal</li>
      <li>Zsír: 4g</li>
      <li>Szénhidrát: 68.2g</li>
      <li>Fehérje: 44.4g</li>
    </ul>
  </Text>
</Flex>


      {/* Vissza a főoldalra gomb */}
      <Button onClick={() => navigate("/")} variation="primary"
        style={{ marginTop: "1rem", backgroundColor: "#4635B1", color: "white" }}>
        Back to Main Page
      </Button>
    </Flex>
  );
}
