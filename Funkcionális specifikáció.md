# Funkcionális specifikáció

## Áttekintés
Az alkalmazásunk egy projektmunka keretein belül készült. Egy "könyvespolc" webes felületét hivatott reprezentálni. Rendelkezik egy regisztrációs/bejelentkezési felülettel. Bejelentkezés után lehetőségünk van böngészni a könyveink között, hozzáadni, valamint megjelölni hol tartunk egy adott könyvben. Adatbázisban tároljuk a felhasználókat, könyveket és az ezzel kapcsolatos adatokat is. Profilunkat publikusra is állíthatjuk, ezáltal más felhasználók is láthatják. Ez lehetővé teszi a felhasználóknak a versengést.

## Jelenlegi helyzet
A szükség, ami ösztönzött minket hogy implementáljuk ezt a reszponzív felületes webes alkalmazást a felhasználók változó és újuló igényei. Mivel ezen a területen relatív üres a piac, így ez egy remek lehetőség. Nem beszélve arról, hogy a versengés aspektus miatt az embereket tudjuk ösztönözni az olvasásra.

## Követelménylista
|    Modul    | ID |       Név          |                                                        Kifejtés                                                |
|-------------|----|--------------------|----------------------------------------------------------------------------------------------------------------|
| Jogosultság | I1 | Belépési felület   | A felhaszáló ha rendelkezik már fiókkal akkor bejelentkezhet, ellenkező esetben regisztrációra van lehetősége. |
|   Felület   | I2 | Könyv hozzáadás    | Főmenü pont, a felhasználó itt tud könyveket hozzáadni.                                                        |
|   Felület   | I3 | Könyv módosítás    | Főmenü pont, a felhasználó itt tud könyveket módosítani.                                                       |
|   Felület   | I4 | Profil módosítás   | Főmenü pont, a felhasználó itt tudja az adatait módosítani, illetve a profilt publikusra állítani.             |
|   Felület   | I5 | Profil megtekintés | Főmenü pont, a felhasználó itt tudja a saját, illetve más felhasználó profilját megtekinteni.                  |
|   Felület   | I6 | Kilépés            | Főmenü pont, a felhasználó itt tud kijelentkezni                                                               |
| Statisztika | I7 | Adatbázis          | Itt tároljuk a felhasználók adatait, előrehaladásukat.                                                         |

## Jelenlegi üzleti folyamatok modellje
Az technológia előrehaladtával az olvasás egyre kisebb figyelmet kap a világban. Ezen a téren hatalmas űr van a piacon. Fő célunk az olvasást és a technológiát összekapcsolva népszerűsítsük az olvasást.

## Igényelt üzleti folyamatok modellje
Az emberek igénye a versengés iránt mindig is magas volt. Fő célunk,hogy ezt a hajlamot kihasználva népszerűsítsük az olvasást. Az szeretik összemérni eredményeiket és ezzel akár tudjuk őket ösztönözni az olvasásra. Egy felhasználóbarát webes alkalmazás elkészítése a cél. Kevés manapság az olyan alkalmazás, ami összeköti az olvasást és a rendelkezésre álló eszközöket.

## Használati esetek
A felhasználó jogosult regisztrálni, bejelentkezni, könyveket hozzáadni és módosítani. Profilt módosítani és megtekinteni valamint profilt törölni.

## A rendszer funkciói
- Mentés: Elmenti a felhasználó adatait az adatbázisba. 
- Betöltés: Betölti a felhasználó adatait, előrehaladását az adatbázisból.

## Fogalomtár 
- Reszponzív felület: Mindig igazodik a felület a képerányhoz.
