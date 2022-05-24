# Mini project react with fetch

[Demo projektu](https://mini-project-react-fetch.vercel.app/)

## Opis działania

Projekt pobiera losowo 6 użytkowników z fake'owego api ze strony [https://randomuser.me](https://randomuser.me)
Wyświetlane jest zdjęcie użytkownika, przydomek(mr, mrs itp), imię i nazwisko, email, płeć i telefon.
W zależności od płci ustawiany jest kolor na nazwie użytkownika (czerwony - kobieta, zielony - mezczyzna)

Jest też przycisk, który dodaje jednego użytkownika do pozostałych

Blok, w którym są wyświetlani użytkownicy, jest responsywny.

## Czego się nauczyłem?

Przede wszystkim pobierania danych z zewnętrznych źródeł, przetwarzania tych danych oraz wyświetlania ich w
odpowiadającej mi formie.

Nauczyłem się też, gdy używamy stanu dodawanie do tablicy odbywa się za
pomocą [concat()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) (łączenia
tablic),
bo za pomocą [push](https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/push) nie "
odświeżali" mi danych wyświetlanych

