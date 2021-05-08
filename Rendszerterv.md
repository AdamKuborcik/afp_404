# Rendszerterv

## A rendszer célja
A rendszer célja a jelenlegi rendszerezési folyamatok megkönnyítése, digitalizálása.
## Projektterv
**Résztvevők és főbb szerepköreik:**

- Komjati Evelin : fejlesztő
- Donkó Róbert Márk : fejlesző 

## Üzleti folyamatok modellje

A könyveket ezek után egy adatbázisban szeretnénk tárolni.
Az alkalmazásban bejelentkzés után egyszerűen és átláthatóan lehet új könyveket felvinni az adatbázisba,
illetve eltávolítani belőle.
A keresés menüpont segítségével pedig különböző szempontok alapján lehet keresni címre, szerzőre és műfajra is.


## Követelmények
**Funkcionális követelmények:**

- a hozzáadás menüpontra kattintva egy beviteli felület jelenik meg, amely segítségével új könyvet vihetünk be a rendszerbe
- a módosítás menüpontban a kiválasztott könyv adatait tudjuk módosítani
- a törlés menüpontot választva egy kiválasztott könyvet el tudunk távolítani az adatbázisból
- a keresés menüpont alatt különböző szempontok szerint (cím, szerző, műfaj) tudjuk szűrni és kilistázni a könyveket


**Nem funkcionális követelmények:**
- Letisztult, felhasználóbarát felület
- Betöltés és mentés gyors működése
- Optimalizáltság

**Törvényi előírások, szabványok:**
- GDPR-nak való megfelelés
- Általános információk
- Szellemi tulajdon
- Használat
- Felelősségi szabályok
- Technikai követelmények
- Garancia és kártérítés
- 2013. évi V. törvény
- Európai Parlament és Tanács 2016. április 27-i (EU) 2016/679 Rendelete
- 2011. évi CXII. törvény
- a szerzői jogról szóló 1999. évi LXXVI. törvény
- 2001. évi CVIII. törvény

## Architekturális terv
A rendszerhez szükség van egy adatbázis szerverre, ebben az esetben MongoDb-t használunk. A program JavaSript használatával készül el. 
A könyvekadatait az adatbázisban tároljuk.

## Implementációs terv
### Windows Desktop Application  
Az alkalmazás felhasználói webes alkalmazásnak tervezzük. A terv a JavaScript nyelv használatát írja elő.
### Adatbázis  
A tervezett szolgáltatás jellegét tekintve egy központi adatbázis használata elengedhetetlen. 
A könyvekk, és azok adatainak rögzítése, tárolása és rendszerezése céljából a modern adatbáziskezelés konvenciói a legcélravezetőbbek. 
Arra, hogy ezeket implementálhassuk, a MongoDb rendszerét választottuk, az ismeretségeink tudatában, és a megbízhatóság fényében.  

## Funkcionális terv
**Rendszerszereplők:**
Felhasználók

**Rendszerhasználati esetek és lefutásaik:**
A felhasználó jogosult könyveket hozzáadni törölni és módosítani, illetve a már felvitt könyveket listázni.


![> Written with \[StackEdit\](https://stackedit.io/).](https://www.planttext.com/api/plantuml/img/JP4nRiCm34LtdOBmb0ovG8OYIxVUeM1DsYOYImP5moY2thro6BNUzD-dnF-XMp5KM-SO8Wy6ba5bd0n8b7kJdC9rBQpN41RixpWoB9e7YVm89-LHYh6UG_UHHqcmYKsGS6R0HB1WALjMwW0BdE8-KIVVIUgQwUyTTxdIpnSvXv__RLyvtyiZT8LH-ycbNt5INqGYIBmTlOggGHpP-CYTL6lE9CEtMo1fo3hZtjR7reNGFCTU_d9vQrMRVhPfuXY-CK_NLCtJZXwXATyKRfoe_i4l)

**Menü-hierarchiák:**
MAIN MENÜ
- Nyitólap
- Hozzáadás
- Törlés
- Módosítás
- Listázás

## Fizikai környezet
- Az alkalmazás PC-re készül
- A következő operációs rendszereken lesz elérhető: **Windows, Linux, Macintosh**
- Nincsenek megvásárolt komponenseink
- Nincsenek alkalmazáson belüli mikrotranzakciók

**Fejlesztői eszközök:**
- WebStorm

## Absztrakt domain modell
A rendszert a felhasználó egy webes alkalmazáson keresztül érheti majd el, aminek az elkészítését JavaScript nyelven tervezzük. 
A felület lehetővé teszi majd a felhasználó számára a név megadásával a bejelentkezést. 
A felhasználó a menüpontok segítségével kezelheti a könyveinek adatbázisát.

## Teszt terv
A tesztelések célja a rendszer és komponensei funkcionalitásának teljes vizsgálata, ellenőrzése, a rendszer által megvalósított üzleti szolgáltatások verifikálása.

**Tesztelési eljárások**
- Unit teszt: A teszt elsődleges célja: az eddig meglévő funkcióknak a különböző böngészőkkel való kompatibilitásának tesztelése. A tesztet a fejlesztők végzik. 
Az eljárás sikeres, ha különböző operációs rendszereken megfelelően működnek a különböző funkciók. A teszt időtartama egy hét.

- Beta teszt: Ezt a tesztet nem a fejlesztők végzik.
Tesztelendő operációs rendszerek: Windows , Linux , MacOs
Tesztelendő kijelző méretek: 1280x720 (minimum), 1366x768, 1920x1080
A teszt időtartama egy hét. 
A tesztelés alatt a tesztelő felhasználók visszajelzéseket küldhetnek a fejlesztőknek, probléma/hiba felmerülése esetén. 
Ha hiba lép fel, a fejlesztők kijavítják a lehető leghamarabb. Sok hiba esetén a tesztelés ideje elhúzódhat plusz egy héttel.

- Tesztelendő funkciók, Backend Service: Képesnek kell lennie menteni  és  betölteni  a könyvek adatait.
Képesnek kell lennie minden felületen elérhető funkciók biztosítására.

## Telepítési terv
A felhasználó a web oldalunkat felkeresve használhatja az alkalmazást. 
 

## Karbantartási terv
Az alkalmazás folyamatos üzemeltetése és karbantartása, mely magában foglalja a programhibák elhárítását, a belső igények változása miatti módosításokat, valamint a környezeti feltételek változása miatt megfogalmazott program-, illetve állomány módosítási igényeket. Ellenőrizni kell, hogy a jövőben kiadott Microsoft Windows verziókkal kompatibilis-e az alkalmazás. A jövőben szükség lehet új hardware implementációra igénynövekedés esetén. Karbantartás Corrective Maintenance: A felhasználók által felfedezett és "user reportban" elküldött hibák kijavítása. Adaptive Maintenance: A program naprakészen tartása és finomhangolása. Perfective Maintenance: A szoftver hosszútávú használata érdekében végzett módosítások, új funkciók, a szoftver teljesítményének és működési megbízhatóságának javítása. Preventive Maintenance: Olyan problémák elhárítása, amelyek még nem tűnnek fontosnak, de később komoly problémákat okozhatnak.
