# Teszt jegyzőkönyv

### Main Project

|  Dokumentum címe: (azonosítója) |   |
|---|:-:|
| **Minősítés: (állapot)**  |  Jóváhagyott |
| **Verziószám:**  |  ALFA 0.1 |
| **Projekt név:** | 404 könyvtár |
| **Készítette:** | _404 |
| **Utolsó mentés kelte:** | 2021.04.23 |
| **Dokumentum célja:** | A projekt aktualis állapotának bemutatása   |
| **Fájlnév** | test.md |

### Projektben résztvevő fejlesztők:

|  Név | Szerepkör |
|---|:-:|
| Erdélyi Roland | Adatbázis fejlesző |
| Komjati Evelin | Frontend fejlesző |
| Kuborcik Ádám | Backend fejlesző |
| Donkó Róbert Márk | Tesztelő |

## 1. Bevezetés
Tesztelés célja a projektben megtalálható struktúrális és design hibák feltárása.

### 1.1 Tesztelési terv hatóköre, célja:

- A tesztelési terv célja a tesztelés teljes körűségének biztosítása, a tesztelés során alkalmazott eljárások és megoldások meghatározásával.
- A teszt végrehajtásáért ez esetben a test manager fele , és a tesztekést azt általa összeállított tesztcsapat hajtja végre a 2.1. fejezetben meghatározott módon.

### 1.2 Elvárások
#### Az alábbi alap elvárások képezik ennek a teszttervnek az alapját:
- Az olvasó ismeri az alapdokumentumokat, amelyek meghatározzák a rendszert. 
- Az **_404** projektcsapat felelős a tesztadatok előállításáért.

## 2 Szükséges erőforrások
- Böngésző
- Webserver

### 2.1 Feladatkörök és felelősségek (tesztcsapat meghatározása)
| Feladatkör  |  Felelősség/tevékenység |  Személy  |
|---|---|---|
|  **Tesztelő, Teszt-koordinátor:** |  A teszt végrehajtása, észrevételek dokumentálása, teszt dokumentáció archiválása.Teszt terv készítése.  A tesztterv jóváhagyatása a projektmenedzserrel.  Teszt forgatókönyvek létrehozása  Inkonzisztenciák kezelése.  Helyes és időbeni hibakezelés.  Szükség esetén problémák eszkalálása a projekt menedzsernek.  Végső riport készítése.  Teszt dokumentum archiválása.  Az észrevételek státuszának követése, ill. dokumentálása | Erdélyi Roland  |
| **Szakértő:**  |  A szakértő az észrevételek elemzi és megoldást javasol. | Kuborcik Ádám |
|**Projektvezető:**| Teszt terv jóváhagyása  Teszt forgatókönyv (testscript)| Donkó Róbert Márk |

### 2.2 Tesztkörnyezet
| Környezet neve és feladata  |  A hozzáférés módja | Konfiguráció  |
|---|---|---|
| Intellij idea | Offline - Szabad szoftver | Windows 10 - alapértemezett beállítások |
| MongoDB  | Offline - Szabad szoftver | Windows 10 - alapértemezett beállítások |

### 2.3 Tesztadatok
A teszt végrehajtásához szükséges rekordok (tesztadatok) száma: 3
A tesztadatok elkészítéséért és feltöltéséért felelős személy: Donkó Róbert Márk

A tesztadatoknak az alábbi követelményeknek kell megfelelniük:
- Az adatbázisba felvitt adatoknak csak is az UTF-8 kódtáblában található karaktereket szabad tartalmaznia.

### 2.4 Leszállítandó teszt dokumentumok
Az összes teszt dokumentáció és leszállítandó a következő helyen érhető el: [LINK](https://github.com/momszx/Team1)

| Cím  |  Felelős személy | Szállítási gyakorisága  | Szállítás módja |
|---|---|---|---|
|  **GUI teszt - IDL** |  Kuborcik Ádám |  Egyszeri |  github repository |
|  **MongoDB teszt** | Komjati Evelin  |  Egyszeri | github repository  |

### 2.5 Tesztelési eszközök
- Intellij idea *Fejlesztői környezet* [LINK](https://www.jetbrains.com/idea/)
- MongoDB *MongoDB* [LINK](https://www.mongodb.com/)

