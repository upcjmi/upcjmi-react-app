# Contributing guideline

Read and Follow [Code of Conduct](/CODE_OF_CONDUCT.md)

## General guidelines

- `Functional components` are preferred over `Class-based components`
- `Typescript` and `SCSS` should only be used (although `less` is supported by build tool but we discourage its use)
- Folder Structure should be strictly followed
- The filename should be in lower camel case with the type of file as semi extension. ex: `main.student.screen.tsx` (_name.semi-extension.file-extension_)
- Prefer `yarn` over `npm`
- No file should have `linting` or `prettier` errors if you feel like this is unnecessary error do suppress with `eslint-disable-next-line`.

## Commit and pull request guidelines

- Commit message should be in the detail
- If you made multiple commits for a feature, merge them to one. [See this](https://gist.github.com/patik/b8a9dc5cd356f9f6f980)
- No use of offensive language. Read [Code of Conduct](/CODE_OF_CONDUCT.md)
- No addition of extra library without proper description why it is necessary.

## Running locally

```shell script
git clone https://github.com/upcjmi/upcjmi-react-app.git
cd upcjmi-react-app
yarn install
yarn start
```

NOTE: We are not running development api.
