## Intro

This is customized commitizen settings.  
Copy and Paste if you need!

## Quick User Guide

#### You need to install two libraries: `commitizen`, `cz-customizable`

```bash
  npm i -D commitizen cz-customizable
```

Place `.czrc`, `.cz-config.js` on top of your directory.  
You can customize yourself by modifying `.cz-config.js` file.  
More detailed customizing guide on [here](https://github.com/leoforfree/cz-customizable).

To execute commitizen, you can by `npx cz` or create custom script on package.json  
In my case, I combined `git add . && cz && git push` into a script `git` to do all-at-once.  
Now, you can execute it as

```bash
  npm run git   // or
  yarn git      // or
  bun git       // or your personal script
```

## More Info

[github commitizen](https://github.com/commitizen/cz-cli)  
[github cz-customizable](https://github.com/leoforfree/cz-customizable)
