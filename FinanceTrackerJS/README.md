## Dokumentacja panelu sterowania finansami

### Opis:

Ten projekt to prosty pulpit finansowy do śledzenia wydatków. Posiada przyjazny dla użytkownika interfejs ze stroną główną do dodawania wydatków oraz stroną statystyczną wyświetlającą wykres kołowy wydatków.

### Cechy:

Dodaj wydatki: Użytkownicy mogą wprowadzać opisy i kwoty wydatków.

Wyświetlanie wydatków: wszystkie wydatki są wyświetlane w formie listy.

Usuń wydatki: Użytkownicy mogą usuwać wydatki z listy.

Pamięć trwała: wykorzystuje pamięć lokalną, aby zaoszczędzić obciążenie między sesjami.

Strona statystyk: wyświetla wykres kosztów za pomocą Chart.js.

### Pliki: 

indeks.html
Strona główna, na której użytkownicy mogą dodawać i przeglądać wydatki.

statystyki.html
Wyświetla wykres kosztów. Używa Chart.js do reprezentacji wizualnej.

style.css
Zawiera style dla całego projektu. Wykorzystuje ciemny motyw z nowoczesnym designem.

skrypt.js
Obsługuje funkcje dodawania, wyświetlania i usuwania kosztów.

wykresy.js
Renderuje wykres kołowy kosztów przy użyciu danych z localStorage.

### Jak używać:

Dodaj koszty:

Wprowadź opis i kwotę dodatnią.

Kliknij Dodaj wydatek, aby go zapisać.

Zobacz koszty:

Dodane koszty są wyświetlane na liście poniżej pól wejściowych.

Usuń koszty:

Kliknij przycisk Usuń obok wydatku, aby go usunąć.

Zobacz statystyki:

Przejdź do strony Statystyki, aby zobaczyć wykres swoich wydatków.

### Stos technologii:

HTML/CSS

JavaScript

Chart.js do wizualizacji danych
