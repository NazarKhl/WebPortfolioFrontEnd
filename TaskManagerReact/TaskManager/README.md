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
