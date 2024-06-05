---
title: Naming, the 'Clean Code' Way
date: 2023-06-05
description: Robert C. Martin's naming conventions from the book, "Clean Code, A Handbook of Agile Software Craftsmanship."
---

## Meaningful Names

1. **Use Intention-Revealing Names:**

   - Names should clearly communicate the intent of the variable, function, or class.
   - Example: `isAccountActive` instead of `flag`.

2. **Avoid Disinformation:**

   - Names should not mislead. Avoid using names that could be misunderstood.
   - Example: Avoid naming a variable `list` if it's not a list.

3. **Make Meaningful Distinctions:**

   - Avoid meaningless distinctions in variable names.
   - Example: Use `getActiveUsers` instead of `getUsers` and `getUsers1`.

4. **Use Pronounceable Names:**

   - Names should be easy to pronounce.
   - Example: `userId` instead of `usrId`.

5. **Use Searchable Names:**
   - Avoid single-letter names or numeric constants that are not searchable.
   - Example: `MAX_CONNECTIONS` instead of `10`.

## Classes and Functions

6. **Class Names:**

   - Class names should be nouns or noun phrases.
   - Example: `Customer`, `Account`, `AddressParser`.

7. **Method Names:**
   - Method names should be verbs or verb phrases.
   - Example: `getCustomer`, `saveAccount`.

## Variables

8. **Use Consistent Naming Conventions:**

   - Follow a consistent naming convention throughout your codebase.
   - Example: Use camelCase for variables and functions, PascalCase for class names.

9. **Use Contextual Names:**

   - Include context when necessary to clarify the meaning.
   - Example: `address` might be unclear, but `shippingAddress` is explicit.

10. **Avoid Encodings:**
    - Don't encode type or scope information into names.
    - Example: Avoid `m_variable` for member variables or `szName` for string length.

## Avoid Noise Words

11. **Avoid Noise Words:**
    - Avoid adding redundant words that do not add meaning.
    - Example: `ProductData` is better than `ProductInfo`.

## Longer Names for Larger Scopes

12. **Longer Names for Larger Scopes:**
    - Longer, more descriptive names are acceptable for variables with larger scopes.
    - Example: `numberOfUsers` in a global context vs. `num` in a small, local context.

