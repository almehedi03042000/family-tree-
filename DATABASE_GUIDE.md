# Sardar Family Tree Database Guide

## Person ID Rule

Every family member must have a unique ID.

Example:

P0001
P0002
P0003

ID never changes.

---

## Gender

male
female

---

## Deceased Person

If a member is deceased:

Example:

Name:
মৃত আলতাফ সর্দার

JSON:

"name": "মৃত আলতাফ সর্দার",
"deceased": true

---

## Photo

Store only the image path.

Example:

images/P0001.jpg

---

## Future Fields

- Birth Date
- Death Date
- Occupation
- Phone
- Address
- Notes

---

## Important Rule

Only male descendants continue the family tree.

Female members will be displayed,
but their descendants will not be expanded.
