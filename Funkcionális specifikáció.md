# Funkcionális specifikáció

## Áttekintés

Az alkalmazásunk egy projektmunka keretein belül készült. Egy "könyvespolc" webes felületét hivatott reprezentálni. Lehetőségünk van böngészni a könyveink között, hozzáadni, módosítani valamint törölni.

## Jelenlegi helyzet
A szükség, ami ösztönzött minket hogy implementáljuk ezt a reszponzív felületes webes alkalmazást a felhasználók változó és újuló igényei. 
Könyvekkel szeretnénk foglalkozni. Jelenleg ezek nyilvántartsa, rendszerezése táblázatos formában történik.
A könyvekről tároljuk:
- A szerzőjét
- A címét
- A műfaját
- Rövid leírást

## Követelménylista
|    Modul    | ID |       Név          |                                                        Kifejtés                                                |
|-------------|----|--------------------|----------------------------------------------------------------------------------------------------------------|
| Jogosultság | I1 | Belépési felület   | A felhaszáló ha rendelkezik már fiókkal akkor bejelentkezhet, ellenkező esetben regisztrációra van lehetősége. |
|   Felület   | I2 | Könyv hozzáadás    | Főmenü pont, a felhasználó itt tud könyveket hozzáadni.                                                        |
|   Felület   | I3 | Könyv módosítás    | Főmenü pont, a felhasználó itt tud könyveket módosítani.                                                       |
|   Felület   | I5 | Törlés             | Főmenü pont, a kiválasztott könyv törlése az adatbázisból                                                      |
|   Felület   | I7 | Keresés            | Fő menüpont, különböző szempontok (cím, szerző, műfaj) alapján lehet szűrni a könyveket                        |
|   Felület   | I8 | Profil módosítás   | Főmenü pont, a felhasználó itt tudja az adatait módosítani, illetve a profilt publikusra állítani.             |
|   Felület   | I9 | Profil megtekintés | Főmenü pont, a felhasználó itt tudja a saját profilját megtekinteni.                  |
|   Felület   | I10 | Kilépés            | Főmenü pont, a felhasználó itt tud kijelentkezni                                                              |
| Statisztika | I11 | Adatbázis          | Itt tároljuk a felhasználók adatait, előrehaladásukat.                                                        |

## Jelenlegi üzleti folyamatok modellje
A jelenlegi megoldás szerint a könyvek egy táblázatban vannak rendszerezve. Ebbe viszont körülményesebb a felvitel és nehéz
a keresés is.

## Igényelt üzleti folyamatok modellje
A könyveket ezek után egy adatbázisban szeretnénk tárolni.
Az alkalmazásban bejelentkzés után egyszerűen és átláthatóan lehet új könyveket felvinni az adatbázisba,
illetve eltávolítani belőle.
A keresés menüpont segítségével pedig különböző szempontok alapján lehet keresni címre, szerzőre és műfajra is.

Folyamatok:
- a belépő felület egy felhasználónevet és egy jelszót kér, azonosítás után a nyitó oldalra kerülünk, amely egy rövid
üdvözlő szöveget és leírást tartalmaz
- a menü a bejelentkezés után lesz elérhető
- a hozzáadás menüpontra kattintva egy beviteli felület jelenik meg, amely segítségével új könyvet vihetünk be a rendszerbe
- a módosítás menüpontban a kiválasztott könyv adatait tudjuk módosítani
- a törlés menüpontot választva egy kiválasztott könyvet el tudunk távolítani az adatbázisból
- a keresés menüpont alatt különböző szempontok szerint (cím, szerző, műfaj) tudjuk szűrni és kilistázni a könyveket
- a profil módosítása menüpont alatt lehetőségünk van megváltoztatni jelszavunkat és egyéb adatainkat
- a kijelentkezés gombra kattintva visszatérünk a bejelentkező felülethez és befejezzük a munkamenetet

## Használati esetek
A felhasználó jogosult regisztrálni, bejelentkezni, könyveket hozzáadni és módosítani. Profilt módosítani és megtekinteni valamint profilt törölni.



![> Written with \[StackEdit\](https://stackedit.io/).](https://www.planttext.com/api/plantuml/img/JP4nRiCm34LtdOBmb0ovG8OYIxVUeM1DsYOYImP5moY2thro6BNUzD-dnF-XMp5KM-SO8Wy6ba5bd0n8b7kJdC9rBQpN41RixpWoB9e7YVm89-LHYh6UG_UHHqcmYKsGS6R0HB1WALjMwW0BdE8-KIVVIUgQwUyTTxdIpnSvXv__RLyvtyiZT8LH-ycbNt5INqGYIBmTlOggGHpP-CYTL6lE9CEtMo1fo3hZtjR7reNGFCTU_d9vQrMRVhPfuXY-CK_NLCtJZXwXATyKRfoe_i4l)
## A rendszer funkciói
- Mentés: Elmenti a felhasználó adatait az adatbázisba. 
- Betöltés: Betölti a felhasználó adatait, előrehaladását az adatbázisból.

## Fogalomtár 
- Reszponzív felület: Mindig igazodik a felület a képerányhoz.

## Funkció-Követelmény megfeleltetés
- **Modifikáció:** *-név:* A felhasználó saját profiljába belépve képes lesz módosítani az adatait.
- **Statisztika:** *-könyvek:* Külön felület, amin a felhasználó láthatja az eddig elért eredményeket.
- **Felület:** *-menü:* Menüpontok, ahol a felhasználó választhat .

