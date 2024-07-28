## Dokumentacja ToDo App przy użyciu localStorage
   
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
