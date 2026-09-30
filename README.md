# 2048-with-mods.github.io
## What is it
This is site that allows you to experiment with JavaScript mods.
## How can I use this site
If you need to play, open the `2048-with-mods.github.io`.

If you want to make a mod, read a next answer.
## About mod development
### 1: Download a site copy
If you want to make a 2048 mod, download a copy of this site from this repository.
### 2: Make your mod folder
Make your mod folder in a `/dev/` folder. By default, there is two folders for your mods.
### 3: Make your mod files and folders
Make a files and folders needed for your mod in its folder.

> **Warning:** Don't forget about `config.json`: it is needed for mod configuration.  
> The popup suggestions will help you writing `config.json`.  
> The `turnOn` key let's you test your mod. After turning it on, you must reload page in a browser.
> > **Warning:** `turnOn` is not allowed outside of `/dev/` folder.
### 4: Testing your mod
Before you make step 5 (Publishing), please test a lot of use cases of your mod.  
If there is an error found, fix it.
### 5: Publishing!
> **Tip:** If you publish a bad mod or a mod with a bug, your mod will not be added to mods.  
> If you don't want to fix bugs now, set `version` in `config.json` to `0.a.b` (replace `a` and `b` by numbers)  
> or any other that starts by 0.

Make a **fork** from [Repository made for mods](https://github.com/mark-sss-coder/2048-make-mod/).
Fill the `config.json` there. Also:
- Edit `README.md` that will be used as your mod description;
- Edit `MOD.md` that will be used by me to understand your mod
- Edit `CHANGELOG.md` - enter there all your mod changes;
- Load all your mod files from `/dev/your_mod_folder/` folder

> **Info:** Bad mods or mods that breaks the website **will be not added to mod list**.  
> The one way to use them is to add them to `/dev/` folder.

> **ProTip:** If you need a full access to global object, DOM and more, you can request it:
> ```js
> getAllAccess();
> // or
> getAllAccess('This mod wants a full access because it needed for rendering an image'); // We did selected the reason!
> ```

## (The site is not done)
Please don't use this site because it is not done
