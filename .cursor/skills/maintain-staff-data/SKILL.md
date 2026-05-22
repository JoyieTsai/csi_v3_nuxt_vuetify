---
name: maintain-staff-data
description: Add or update employee records in data/staff.json following project conventions. Cross-reference data/leadership.json for photo filenames and leadership bios. Use when adding new staff, updating employee info, or maintaining staff.json.
---

# Maintain Staff Data

## Files

| File | Purpose |
|------|---------|
| `data/staff.json` | All employees — used by `/our-staff/:uid`, Vuex store, static generate routes |
| `data/leadership.json` | Leadership / account management bios on leadership pages — **reference only** for photo filename and display name when the person also appears there |

Dev mode reads local JSON; production uses Firebase (`API.staff`). Update Firebase separately if needed.

## staff.json Record Schema

```json
{
  "uid": "<generated>",
  "firstname": "Norman",
  "lastname": "Galipeau",
  "cover": "NormanGalipeau.png",
  "email": "ngalipeau@csitech.com",
  "employeeID": "1108",
  "phone": "",
  "since": "2026",
  "title": "Account Manager"
}
```

Optional field — include only when provided:

```json
"aka": "Jimmy"
```

## Field Rules

| Field | Rule |
|-------|------|
| `firstname` / `lastname` | Legal/given name split; match leadership `name` when listed there |
| `aka` | Omit entirely if no AKA (do not use `"No AKA"` or empty string) |
| `cover` | Photo filename in CDN/assets. **Check `leadership.json` `src`** for the same person first; otherwise `{Firstname}{Lastname}.{jpg\|png}` or `{Firstname}{Lastname}-{AKA}.{ext}` if AKA exists |
| `email` | `{firstInitial}{lastname}@csitech.com` unless user gives a different address |
| `employeeID` | String, e.g. `"1108"` |
| `phone` | `"XXX-XXX-XXXX"` or `""` if unknown |
| `since` | 4-digit start year only, e.g. `"2026"` (not `"Since 2026"`) |
| `title` | Job title exactly as provided, e.g. `"Account Manager"` |

## Generate `uid`

```
{employeeID}{since}{phoneDigits}
```

- `phoneDigits` = phone with dashes removed, or `7323460200` when phone is empty
- Example: employee `1108`, since `2026`, no phone → `110820267323460200`
- Example: employee `1107`, since `2026`, phone `732-983-6193` → `110720267329836193`

Verify uniqueness: no duplicate `uid` or `employeeID` in the file.

## Insert Location

Keep entries sorted **alphabetically by `firstname`**. Insert the new object in the correct position, not at the end.

## Workflow Checklist

```
- [ ] Read data/staff.json and data/leadership.json
- [ ] Confirm employeeID is not already used
- [ ] Resolve cover filename from leadership.json `src` if person exists there
- [ ] Build record (omit `aka` when none)
- [ ] Generate uid
- [ ] Insert at correct alphabetical position
- [ ] Validate JSON (valid array, trailing commas none)
```

## leadership.json Cross-Reference

Use when the employee appears on leadership / account management pages:

| leadership.json | staff.json |
|-----------------|------------|
| `name` | Split into `firstname` + `lastname` |
| `src` | `cover` |
| `position` | May differ from `title`; staff `title` is the job title for staff directory |
| `type` | `"Account Management"` → typically `title: "Account Manager"` in staff |

Adding to `staff.json` does **not** require changing `leadership.json` unless the user asks to add/update a leadership bio.

## Examples

### New employee, no AKA, no phone (Norman Galipeau)

Input:
- Name: Norman Galipeau
- AKA: No AKA
- Job Title: Account Manager
- Employee ID: 1108
- Since: Since 2026
- Email: ngalipeau@csitech.com

Output entry (insert after `Nicholas`, before `Paul`):

```json
{
  "uid": "110820267323460200",
  "firstname": "Norman",
  "lastname": "Galipeau",
  "cover": "NormanGalipeau.png",
  "email": "ngalipeau@csitech.com",
  "employeeID": "1108",
  "phone": "",
  "since": "2026",
  "title": "Account Manager"
}
```

### Employee with AKA and phone

```json
{
  "uid": "109220242019261453",
  "firstname": "Adam",
  "lastname": "Hampton",
  "cover": "AdamHampton.jpg",
  "email": "ahampton@csitech.com",
  "employeeID": "1092",
  "phone": "201-926-1453",
  "since": "2024",
  "title": "Account Manager"
}
```

With AKA:

```json
{
  "uid": "1057202037329953780",
  "firstname": "James",
  "lastname": "Calderella",
  "aka": "Jimmy",
  "cover": "JimmyCalderella.jpg",
  ...
}
```
