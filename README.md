# Korepetycje API

REST API do zarządzania korepetycjami zbudowane w oparciu o **NestJS**, **TypeScript** oraz **Prisma**. Projekt zawiera w pełni bezpieczny system autoryzacji opartej na tokenach **JWT** oraz moduły do zarządzania bazą uczniów i harmonogramem lekcji.

## 🚀 Technologie
- **NestJS** (Node.js framework)
- **TypeScript**
- **Prisma ORM** + PostgreSQL
- **Passport.js & JWT** (Autoryzacja)
- **Class-Validator** (Walidacja DTO)
- **Swagger / OpenAPI** (Dokumentacja API)

## 📌 Główne funkcjonalności
- Rejestracja i logowanie nauczycieli z tokenami JWT.
- Pełne zarządzanie uczniami przypisanymi do konkretnego użytkownika.
- Planowanie i przeglądanie lekcji z uwzględnieniem statusu płatności.
- Automatyczna dokumentacja Swagger dostępna pod `/api`.

## 🛠️ Uruchomienie lokalne

1. Sklonuj repozytorium i zainstaluj zależności:
   ```bash
   npm install
