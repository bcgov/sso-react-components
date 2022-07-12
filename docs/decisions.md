# Decision on choosing the third-party library for Tabs component

## Background

The decision on choosing the third-party open source library for `Tabs component` is based on the following criteria

- **Version**
- **License**
- **Last update/publish**
- **Languages**
- **Used by/Downloads**
- **API**
- **Default style**

## Candidates

- **rc-tabs**
- **react-tabs**
- **react-navigation/bottom-tabs**

## Comparison

| Library                                                                                                             | Version  | License | Last update/publish | Languages  | Used by/Downloads | API                                                                    | Default style                                            |
| ------------------------------------------------------------------------------------------------------------------- | -------- | ------- | ------------------- | ---------- | ----------------- | ---------------------------------------------------------------------- | -------------------------------------------------------- |
| [rc-tabs](https://github.com/react-component/tabs)                                                                  | v11.16.0 | MIT     | 2022-Jun            | TypeScript | 155k users        | API types are sufficient for our app design                            |                                                          |
| [react-tabs](https://github.com/reactjs/react-tabs)                                                                 | v5.1.0   | MIT     | 2022-Apr            | JavaScript | 24.6k users       | react-tabs consists of 4 components which all need to be used together | react-tabs does not include any style loading by default |
| [react-navigation/bottom-tabs](https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs) | v6.3.2   | MIT     | 2022-Jul            | TypeScript | 300k/week         | mainly for iOS design                                                  |                                                          |

- Candidates are the most popular choise with acceptable `last update` period, and for web design.

## Decision

`rc-tabs` would be ideal for our app design situation (under the case that `react-bootstrap/Tabs` not considered here), with all relavent APIs that our app needs.
