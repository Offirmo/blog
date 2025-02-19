

props

return type

NonNullable

https://www.typescriptlang.org/docs/handbook/utility-types.html

https://github.com/microsoft/TypeScript/wiki/FAQ

https://github.com/pelotom/type-zoo
https://github.com/KiaraGrouwstra/typical?tab=readme-ov-file#similar-projects


negated type?


opaque types

branded primitives https://github.com/microsoft/TypeScript/wiki/FAQ#can-i-make-a-type-alias-nominal  https://github.com/microsoft/TypeScript/issues/59423

overloads https://github.com/microsoft/TypeScript/wiki/FAQ#why-am-i-getting-supplied-parameters-do-not-match-any-signature-error



DO NOT COMMIT https://github.com/Canva/canva/pull/604601#discussion_r1898131033

don't typically see Partial used on an expanded type this way -- it's more idiomatic to encode in the fields, i.e.

id?: number, etc.

(Partial is useful when there already exists a named type with required fields)
