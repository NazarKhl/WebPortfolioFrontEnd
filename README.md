# Dokumentacja do projektów
## 1) Dokumentacja ToDo App przy użyciu localStorage
   
### Opis:

Ten projekt tworzy prostą listę zadań do wykonania z możliwością dodawania, usuwania i oznaczania zadań jako wykonanych. Dane są przechowywane w localStorage w celu zapisywania zadań pomiędzy sesjami.

### Pliki projektu:

indeks.html
Struktura strony: zawiera nagłówek, pole wejściowe, przycisk dodawania i listę zadań.
style.css
Stylizacja: Zaprojektowanie strony pod kątem przyjemnego wyglądu przy użyciu kolorów, czcionek i wcięć.
skrypt.js

### Główne funkcje:

LoadTasks(): Ładuje zadania z localStorage podczas ładowania strony.

addTask(): Dodaje nowe zadanie do listy i przechowuje je w localStorage.

createTaskElement(text,complete): Tworzy element zadania HTML i dodaje go do listy.

toggleTaskCompleted(taskSpan): Przełącza stan zadania (ukończone/niekompletne) i aktualizuje localStorage.

DeleteTask(deleteButton): Usuwa zadanie z DOM i localStorage.

saveTask(tekst, ukończone): Zapisuje nowe zadanie w localStorage.

updateTaskStorage(): aktualizuje localStorage po zmianach na liście.

Dodawanie zadania: Wpisz tekst w polu i kliknij „Dodaj zadanie”.

Ocena za ukończone: Kliknij tekst zadania, aby zmienić jego status.

Usuwanie zadania: Naciśnij przycisk „✖”, aby usunąć zadanie.

### Cechy:

localStorage: Dane są przechowywane lokalnie, co pozwala na przywrócenie listy zadań po ponownym załadowaniu strony.

Interaktywny interfejs: Możliwość łatwego zarządzania listą zadań za pomocą kliknięć.

## 2) Dokumentacja panelu sterowania finansami

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

## 3) Dokumentacja Task Manager

### Opis:

Task Manager to aplikacja React.js, która pozwala użytkownikom efektywnie zarządzać swoimi zadaniami. Zawiera funkcje takie jak dodawanie, usuwanie, edytowanie zadań, oznaczanie ich jako ukończonych i wizualizacja postępu zadań za pomocą wykresów.

### Cechy:

Dodaj zadania: Użytkownicy mogą dodawać nowe zadania wraz z opisem.

Usuń zadania: usuwanie zadań z listy.

Przełącz zakończenie: oznaczaj zadania jako ukończone lub aktywne za pomocą pól wyboru.

Filtr zadań: wyświetl wszystkie, aktywne lub ukończone zadania.

Sortuj zadania: Sortuj zadania alfabetycznie w kolejności rosnącej lub malejącej.

Tabela wykonania zadań: wizualizuj liczbę ukończonych zadań dziennie.

### Składniki

App.js: Główny komponent zarządzający stanem i logiką.

TaskList.js: Renderuje listę zadań.

TaskItem.js: reprezentuje pojedyncze zadanie z kontrolkami.

AddTaskForm.js: Formularz dodawania nowych zadań.

FilterControls.js: Elementy sterujące do zadań filtrowania i sortowania.

TaskChart.js: Wyświetla wykres liniowy ukończonych zadań.

### Wylorzystanie:
Dodawanie zadania: Wprowadź opis zadania w polu wejściowym i kliknij Dodaj zadanie.

Usuń zadanie: Kliknij przycisk Usuń obok zadania.

Oznacz jako ukończone: Użyj tego pola wyboru, aby oznaczyć zadania jako ukończone.

Filtrowanie i sortowanie: Użyj przycisków filtrów, aby przełączać widoki, a przycisków sortowania, aby zmienić kolejność.

Widok wykresu: Wykres jest automatycznie aktualizowany, aby odzwierciedlić ukończone zadania.


### Zależności:
React.js: biblioteka frontendowa do tworzenia interfejsów użytkownika.

Chart.js: Biblioteka do tworzenia wykresów.

React Chart.js 2: Opakowanie React dla Chart.js.

### Local Storage:

Zadania są przechowywane w localStorage, aby zachować trwałość danych między sesjami.
